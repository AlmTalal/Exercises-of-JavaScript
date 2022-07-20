/*Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated 
sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.

 

Example 1:

Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
Example 2:

Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.
Example 3:

Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: false*/

function wordBreak(s, wordDict, suffixBank = {}) {
  let status;
  if (s in suffixBank) return suffixBank[s];
  if (s === "") {
    return true;
  }
  suffixBank[s] = false;
  for (let word of wordDict) {
    if (s.indexOf(word) === 0) {
      let suffix = s.slice(word.length);
      status = wordBreak(suffix, wordDict, suffixBank);
    }
    if (status === true) {
      suffixBank[s] = status;
    }
  }
  console.log(suffixBank[s]);
  return suffixBank[s];
}

//wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]);
//wordBreak("leetcode", ["leet", "code"]);
wordBreak("applepenapple", ["apple", "pen"]);
