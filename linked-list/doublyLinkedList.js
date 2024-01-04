class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      // if the head is null set the head and tail to the new node
      this.head = this.tail = newNode;
    } else {
      // set the next property on the current tail to be the new node
      this.tail.next = newNode;
      // set the previous property on the new node to the the current tail
      newNode.prev = this.tail;
      // set the new tail as the new node
      this.tail = newNode;
    }

    // increment the length of the list
    this.length++;
    // return the list
    return this;
  }

  pop() {
    // if there is no head return undefined
    if (!this.head) return;

    // store the current tail
    const current = this.tail;

    // if the list length is 1 set hedna nd tail to null
    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      // set the new tail as the previous node to the current tail
      this.tail = current.prev;

      // set the next node after the new tail as null and also the old tails previous value as null
      this.tail.next = current.prev = null;
    }
    // decrement the list length
    this.length--;

    // return the removed node
    return current;
  }
}

const list = new DoublyLinkedList();
console.log(list.push(13));
console.log(list.push(14));
console.log(list.push(15));
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
