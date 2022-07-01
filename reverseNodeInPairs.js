/*Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without
modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

 

Example 1:


Input: head = [1,2,3,4]
Output: [2,1,4,3]
Example 2:

Input: head = []
Output: []
Example 3:

Input: head = [1]
Output: [1]*/

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

let array = [1];
/*let cuatro = new Node(4);
let tres = new Node(3);
let dos = new Node(2, tres);
let one = new Node(1, dos);
array.push(one);
array.push(dos);
array.push(tres);*/

function reverseNodes(head) {
  if (!head) {
    return;
  }
  head = reversePair(head);
  console.log(head);
  return head;
}

function reversePair(node) {
  if (!node.next) {
    return { node };
  }
  let change = node.next;
  let head = change;
  node.next = change.next;
  head.next = node;
  if (head.next) {
    if (head.next.next) {
      head.next.next = reversePair(head.next.next);
      return head;
    } else {
      return head;
    }
  } else {
    return head;
  }
}

reverseNodes(array[0]);
