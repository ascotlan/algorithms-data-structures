// Define a Node class for a binary tree
class Node {
  // Constructor to initialize a node with a given value
  constructor(value) {
    this.value = value; // Value of the node
    this.left = null; // Reference to the left child node
    this.right = null; // Reference to the right child node
  }
}

// Define a BinarySearchTree class
class BinarySearchTree {
  // Constructor to initialize an empty binary search tree
  constructor() {
    this.root = null; // Reference to the root node of the tree
  }

  // Method to insert a new value into the binary search tree
  insert(val) {
    const newNode = new Node(val); // Create a new node with the given value

    // If the tree is empty, set the new node as the root and return the tree
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root; // Start at the root of the tree

    // Traverse the tree to find the appropriate position for the new node
    while (true) {
      if (val === current.value) return; // handle duplicate value

      if (newNode.value > current.value) {
        // If the new value is greater than the current node's value, move to the right
        if (current.right) {
          current = current.right; // Move to the right child node
        } else {
          current.right = newNode; // Set the new node as the right child
          return this; // Return the modified tree
        }
      } else if (newNode.value < current.value) {
        // If the new value is less than the current node's value, move to the left
        if (current.left) {
          current = current.left; // Move to the left child node
        } else {
          current.left = newNode; // Set the new node as the left child
          return this; // Return the modified tree
        }
      }
    }
  }

  find(value) {
    // check if there is a root
    if (!this.root) return !!this.root; // return false

    let current = this.root; // Start at the root of the tree

    // Traverse the tree to find the given value
    while (true) {
      // return true if value found
      if ((value === current.value)) return !!current;
      // If value is greater than the current node's value, move to the right
      if (value > current.value) {
        if (current.right) {
          current = current.right; // Move to the right child node
        } else {
          return !!current.right; // Return false, node not found
        }
      } else if (value < current.value) {
        // If the value is less than the current node's value, move to the left
        if (current.left) {
          current = current.left; // Move to the left child node
        } else {
          return !!current.left; // Return false, node not found
        }
      }
    }
  }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
console.log(tree.insert(10));
console.log(tree.insert(7));
console.log(tree.find(16));
console.log(tree.find(17));
