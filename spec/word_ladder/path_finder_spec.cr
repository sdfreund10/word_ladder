require "spec"
require "../../src/word_ladder/path_finder.cr"

module WordLadder
  describe PathFinder do
    it "raises error if provided word that isn't in dictionary" do
      expect_raises(Exception, "Provided words are not valid") do
        PathFinder.new("awsdf", "hello")
      end
    end

    it "converts start and end word to lower case" do
      subject = PathFinder.new("TALL", "Dads")
      subject.start_word.value.should eq "tall"
      subject.end_word.value.should eq "dads"
    end

    it "raises error if initialized with words of different length" do
      expect_raises(Exception, "Start and end word must be of same length") do
        PathFinder.new("blah", "meh")
      end
    end
  
    describe "#paths" do
      it "computes paths from start to end" do
        # news, sews, saws, sows
        subject = PathFinder.new("ruby", "cool")
        subject.paths.sort.should eq [
          ["ruby", "rubs", "cubs", "cobs", "coos", "cool"],
          ["ruby", "rubs", "robs", "cobs", "coos", "cool"],
          ["ruby", "rubs", "robs", "roos", "coos", "cool"]
        ].sort
      end
    end
  end
end
