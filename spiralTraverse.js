/*Write a function that takes in an nxm two dimensional array (that can be square-shaped where n==m) 
and returns a one-dimensional array of all the array's elements in spiral order.

Spiral order starts at the top left corner of the two-dimensional array, goes to the right,
 and proveeds in a spiral pattern all the way until every element has been visited

Sample input
array=[
[1,2,3,4],
[12,13,14,5],
[11,16,15,6],
[10,9,8,7],
]

Sample output 
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]*/

function spiralTraverse(array) {
  const result = [];
  let startRow = 0,
    endRow = array.length - 1;
  let startCol = 0,
    endCol = array[0].length - 1;

  while (startRow <= endRow && startCol <= endCol) {
    for (let col = startCol; col <= endCol; col++) {
      result.push(array[startRow][col]);
    }
    for (let row = startRow + 1; row <= endRow; row++) {
      result.push(array[row][endCol]);
    }
    for (let col = endCol - 1; col >= startCol; col--) {
      if (startRow === endRow) break;
      result.push(array[endRow][col]);
    }
    for (let row = endRow - 1; row > startRow; row--) {
      if (startCol === endCol) break;
      result.push(array[row][startCol]);
    }
    startRow++;
    endRow--;
    startCol++;
    endCol--;
  }
  return result;
}

spiralTraverse([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
