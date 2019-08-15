require "spec"
require "../../src/word_ladder/dictionary.cr"

module WordLadder
  describe Dictionary do
    describe ".english_words" do
      it "returns lots of words" do
        subject = Dictionary.english_words
        subject.size.should be > 250_000
      end
    end
  
    describe ".words_with_size" do
      subject = Dictionary.words_with_size(7)
      subject.all? { |w| w.size == 7 }.should be_true
    end
  end
end

