/*Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only
 1's and return its area.

 

Example 1:


Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
Output: 4
Example 2:


Input: matrix = [["0","1"],["1","0"]]
Output: 1
Example 3:

Input: matrix = [["0"]]
Output: 0
 

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 300
matrix[i][j] is '0' or '1'.*/

function maximalSquare(matrix) {
  let lengthOfSquare = -Infinity;
  let array = new Array(matrix.length + 1);
  for (let i = 0; i < array.length; i++) {
    array[i] = new Array(matrix[0].length + 1).fill(0);
  }
  for (let i = matrix.length - 1; i >= 0; i--) {
    for (let j = matrix[i].length - 1; j >= 0; j--) {
      let diagonal = array[i + 1][j + 1];
      let right = array[i][j + 1];
      let down = array[i + 1][j];
      if (right == 0 || down == 0 || diagonal == 0 || matrix[i][j] == 0) {
        array[i][j] = Number(matrix[i][j]);
      } else {
        let mesure = Math.min(right, down, diagonal);
        array[i][j] = mesure + 1;
      }
      lengthOfSquare = Math.max(lengthOfSquare, array[i][j]);
    }
  }
  return lengthOfSquare * 2;
}

maximalSquare([
  ["1", "1", "1", "1", "0"],
  ["1", "1", "1", "1", "0"],
  ["1", "1", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["0", "0", "1", "1", "1"],
]);
