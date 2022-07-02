class Node {
  constructor(value, right = null, left = null) {
    this.value = value;
    this.right = right;
    this.left = left;
  }
}

let head = new Node(5);
let leftChild = new Node(4);
let rightChild = new Node(6);
head.left = leftChild;
head.right = rightChild;

function findTheDepth(root) {
  let currentDepth = 1;
  let maxDepth = 1;
  let stack = [];
  stack.push(root);
  let array = traverseTheNode(stack, maxDepth, currentDepth);
  maxDepth = array[1];
  return maxDepth;
}

function traverseTheNode(stack, maxDepth, currentDepth) {
  let node = stack[stack.length - 1];
  if (node.left) {
    currentDepth++;
    stack.push(node.left);
    let array = traverseTheNode(stack, maxDepth, currentDepth);
    currentDepth = array[0];
    maxDepth = array[1];
  }
  if (node.right) {
    currentDepth++;
    stack.push(node.left);
    let array = traverseTheNode(stack, maxDepth, currentDepth);
    currentDepth = array[0];
    maxDepth = array[1];
  }
  maxDepth = Math.max(currentDepth, maxDepth);
  currentDepth--;
  stack.pop();
  return [currentDepth, maxDepth];
}

findTheDepth(head);
