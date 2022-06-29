function daiilyTemprerature(temperatures) {
  let stack = [];
  let result = new Array(temperatures.length).fill(0);
  let i = 0;
  while (i < temperatures.length) {
    if (stack[0] !== undefined) {
      if (stack[stack.length - 1].val < temperatures[i]) {
        result[stack[stack.length - 1].idx] = i - stack[stack.length - 1].idx;
        stack.pop();
      } else {
        stack.push(new Node(temperatures[i], i)), i++;
      }
    } else {
      stack.push(new Node(temperatures[i], i)), i++;
    }
  }
  console.log(result);
  return result;
}
class Node {
  constructor(val, idx) {
    this.val = val;
    this.idx = idx;
  }
}

daiilyTemprerature([73, 74, 75, 71, 69, 72, 76, 73]);
