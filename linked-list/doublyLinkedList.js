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

  // Method to add a new node with a given value to the end of the list
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

  // Method to remove the last node from the list and return it
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

  // Method to remove the head from a list and return it
  shift() {
    // if length is 0, return undefined
    if (this.length === 0) return;
    // store the current head property in a variable
    const oldHead = this.head;

    // set head and tail to null if length is 1
    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      // Set new head to the next node from the current head
      this.head = oldHead.next;
      // set he prev node on the new head to null
      this.head.prev = null;
      //set the next node from the old head to null
      oldHead.next = null;
    }

    this.length--; // decrement length
    return oldHead; //return old head
  }

  // Method to add a new node with a given value to the beginning of the list
  unShift(val) {
    // create a new node
    const newNode = new Node(val);

    // if the length is 0 set the head and tail to the new node
    if (this.length === 0) {
      this.head = this.tail = newNode;
    } else {
      // set the prev property on the current head to the new node
      this.head.prev = newNode;
      // set the next property on the new node to the current head
      newNode.next = this.head;
      // update the head to be the new node
      this.head = newNode;
    }
    // increment the length of the list
    this.length++;
    return this; //return the updated list
  }

  // Method to get the node at a specified index
  get(index) {
    // if index is invalid return undefined
    if (index < 0 || index >= this.length) return;

    let current = null;

    // if the index is less than or equal to half the length of the list
    if (index <= this.length / 2) {
      // set the current node as the head
      current = this.head;
      // loop through forward until you reach the desired node
      for (let i = 0; i < index; i++) {
        current = current.next; // traverse the list
      }
    } else {
      // set the current node as the tail
      current = this.tail;
      // loop through backwards until you reach the desired node
      for (let i = this.length - 1; i > index; i--) {
        current = current.prev; // traverse the list
      }
    }
    return current;
  }

  // Method to set the value of a node at a specified index
  set(index, val){
    // get the node 
    const node = this.get(index);

    // if the node exists set the new value and return true
    if(node){
      node.val = val;
      return true; 
    }

    // return false if the node is undefined
    return false;
  }

  // Method to insert a new node with a given value at a specified index
  insert(index, val){
    // return false if the node is undefined
    if(index < 0 || index > this.length) return false;

    // insert node with val at the start of list and return true
    if(index === 0) return !!this.unShift(val);

    // insert node with val at the end of list and return true
    if(index === this.length) return !!this.push(val);

    // create a new node with value of val
    const newNode = new Node(val);
    
    // get the node before the desired index
    const foundNode = this.get(index - 1);

    // set the next value of the new node to next node at index + 1  
    newNode.next = foundNode.next;
    // set he prev value on the new node to the node at index - 1
    newNode.prev = foundNode;
    
    // set the prev value on the node at index + 1 to the new node
    foundNode.next.prev = newNode;
    // set the next value on the node at index - 1 to the new node
    foundNode.next = newNode;
    
    this.length++; // increment the list length
    return true; // return true
  }

  // Method to remove the node at a specified index
  remove(index){
    if(index < 0 || index >= this.length) return; // return undefined if index not valid
    if(index === 0) return this.shift(); // return true 
    if(index === this.length - 1) return this.pop(); // return true

    // find the node at the give index
    const foundNode = this.get(index);
    const beforeNode = foundNode.prev;
    const afterNode = foundNode.next;

    // remove the found node from the list
    beforeNode.next = afterNode; // update the before node
    afterNode.prev = beforeNode; // update the after node
    foundNode.next = foundNode.prev = null;
    this.length--; //decremet the length of the list
    return foundNode; // return the removed node
  }
}

const list = new DoublyLinkedList();
console.log(list.push(13));
console.log(list.push(14));
console.log(list.push(15));
console.log(list.shift());
console.log(list.shift());
console.log(list.shift());
console.log(list.shift());
console.log(list.unShift("UnShift"));
console.log(list.push("Worked!"));
console.log(list.unShift("Congrats!"));
console.log(list.get(2));
console.log(list.get(1));
console.log(list.get(0));
console.log(list.get(3));
console.log(list.get(-1));
console.log(list.set(1, "SET"));
console.log(list.insert(1, "Insert & Remove"));
console.log(list.remove(2));
console.log(list.remove(0));
console.log(list);

