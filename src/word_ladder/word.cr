# WordLadder::Tree
#   Represents a single word
#
#   Usage:
#     #value                - the word represented as a string
#     #btyes                - the bytes in the string,
#                             used to optimize the Hamming Distance calculation
#     #btyes                - the bytes in the string,
#                             used to quickly calculate wether two words are
#                             anagrams
#     #connects_to?         - cacluates whether given word is either an anagram
#                             of or one character change from current word
#     #characters_from_word - calculates the number of character changes needed
#                             to convert given word to current word
#                             AKA the Hamming distance
#     #anagram_of?          - calculates given word contains all the same
#                             letters as current word

module WordLadder
  class Word
    getter value, bytes, sorted_bytes
  
    @value : String
    @bytes : Array(UInt8)
    @sorted_bytes : Array(UInt8)
  
    def initialize(value : String)
      @value = value
      @bytes = value.bytes
      @sorted_bytes = @bytes.sort
    end
  
    def connects_to?(word : Word)
      characters_from_word(word) == 1 || anagram_of?(word)
    end
  
    def characters_from_word(other_word : Word)
      diffs = 0
      compare_bytes = other_word.bytes
      bytes.each_index do |ind|
        diffs += 1 if bytes[ind] != compare_bytes[ind]
      end
      diffs
    end
  
    def anagram_of?(other_word : Word)
      sorted_bytes == other_word.sorted_bytes
    end
  end
end
 
