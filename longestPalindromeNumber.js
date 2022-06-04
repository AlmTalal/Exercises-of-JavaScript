/*Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.
 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.*/

function longestPalindromicNumber(number) {
  number = String(number);
  const array = [...number];
  const reverseArray = [];
  let status = true;
  for (let i = array.length - 1; i >= 0; i--) {
    reverseArray.push(array[i]);
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== reverseArray[i]) {
      status = false;
      break;
    }
  }
  return status;
}

longestPalindromicNumber(121);
