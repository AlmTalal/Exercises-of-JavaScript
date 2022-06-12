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
    let node;
    if (!value.next) {
      node = new Node(value);
    } else {
      node = value;
    }
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
      console.log(current.next);
    }
  }

  changeNext(currentIdx, nextIdx) {
    let head = this.head;
    let current = this.head;
    if (current > this.size - 1 || current < 0) {
      return;
    }
    let i = 0;
    while (i < nextIdx && head) {
      head = head.next;
      i++;
    }
    let j = 0;
    while (j < currentIdx && current) {
      current = current.next;
      j++;
    }
    current.next = head;
  }

  addABonchOfEle(element) {
    if (element === undefined || element === []) {
      return;
    }
    element = element.map((element) => this.addAtTail(element));
  }

  getIndex() {
    console.log(this.size - 1);
    return this.size - 1;
  }
}

function hashCycle(linkedList) {
  let index = 0;
  let hashTable = {};
  let repetition = false;
  let head = linkedList.head;
  while (head) {
    if (hashTable[head.value]) {
      if (hashTable[head.value] < index) {
        repetition = true;
        console.log(repetition);
        console.log(hashTable[head.value]);
        return { repetition };
      }
    } else {
      hashTable[head.value] = index;
      head = head.next;
    }
    index++;
  }

  console.log(repetition);
  return repetition;
}

function linkTwoLinkedList(linkedList1, linkedList2) {
  linkedList1.size = linkedList1.size + linkedList2.size - 1;
  linkedList1.addAtTail(linkedList2.head);
  return linkedList1;
}

function findIntersection(linkedList1, linkedList2) {
  let headOne = linkedList1.head;
  let counter = 1;
  let hashTable = {};
  while (headOne) {
    hashTable[headOne] = counter;
    counter++;
    headOne = headOne.next;
  }
  counter = 0;
  let headTwo = linkedList2.head;
  while (headTwo) {
    if (hashTable[headTwo]) {
      return [counter, headTwo.value, hashTable[headTwo]];
    } else {
      counter++;
      headTwo = headTwo.next;
    }
  }
  return "there is not intersection";
}

function twoPointersCycle(linkedList) {
  if (!linkedList.head || !linkedList.head.next) {
    return false;
  }
  let slow = linkedList.head;
  let fast = linkedList.head;
  let repetition = false;
  while (fast.next !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast === slow) {
      repetition = true;
      console.log(repetition);
      return repetition;
    }
  }
  console.log(repetition);
  return repetition;
}

const linkedList = new MyLinkedList();
const intersection = new MyLinkedList();
const linkedList1 = new MyLinkedList();
linkedList.addABonchOfEle([4, 1, 8, 4, 5]);
linkedList1.addABonchOfEle([5, 6, 1, 8, 4, 5]);
intersection.addABonchOfEle([-3, -2, -1, 0]);
linkedList1.addAtTail(1);
linkTwoLinkedList(linkedList, intersection);
linkTwoLinkedList(linkedList1, intersection);
const x = findIntersection(linkedList, linkedList1);
console.log(x);
