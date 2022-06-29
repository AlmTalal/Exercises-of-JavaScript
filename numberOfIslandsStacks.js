function numberOfIslands(grid) {
  let visitedIslands = {};
  let islands = 0;
  let stack = [];
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] == 1 && !visitedIslands[[row, col]]) {
        visitedIslands[[row, col]] = true;
        stack.push([row, col]);
        exploreTheIsland(grid, stack, visitedIslands);
        islands++;
      }
    }
  }
  console.log(islands);
  return islands;
}

function exploreTheIsland(grid, stack, visitedIslands) {
  while (stack[stack.length - 1] !== undefined) {
    last = stack[stack.length - 1];
    let row = last[0];
    let col = last[1];
    if (!visitedIslands[[row + 1, col]] && row + 1 < grid.length) {
      if (grid[row + 1][col] == 1) {
        stack.push([row + 1, col]);
        visitedIslands[[row + 1, col]] = true;
        exploreTheIsland(grid, stack, visitedIslands);
      }
    }
    if (!visitedIslands[[row - 1, col]] && row - 1 >= 0) {
      if (grid[row - 1][col] == 1) {
        stack.push([row - 1, col]);
        visitedIslands[[row - 1, col]] = true;
        exploreTheIsland(grid, stack, visitedIslands);
      }
    }
    if (!visitedIslands[[row, col + 1]] && col + 1 < grid[row].length) {
      if (grid[row][col + 1] == 1) {
        stack.push([row, col + 1]);
        visitedIslands[[row, col + 1]] = true;
        exploreTheIsland(grid, stack, visitedIslands);
      }
    }
    if (!visitedIslands[[row, col - 1]] && col - 1 >= 0) {
      if (grid[row][col - 1] == 1) {
        stack.push([row, col - 1]);
        visitedIslands[[row, col - 1]] = true;
        exploreTheIsland(grid, stack, visitedIslands);
      }
    }
    stack.pop();
    return;
  }
}

numberOfIslands([
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
]);
