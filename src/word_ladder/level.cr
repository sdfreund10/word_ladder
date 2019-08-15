require "./word.cr"

# WordLadder::Level
#   Represents a level withing a word "tree" (see tree.cr)
#   
#   Usage:
#     #words        - returns the list of Word objects as an array
#     #includes?    - checks if any words in the level have the provided value
#     #next_level   - calculates which words in provided list connect to a word
#                     in the level
#     #values       - returns the values of all Words within level
#     #remove_where - removes all words from the level for which the provided
#                     block returns true

module WordLadder
  class Level
    getter words
  
    def initialize(words : Array(Word))
      @words = words
    end
  
    def includes?(word : String)
      words.any? { |w| w.value == word }
    end
  
    def next_level(possible_words : Array(Word))
      possible_words.select do |word|
        words.any? { |current_word| current_word.connects_to?(word) }
      end
    end
  
    def values
      words.map { |w| w.value }
    end
  
    def remove_where
      words.reject! do |word|
        yield(word)
      end
    end
  end
end

