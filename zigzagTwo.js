/*Write a function that takes in n x m two-dimesional array (that can be square-shape when n==m) and returns a 
one-dimensional array of all the array's elements in zigzag order.

Zigzag order starts at the top left corner of the two-dimensional array, goes down by one element, and proceeds in a
 zigzag pattern all the way to the bottom right corner.

Sample Input

array=[
[1,3,4,10],
[2,5,9,11],
[6,8,12,15],
[7,13,14,16]
]

Sample Output
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]*/
/*
function zigzag(array) {
  let row = 0;
  let col = 0;
  let result = [];
  result.push(array[row][col]);
  while (row < array.length && col < array[row].length) {
    if (col === 0 || col === array[row].length - 1) {
      if (row + 1 < array.length) {
        row++;
      } else if (col + 1 < array[row].length) {
        col++;
      } else {
        break;
      }
      result.push(array[row][col]);
      while (col < array[row].length && row > 0) {
        row--;
        col++;
        result.push(array[row][col]);
      }
    }
    if (row === 0 || row === array.length - 1) {
      if (col + 1 < array[row].length) {
        col++;
      } else if (row + 1 < array.length) {
        row++;
      } else {
        break;
      }
      result.push(array[row][col]);
      while (row < array.length - 1 && col > 0) {
        row++;
        col--;
        result.push(array[row][col]);
      }
    }
  }
  console.log(result);
}*/

function zigzag(array) {
  let col = 0;
  let row = 0;
  let result = [];
  result.push(array[row][col]);
  while (row < array.length && col < array[row].length) {
    if (row === array.length - 1 && col === array[row].length - 1) {
      break;
    }
    if (col === 0 && row !== array.length - 1) {
      row++;
      result.push(array[row][col]);
      while (col < array[row].length && row > 0) {
        row--;
        col++;
        result.push(array[row][col]);
      }
      continue;
    }
    if (row === 0 && col !== array[row].length - 1) {
      col++;
      result.push(array[row][col]);
      while (row < array.length - 1 && col > 0) {
        row++;
        col--;
        result.push(array[row][col]);
      }
      continue;
    }
    if (col === array[row].length - 1) {
      row++;
      result.push(array[row][col]);
      while (row < array.length - 1 && col > 0) {
        row++;
        col--;
        result.push(array[row][col]);
      }
      continue;
    }
    if (row === array.length - 1) {
      col++;
      result.push(array[row][col]);
      while (col < array[row].length - 1 && row > 0) {
        row--;
        col++;
        result.push(array[row][col]);
      }
      continue;
    }
  }
  console.log(result);
}

zigzag([
  [1, 3],
  [2, 4],
]);

zigzag([
  [1, 3, 4, 10],
  [2, 5, 9, 11],
  [6, 8, 12, 15],
  [7, 13, 14, 16],
]);

zigzag([
  [1, 3, 4, 9, 10],
  [2, 5, 8, 11, 14],
  [6, 7, 12, 13, 15],
]);

zigzag([
  [1, 3, 4, 10],
  [2, 5, 9, 11],
  [6, 8, 12, 17],
  [7, 13, 16, 18],
  [14, 15, 19, 20],
]);
