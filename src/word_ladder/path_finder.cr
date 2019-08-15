require "./word"
require "./tree"
require "./dictionary"

# WordLadder::PathFinder
#   Computes the path between a provided start_word and end_word
#
#   Usage:
#     start_word  - Provided start word reprensented as a Word object
#     end_word    - Provided end word represented as a Word object
#     paths       - computes all the paths from the start_word to the end_word
#                   represented as an series of arrays containing the words
#                   the comprise a path

module WordLadder
  class PathFinder
    getter start_word, end_word
  
    def initialize(start_word : String, end_word : String)
      validate_words(start_word.downcase, end_word.downcase)
      @start_word = Word.new(start_word.downcase)
      @end_word = Word.new(end_word.downcase)
    end
  
    def paths
      tree = Tree.new(start_word, end_word)
      tree.build.trim
      return Array(String).new if tree.dead_end?

      levels = tree.levels.map { |lvl| lvl.words }
      paths = [levels.pop]
      while next_lvl = levels.pop?
        paths = paths.reduce(Array(Array(Word)).new) do |new_paths, path|
          connections = next_lvl.select { |w|  path.first.connects_to?(w) }
          new_paths + connections.map { |con| [con] + path }
        end
      end
  
      paths.map { |path| path.map { |word| word.value.downcase } }
    end

    private def validate_words(start_word, end_word)
      unless start_word.size == end_word.size
        raise "Start and end word must be of same length"
      end

      unless Dictionary.includes?(start_word) && Dictionary.includes?(end_word)
        raise "Provided words are not valid"
     end
    end
  end
end

