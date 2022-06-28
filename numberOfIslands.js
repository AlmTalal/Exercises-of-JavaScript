function numberOfIslands(grid) {
  let islands = 0;
  const visitedIslands = {};
  for (let rows = 0; rows < grid.length; rows++) {
    for (let cols = 0; cols < grid[rows].length; cols++) {
      if (visitedIslands[[rows, cols]] === true) {
        continue;
      }
      let pieceOfGrid = grid[rows][cols];
      if (pieceOfGrid == 1) {
        findTheIsland(rows, cols, visitedIslands, grid);
        islands++;
      } else {
        continue;
      }
    }
  }
  console.log(islands);
}

function findTheIsland(rows, cols, visitedIslands, grid) {
  const queue = [];
  queue.push([rows, cols]);
  visitedIslands[[rows, cols]] = true;
  while (queue[0] !== undefined) {
    let row = queue[0][0];
    let col = queue[0][1];
    if (row + 1 < grid.length && visitedIslands[[row + 1, col]] !== true) {
      if (grid[row + 1][col] == 1) {
        queue.push([row + 1, col]);
        visitedIslands[[row + 1, col]] = true;
      }
    }
    if (row - 1 >= 0 && visitedIslands[[row - 1, col]] !== true) {
      if (grid[row - 1][col] == 1) {
        queue.push([row - 1, col]);
        visitedIslands[[row - 1, col]] = true;
      }
    }
    if (col + 1 < grid[row].length && visitedIslands[[row, col + 1]] !== true) {
      if (grid[row][col + 1] == 1) {
        queue.push([row, col + 1]);
        visitedIslands[[row, col + 1]] = true;
      }
    }
    if (col - 1 >= 0 && visitedIslands[[row, col - 1]] !== true) {
      if (grid[row][col - 1] == 1) {
        queue.push([row, col - 1]);
        visitedIslands[[row, col - 1]] = true;
      }
    }
    queue.shift();
  }
  return;
}

numberOfIslands([[1]]);
