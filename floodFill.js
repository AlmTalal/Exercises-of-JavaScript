function floodFill(image, sr, sc, color) {
  let stack = [];
  let pixelsFound = {};
  stack.push([sr, sc]);
  let toChange = image[sr][sc];
  pixelsFound[[sr, sc]] = true;
  image[sr][sc] = color;
  if (stack[0] !== undefined) {
    findThePixels(image, stack, toChange, color, pixelsFound);
  }
  console.log(image);
}

function findThePixels(image, stack, toChange, color, pixelsFound) {
  while (stack[0] !== undefined) {
    let row = stack[stack.length - 1][0];
    let col = stack[stack.length - 1][1];
    if (row + 1 < image.length) {
      if (image[row + 1][col] === toChange && !pixelsFound[[row + 1, col]]) {
        stack.push([row + 1, col]);
        pixelsFound[[row + 1, col]] = true;
        image[row + 1][col] = color;
        continue;
      }
    }
    if (row - 1 >= 0) {
      if (image[row - 1][col] === toChange && !pixelsFound[[row - 1, col]]) {
        stack.push([row - 1, col]);
        pixelsFound[[row - 1, col]] = true;
        image[row - 1][col] = color;
        continue;
      }
    }
    if (col + 1 < image[row].length && !pixelsFound[[row, col + 1]]) {
      if (image[row][col + 1] === toChange) {
        stack.push([row, col + 1]);
        pixelsFound[[row, col + 1]] = true;
        image[row][col + 1] = color;
        continue;
      }
    }
    if (col - 1 >= 0) {
      if (image[row][col - 1] === toChange && !pixelsFound[[row, col - 1]]) {
        stack.push([row, col - 1]);
        pixelsFound[[row, col - 1]] = true;
        image[row][col - 1] = color;
        continue;
      }
    }
    stack.pop();
  }
  return;
}

floodFill(
  [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
  ],
  1,
  1,
  2
);

floodFill(
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  0,
  0,
  0
);
