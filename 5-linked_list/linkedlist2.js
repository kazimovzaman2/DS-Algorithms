class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }

    if (index === 0) {
      this.prepend(value);
    }

    const newNode = new Node(value);

    let currentNode = this.head;
    let prevNode = null;
    let currentIndex = 0;

    while (currentIndex < index) {
      prevNode = currentNode;
      currentNode = currentNode.next;
      currentIndex++;
    }

    prevNode.next = newNode;
    newNode.next = currentNode;
    this.length++;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    if (index === 0) {
      this.head = this.head.next;
      if (this.length === 1) {
        this.tail = null;
      }
    } else {
      let currentNode = this.head;
      let prevNode = null;
      let currentIndex = 0;

      while (currentIndex < index) {
        prevNode = currentNode;
        currentNode = currentNode.next;
        currentIndex++;
      }

      prevNode.next = currentNode.next;

      if (index === this.length - 1) {
        this.tail = prevNode;
      }
    }

    this.length--;
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }

    let prev = null;
    let curr = this.head;

    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }
}

const myLinkedList = new LinkedList();
myLinkedList.append(10);
myLinkedList.append(5);
myLinkedList.append(16);

myLinkedList.prepend(1);
myLinkedList.prepend(4);
myLinkedList.prepend(2);

myLinkedList.insert(1, 99);
myLinkedList.insert(3, 991412);

myLinkedList.remove(5);

console.log(myLinkedList);
console.log(myLinkedList.printList());
