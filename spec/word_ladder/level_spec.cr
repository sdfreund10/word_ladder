require "spec"
require "../../src/word_ladder/level.cr"

module WordLadder
  describe Level do
    describe "#next_level" do
      it "picks words one letter away" do
        level = Level.new([Word.new("ruby")])
        words_to_match = [Word.new("rudy"), Word.new("blah"), Word.new("they")]
        subject = level.next_level(words_to_match)
        subject.should eq [words_to_match[0]]
      end
    end
  
    describe "#includes?" do
      it "checks if any of the level's words have matching value" do
        subject = Level.new([Word.new("hi"), Word.new("hello")])
        subject.includes?("hi").should be_true
        subject.includes?("no").should be_false
      end
    end
  
    describe "#remove_where" do
      it "removes words from level when the block returns true" do
        subject = Level.new([Word.new("hi"), Word.new("hello")])
        subject.remove_where { |w| w.value == "hi" }
        subject.words.size.should eq 1
        subject.words.map { |w| w.value }.should eq ["hello"]
      end
    end
  
    describe "#values" do
      it "returns word values" do
        words = ["hi", "hello"]
        subject = Level.new(words.map { |str| Word.new(str) })
        subject.values.should eq words
      end
    end
  end
end
 
