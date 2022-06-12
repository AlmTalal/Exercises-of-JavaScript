class Node {
  constructor(val, prev = null, next = null) {
    this.val = val;
    this.prev = prev;
    this.next = next;
  }
}

class MyLinkedList {
  constructor() {
    this.head = null;
    this.index = -1;
  }

  addAtHead(data) {
    if (this.head) {
      const node = new Node(data, null, this.head);
      this.head.prev = node;
      this.head = node;
    } else {
      this.head = new Node(data);
    }
    this.index++;
  }

  addAtTail(data) {
    if (!this.head) {
      return this.addAtHead(data);
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      const node = new Node(data, current, null);
      current.next = node;
    }
    this.index++;
  }

  get(indx) {
    let current = this.head;
    let counter = 0;
    if (indx > this.index || indx < 0) {
      console.log(-1);
      return -1;
    }
    while (current && indx > counter) {
      current = current.next;
      counter++;
    }
    console.log(current.val);
    return current.val;
  }

  addAtIndex(indx, data) {
    if (indx > this.index + 1) {
      return;
    }
    if (!this.head || indx === 0) {
      return this.addAtHead(data);
    }
    if (indx > this.index) {
      return this.addAtTail(data);
    }
    let current = this.head;
    let counter = 0;
    while (current && indx - 1 > counter) {
      current = current.next;
      counter++;
    }
    const node = new Node(data, current, current.next);
    current.next.prev = node;
    current.next = node;
    this.index++;
  }

  deleteAtIndex(indx) {
    if (indx < 0 || indx > this.index) {
      return;
    }
    let counter = 0;
    let current = this.head;
    while (indx !== counter) {
      current = current.next;
      counter++;
    }
    if (!current) {
      return;
    }
    if (current === this.tail) {
      this.tail = current.prev;
    }
    let prev = current.prev;
    let next = current.next;
    if (prev) {
      prev.next = next;
    }
    if (next) {
      next.prev = prev;
    }
    if (indx === 0) {
      this.head = next;
    }
    this.index--;
    return;
  }
}

const LL = new MyLinkedList();

LL.addAtIndex(1, 0);
LL.get(0);
