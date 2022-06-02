/*Given a string s, find the length of the longest 
substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a
 subsequence and not a substring.*/

function longestSubstring(s) {
  let hashtable = {};
  let location = {};
  let longestSub = 0;
  let array = [...s];
  let currentCounter = 0;
  for (let i = 0; i < array.length; i++) {
    let letter = array[i];
    if (hashtable[letter]) {
      currentCounter = 0;
      let current = i;
      i = location[letter] + 1;
      location[letter] = current;
      hashtable = {};
    }
    letter = array[i];
    if (!hashtable[letter]) {
      hashtable[letter] = true;
      location[letter] = i;
      currentCounter++;
    }
    longestSub = Math.max(longestSub, currentCounter);
  }
  console.log(longestSub);
  return longestSub;
}

longestSubstring("devdf");
