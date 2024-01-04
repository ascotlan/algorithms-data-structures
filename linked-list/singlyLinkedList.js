// piece of data - val
//reference to mext node - next

// Define a Node class for a singly linked list
class Node {
  // Constructor initializes a node with a given value and a next pointer initially set to null
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Define a SinglyLinkedList class
class SinglyLinkedList {
  // Constructor sets up an empty linked list with head, tail, and length properties
  constructor() {
    this.head = null; // Points to the first node in the list
    this.tail = null; // Points to the last node in the list
    this.length = 0; // Keeps track of the number of nodes in the list
  }

  // Method to add a new node with a given value to the end of the list
  push(val) {
    const node = new Node(val); // Create a new node with the given value

    // If the list is initially empty, set both head and tail to the new node
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      // Otherwise, update the next pointer of the current tail to point to the new node,
      // and then set the tail to the new node
      this.tail.next = node;
      this.tail = node;
    }

    this.length++; // Increment the length of the list
    return this; // Return the modified list
  }

  // Method to remove the last node from the list and return it
  pop() {
    if (this.length === 0) return; // If the list is empty, do nothing

    let current = this.head;
    let prev = this.head;

    // Traverse the list to find the last node and the node before it
    while (current.next) {
      prev = current;
      current = current.next;
    }

    // Update the tail to be the node before the last node
    this.tail = prev;
    this.tail.next = null;

    this.length--; // Decrement the length of the list

    // If the list becomes empty, update both head and tail to null
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current; // Return the removed node
  }

  // Method to remove the head from a list and return it
  shift() {
    if (this.length === 0) return; // If the list is empty, do nothing

    // Update the head to be the node after the current head
    let temp = this.head;
    this.head = temp.next;

    this.length--; // Decrement the length of the list

    // If the list becomes empty, update the tail to null
    if (this.length === 0) {
      this.tail = null;
    }

    return temp; // Return the removed node
  }

  // Method to add a new node with a given value to the beginning of the list
  unShift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this; // Return the modified list
  }

  // Method to get the node at a specified index
  get(index) {
    if (index < 0 || index >= this.length) return; // Return undefined for invalid index

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current; // Return the node at the specified index
  }

  // Method to set the value of a node at a specified index
  set(index, val) {
    const node = this.get(index);

    if (!node) {
      return false; // Return false for invalid index
    }

    node.val = val; // Set the value of the node at the specified index
    return true; // Return true to indicate successful operation
  }

  // Method to insert a new node with a given value at a specified index
  insert(index, val) {
    if (index < 0 || index > this.length) return false; // Return false for invalid index
    if (index === this.length) return !!this.push(val); // Use push for adding at the end and return bool
    if (index === 0) return !!this.unShift(val); // Use unShift for adding at the beginning and return bool

    const newNode = new Node(val);
    const prev = this.get(index - 1);
    newNode.next = prev.next;
    prev.next = newNode;
    this.length++;
    return true; // Return true to indicate successful operation
  }

  // Method to remove the node at a specified index
  remove(index) {
    if (index < 0 || index >= this.length) return; // Return undefined for invalid index
    if (index === this.length - 1) return this.pop(); // Use pop for removing the last node
    if (index === 0) return this.shift(); // Use shift for removing the first node

    const prev = this.get(index - 1);
    const removedNode = prev.next;
    prev.next = removedNode.next;
    this.length--;
    return removedNode; // Return the removed node
  }

  reverse() {
    let node = this.head;

    // Swap the tail and the head
    this.head = this.tail;
    this.tail = node;

    let next = null;
    let prev = null;

    //reverse the list
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this; // Return the reversed list
  }
}

// Create a new instance of the SinglyLinkedList class
const list = new SinglyLinkedList();

console.log(list.push("HELLO"));
console.log(list.push("NEW"));
console.log(list.push("WORLD"));
console.log(list.push("!"));
console.log(list.shift());
console.log(list);
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log(list.push(9999));
console.log(list.unShift(1));
console.log(list.unShift(0));
console.log(list.get(0));
console.log(list.set(-1, -2));
console.log(list.get(0));
console.log(list.insert(2, 111));
console.log(list);
console.log(list.get(2));
console.log(list.remove(2));
console.log(list.reverse());
