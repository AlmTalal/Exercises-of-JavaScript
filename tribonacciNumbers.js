/*The Tribonacci sequence Tn is defined as follows: 

T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

Given n, return the value of Tn.

 

Example 1:

Input: n = 4
Output: 4
Explanation:
T_3 = 0 + 1 + 1 = 2
T_4 = 1 + 1 + 2 = 4
Example 2:

Input: n = 25
Output: 1389537*/

var tribonacci = function (n) {
  let tribonacciNum;
  if (tribonacciNumbers[n] !== undefined) {
    return tribonacciNumbers[n - 1];
  } else if (tribonacciNumbers[n - 1] !== undefined) {
    tribonacciNum =
      tribonacciNumbers[n - 1] +
      tribonacciNumbers[n - 2] +
      tribonacciNumbers[n - 3];
    tribonacciNumbers.push(tribonacciNum);
    return tribonacciNum;
  } else {
    let i = tribonacciNumbers.length;
    while (i !== n + 1) {
      tribonacciNum =
        tribonacciNumbers[i - 1] +
        tribonacciNumbers[i - 2] +
        tribonacciNumbers[i - 3];
      i++;
      tribonacciNumbers.push(tribonacciNum);
    }
    return tribonacciNum;
  }
};

let tribonacciNumbers = [0, 1, 1];

tribonacci(26);
tribonacci(5);
tribonacci(25);
tribonacci(10);
tribonacci(15);
tribonacci(27);
tribonacci(30);
tribonacci(0);
tribonacci(1);
tribonacci(2);
tribonacci(3);
tribonacci(26);
