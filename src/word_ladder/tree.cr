require "./word.cr"
require "./dictionary.cr"
require "./level.cr"

# WordLadder::Tree
#   Represents a series of steps where each step contains all of the words that
#     connect to any word in the previous step
#
#   Usage:
#     #levels   - returns an array of Level object representing a given step
#     #build    - adds levels to tree until a level containing the end_word is
#                 found or the path is determined to be a dead end
#     #dead_end - true if there is no path from the start_word to the end_word
#     #trim     - removes all words from each level that do not directly connect
#                 the start_word to the end_word

module WordLadder
  class Tree
    getter levels
  
    def initialize(start_word : Word, end_word : Word)
      @start_word = start_word
      @end_word = end_word
      @levels = [Level.new([@start_word])]
      @built = false
      @trimmed = false
      @dead_end = false
    end
  
    def build
      options = Array(Word).new
      Dictionary.words_with_size(@start_word.value.size).each do |w|
        unless @start_word.value == w
          options << Word.new(w)
        end
      end
  
      until @levels.last.includes?(@end_word.value)
        next_level_words = @levels.last.next_level(options)
        if next_level_words.empty?
          @dead_end = true
          return self
        else
          @levels << Level.new(next_level_words)
          options -= @levels.last.words
        end
      end
      @built = true
      self
    end

    def dead_end?
      @dead_end
    end
  
    def trim
      build unless @built
      return self if dead_end?
  
      @levels.last.remove_where { |word| word.value != @end_word.value }
      last_index = @levels.size - 1
      (1..last_index).reverse_each do |index|
        current_level = @levels[index]
        level_above = @levels[index - 1]
        level_above.remove_where do |word|
          current_level.words.none? { |matcher| matcher.connects_to?(word) }
        end
      end
      self
    end
  end
end

