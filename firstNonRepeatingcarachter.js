/*Given a string s, find the first non-repeating character in it and return its index.
If it does not exist, return -1.

 

Example 1:

Input: s = "leetcode"
Output: 0
Example 2:

Input: s = "loveleetcode"
Output: 2
Example 3:

Input: s = "aabb"
Output: -1
*/

function firstUniqCarachter(s) {
  s = s.split("");
  let nonRepeatingChar;
  let hashTable = {};
  for (let i = 0; i < s.length; i++) {
    if (hashTable[s[i]] >= 0) {
      hashTable[s[i]] = -1;
    } else if (hashTable[s[i]] === -1) {
      continue;
    } else {
      hashTable[s[i]] = i;
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (hashTable[s[i]] >= 0) {
      nonRepeatingChar = hashTable[s[i]];
      console.log(nonRepeatingChar);
      return nonRepeatingChar;
    } else if (hashTable[s[i]] < 0) {
      continue;
    }
  }
  if (nonRepeatingChar === undefined) {
    console.log(-1);
    return -1;
  }
}

firstUniqCarachter("leetcode");
