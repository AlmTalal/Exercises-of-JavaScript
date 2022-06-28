/*You are given an m x n grid rooms initialized with these three possible values.

-1 A wall or an obstacle.
0 A gate.
INF Infinity means an empty room. We use the value 231 - 1 = 2147483647 to represent INF as you may assume that the 
distance to a gate is less than 2147483647. Fill each empty room with the distance to its nearest gate. If it is impossible
to reach a gate, it should be filled with INF.

 

Example 1:


Input: rooms = [[2147483647,-1,0,2147483647],[2147483647,2147483647,2147483647,-1],[2147483647,-1,2147483647,-1],
[0,-1,2147483647,2147483647]]
Output: [[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,4]]
Example 2:

Input: rooms = [[-1]]
Output: [[-1]]*/

function wallsAndGates(rooms) {
  let queue = [];
  let hashTable = {};
  for (let i = 0; i < rooms.length; i++) {
    for (j = 0; j < rooms[i].length; j++) {
      if (rooms[i][j] === 0) {
        queue.push([i, j]);
        hashTable[(i, j)] = true;
      }
    }
  }
  while (queue[0] !== undefined) {
    let row = queue[0][0];
    let col = queue[0][1];
    getFrontSpaces(row, col, queue, rooms);
    queue.shift();
  }
  console.log(rooms);
}

function getFrontSpaces(row, col, queue, rooms) {
  let distance = rooms[row][col] + 1;
  if (
    row + 1 < rooms.length &&
    rooms[row + 1][col] === 2147483647 &&
    rooms[row + 1][col] !== -1
  ) {
    rooms[row + 1][col] = distance;
    queue.push([row + 1, col]);
  }
  if (
    row - 1 >= 0 &&
    rooms[row - 1][col] === 2147483647 &&
    rooms[row - 1][col] !== -1
  ) {
    rooms[row - 1][col] = distance;
    queue.push([row - 1, col]);
  }
  if (
    col - 1 >= 0 &&
    rooms[row][col - 1] === 2147483647 &&
    rooms[row][col - 1] !== -1
  ) {
    rooms[row][col - 1] = distance;
    queue.push([row, col - 1]);
  }
  if (
    col + 1 < rooms[row].length &&
    rooms[row][col + 1] === 2147483647 &&
    rooms[row][col + 1] !== -1
  ) {
    rooms[row][col + 1] = distance;
    queue.push([row, col + 1]);
  }
  return;
}

wallsAndGates([
  [2147483647, -1, 0, 2147483647],
  [2147483647, 2147483647, 2147483647, -1],
  [2147483647, -1, 2147483647, -1],
  [0, -1, 2147483647, 2147483647],
]);
