class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  // Method to push the latest value to the front of the stack
  push(val) {
    // create a new node
    const newNode = new Node(val);

    //if there are no nodes in the stack then set the first and last node as the new Node
    if (!this.first) {
      this.first = this.last = newNode;
    } else {
      // store the current first node in a variable
      const current = this.first;
      // set the next node after the new node as the current first node
      newNode.next = current;
      // update the fist node to be the new node
      this.first = newNode;
    }
    // increment the size of the stack by 1
    return ++this.size;
  }

  // method to remove a node from the front of the stack
  pop(){
    // the stack is empty return undefined 
    if(!this.first) return;
    // store the first node in a variable
    const removedNode = this.first;
    // if the stack size is 1 set first and last node to null
    if(this.size === 1){
      this.first = this.last = null;
    }else{
      this.first = removedNode.next; // else set the first node to the next node 
      removedNode.next = null; // set the next property node to be removed as null
    }
    this.size--; // decrement the stack size by 1
    return removedNode; // return the removed node
  }
}

const myStack = new Stack();

console.log(myStack.push(1));
console.log(myStack.push(2));
console.log(myStack.push(3));
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack);