require "spec"
require "../../src/word_ladder/tree.cr"

module WordLadder
  describe Tree do
    describe "#build" do
      it "finds all possible connections until bottom level includes end_word" do
        # most efficient route: new -> sew -> sow OR new -> now -> sow
        subject = Tree.new(Word.new("new"), Word.new("sow"))
        subject.build
        subject.levels.size.should eq 3
        subject.levels.last.includes?("sow").should be_true
      end

      it "gives up when dead end reached" do
        # "vomit" and "abuzz" do not connect to any other word
        # NOTE if this test "fails" the program will enter an infinit loop :/
        subject = Tree.new(Word.new("vomit"), Word.new("abuzz"))
        subject.build
        subject.levels.size.should eq 1
        subject.levels.first.values.should eq ["vomit"]
      end
    end
  
    describe "#trim" do
      it "removes words that not in path from start to end words" do
        # most efficient route: new -> sew -> sow OR new -> now -> sow
        subject = Tree.new(Word.new("new"), Word.new("sow"))
        subject.trim
        subject.levels.map { |lvl| lvl.values }.should eq([
          ["new"],
          ["now", "sew"],
          ["sow"]
        ])
      end
    end
  end
end
  
