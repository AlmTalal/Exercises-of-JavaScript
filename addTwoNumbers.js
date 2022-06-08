/*You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order,
and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

Example 1:


Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class MyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addAtHead(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  addAtTail(value) {
    let node = new Node(value);
    let current = this.head;
    if (!this.head) {
      this.size++;
      return (this.head = node);
    }
    while (current.next) {
      current = current.next;
    }
    current.next = node;
    this.size++;
  }

  addAtIndex(index, value) {
    let counter = 0;
    if (index > 0 && !this.head) {
      return -1;
    }
    if (index <= 0) {
      return this.addAtHead(value);
    }
    if (index > this.size - 1) {
      return this.addAtTail(value);
    }
    let node = new Node(value);
    let current = this.head;
    while (counter < index - 1 && current) {
      current = current.next;
      counter++;
    }
    node.next = current.next;
    current.next = node;
    this.size++;
  }

  deleteAtIndex(index) {
    if (index > this.size - 1) {
      return;
    }
    if (!this.head.next) {
      this.size--;
      return (this.head = null);
    }
    if (index === 0) {
      let previous = this.head;
      this.head = previous.next;
      previous.next = null;
      this.size--;
      return;
    }
    let counter = 0;
    let previous = this.head;
    let current = previous.next;
    while (counter < index - 1 && current) {
      previous = previous.next;
      current = current.next;
      counter++;
    }
    previous.next = current.next;
    this.size--;
  }

  get(index) {
    if (index >= this.size) {
      return -1;
    } else {
      let counter = 0;
      let current = this.head;
      while (index > counter && current) {
        current = current.next;
        counter++;
      }
      console.log(current.value);
      return current.value;
    }
  }
}



function addTwoNumbers(l1, l2) {
  const li1 = new MyLinkedList();
  const li2 = new MyLinkedList();
  for (let i = 0; i < l1.length; i++) {
    li1.addAtTail(l1[i]);
  }
  for (let i = 0; i < l2.length; i++) {
    li2.addAtTail(l2[i]);
  }
  const sumLi = [];
  let head1 = li1.head;
  let head2 = li2.head;
  while (head1 && head2) {
    let value = head1.value + head2.value;
    if (value >= 10) {
      value -= 10;
      head1.next.value += 1;
    }
    sumLi.push(value);
    head1 = head1.next;
    head2 = head2.next;
  }
  console.log(sumLi);
}

addTwoNumbers((l1 = [2, 4, 3]), (l2 = [5, 6, 4]));
*/

var addTwoNumbers = function (l1, l2) {
  let head1 = l1; //a pointer for the first list
  let head2 = l2; //a pointer for the second list
  while (head1 || head2) {
    head1.val += head2?.val || 0; //if head2 has finished we add zero
    if (head1.val >= 10) {
      // for taking in count carry
      head1.val %= 10;
      if (head1.next) head1.next.val += 1;
      //when theres still a carry left but we have no more nodes
      else head1.next = new ListNode(1, null);
    }
    if (!head1.next && head2?.next) {
      //l2 is longer than l1 jsut append l2 to l1
      head1.next = head2.next;
      break;
    }

    head1 = head1.next;
    head2 = head2?.next;
  }
  console.log(l1);
};

addTwoNumbers((l1 = [2, 4, 3]), (l2 = [5, 6, 4]));
