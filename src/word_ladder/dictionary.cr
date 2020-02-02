require "zip"

# WordLadder::Dictionary
#   Utilities to query valid english words
#   Words come from Scrabble's list of allowed words
#   https://drive.google.com/file/d/0B9-WNydZzCHrdDVEc09CamJOZHc/view
#   
#   Usage:
#     .english_words    - returns a list of all valid words
#     .words_with_size  - returns all valid words with the provided length
#     .includes?        - checks for provided word within list of valid words

module WordLadder
  class Dictionary
    @@english_words : Array(String)
    @@english_words = File.read("./src/word_ladder/words/words.txt").split

    def self.english_words
      @@english_words
    end
  
    def self.words_with_size(size : Int32)
      english_words.select { |word| word.size == size }
    end

    def self.includes?(word : String)
      english_words.includes?(word)
    end
  end
end

