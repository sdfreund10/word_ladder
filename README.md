# Word Ladder
Lightning fast solver of Lewis Carroll's 
[Word Ladder](https://en.wikipedia.org/wiki/Word_ladder)
written in crystal

## Usage
To calculate the path from one word to another, use 
WordLadder::PathFinder#paths

```
WordLadder::PathFinder.new("otter", "tiger").paths
# [["otter", "toter", "titer", "tiger"]]

WordLadder::PathFinder.new("ruby", "cool").paths
# [
#   ["ruby", "rubs", "cubs", "cobs", "coos", "cool"],
#   ["ruby", "rubs", "robs", "cobs", "coos", "cool"],
#   ["ruby", "rubs", "robs", "roos", "coos", "cool"]
# ]
```

