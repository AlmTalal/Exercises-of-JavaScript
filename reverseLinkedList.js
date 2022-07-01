class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

let array = [];
//let cuatro = new Node(4);
//let tres = new Node(3, cuatro);
//let dos = new Node(2, tres);
let one = new Node(1);
array.push(one);

function reverseLinkedList(head) {
  let principalHead;
  if (head.next) {
    principalHead = revertHead(head, head.next, principalHead);
    let lastNode = principalHead[1];
    lastNode.next = null;
    principalHead = principalHead[0];
  }
  console.log(principalHead);
  return principalHead;
}

function revertHead(current, nextHead, principalHead) {
  if (nextHead.next) {
    principalHead = revertHead(nextHead, nextHead.next, principalHead);
    principalHead = principalHead[0];
  }
  if (!nextHead.next) {
    nextHead.next = current;
    principalHead = nextHead;
  }
  nextHead.next = current;
  return [principalHead, current];
}

reverseLinkedList(array[0]);
