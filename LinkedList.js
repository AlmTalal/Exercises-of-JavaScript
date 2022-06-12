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
