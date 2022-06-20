/*Given a string s, return the longest palindromic substring in s.

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"*/

function longestPalindromicSubstring(string) {
  const hashTable = {};
  if (string.length === 1) {
    console.log(string);
  }
  let longestSubstring = "";
  let array = new Array(...string);
  if (string.length === 2) {
    if (array[0] !== array[1]) {
      return array[0];
    } else return array[0] + array[1];
  }
  for (let i = 0; i < array.length - 1; i++) {
    let j = i + 1;
    let currentString = array[i];
    while (j < array.length) {
      currentString += array[j];
      hashTable[currentString] = true;
      j++;
    }
  }
  for (let i = array.length - 1; i >= 1; i--) {
    let j = i - 1;
    let currentString = array[i];
    while (j >= 0) {
      currentString += array[j];
      if (hashTable[currentString]) {
        let currentSubString = currentString;
        if (currentSubString.length > longestSubstring.length) {
          longestSubstring = currentString;
        }
      }
      j--;
    }
  }
  console.log(longestSubstring);
}
longestPalindromicSubstring("aacabdkacaa");
