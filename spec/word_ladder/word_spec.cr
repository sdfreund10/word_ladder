require "spec"
require "../../src/word_ladder/word.cr"

module WordLadder
  describe Word do
    it "is initialized with a value" do
      subject = Word.new("blah")
      subject.value.should eq "blah"
    end
  
    describe "#connect_to?" do
      it "returns true if word is 1 char from other word" do
        subject = Word.new("ruby")
        subject.connects_to?(Word.new("rubs")).should be_true
        subject.connects_to?(Word.new("bleh")).should be_false
      end
    end
  
    describe "#characters_from_word" do
      it "returns the number of different characters between two words" do
        word1 = Word.new("ruby")
        word2 = Word.new("runs")
        subject = word1.characters_from_word(word2)
        subject.should eq 2
      end
    end
  
    describe "#anagram_of" do
      it "find whether two words contain same letters" do
        word = Word.new("ruby")
        anagram = Word.new("bury")
        other = Word.new("none")
  
        word.anagram_of?(anagram).should eq true
        word.anagram_of?(other).should eq false
      end
    end
  end
end

