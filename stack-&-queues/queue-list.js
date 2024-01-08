class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // Method to push the newst value into the queue from the end
  enqueue(value) {
    // create a new node with the passed value
    const newNode = new Node(value);
    // if the queue is empty set the first and last node to equal the new node
    if (!this.first) {
      this.first = this.last = newNode;
    } else {
      // set next property on the last node to equal the newNode
      this.last.next = newNode;
      // set the last node as the new node
      this.last = newNode;
    }

    return ++this.size; //increment then return the size of the queue
  }

  // Method to shift/remove the first value in from the beginning of the queue
  dequeue() {
    // the queue is empty return undefined 
    if(!this.first) return;
    // store the first node in a variable
    const removedNode = this.first;
    // if the queue size is 1, set first and last node to null
    if(this.size === 1){
      this.first = this.last = null;
    }else{
      this.first = removedNode.next; // else set the first node to the next node 
      removedNode.next = null; // set the next property node to be removed as null
    }

    this.size--; // decrement the size of the queue
    return removedNode; // return the removed node
  }
}

const queue = new Queue();
console.log(queue.enqueue(1));
console.log(queue.enqueue(2));
console.log(queue.enqueue(3));
console.log(queue);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue);
