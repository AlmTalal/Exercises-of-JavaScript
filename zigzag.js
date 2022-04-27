/*You're given a string, and a number of rows. The idea is that the given string is written in a zigzag pattern, 
and the function should return what the string would read like when read line-by-line.

sample input = [[1,0,0,7,0,0,13],[2,0,6,8,0,12,14],[3,5,0,9,11,0,15],[4,0,0,10,0,0,16]]
sample output = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]*/

function zigzagg(zigzag) {
  let result = [];
  let row = 0;
  let col = 0;
  while (row < zigzag.length && col < zigzag[0].length) {
    for (row; row < zigzag.length; row++) {
      result.push(zigzag[row][col]);
    }
    row = row - 2;
    col = col + 1;
    for (col; col < zigzag[row].length && row > 0; col++) {
      result.push(zigzag[row][col]);
      row--;
    }
  }
  console.log(result);
}

zigzagg([
  [1, 0, 0, 7, 0, 0, 13],
  [2, 0, 6, 8, 0, 12, 14],
  [3, 5, 0, 9, 11, 0, 15],
  [4, 0, 0, 10, 0, 0, 16],
]);

zigzagg([
  [1, 3, 5, 7, 9],
  [2, 4, 6, 8, 10],
]);

zigzagg([
  [1, 3],
  [2, 4],
]);
