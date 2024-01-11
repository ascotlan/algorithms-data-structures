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
      if (value === current.value) return !!current;
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

  // A method to search the tree in a breadth first appraoch
  breadthFirstSearch() {
    const queue = []; // Initialize a queue to keep track of nodes to visit
    const visited = []; // Initialize an array to store the visited nodes' values
    let removed = this.root; // Variable to keep track of the current node being processed

    queue.push(this.root); // Start the traversal by adding the root to the queue

    while (queue.length) {
      removed = queue.shift(); // Remove the front node from the queue (FIFO)
      visited.push(removed.value); // Add the value of the removed node to the visited array

      if (removed.left) queue.push(removed.left); // Enqueue the left child if it exists
      if (removed.right) queue.push(removed.right); // Enqueue the right child if it exists
    }

    return visited; // Return the array of visited node values in BFS order
  }

  // Method to search the tree in a depth-first, pre-order approach
  dfsPreOrder() {
    const visited = []; // Initialize an array to store the visited nodes' values
    const current = this.root; // Set the current node to the root of the tree

    // Helper function for recursive pre-order traversal
    const helper = (node) => {
      visited.push(node.value); // Visit the current node and add its value to the visited array

      // Recursively traverse the left subtree if it exists
      if (node.left) {
        helper(node.left);
      }

      // Recursively traverse the right subtree if it exists
      if (node.right) {
        helper(node.right);
      }
    };

    helper(current); // Start the pre-order traversal from the root
    return visited; // Return the array of visited node values in pre-order
  }

  // Method to search the tree in a depth-first, post-order approach
  dfsPostOrder(){
    const visited = []; // Initialize an array to store the visited nodes' values

    const current = this.root; // Set the current node to the root of the tree

    // Helper function for recursive pre-order traversal
    const helper = (node) => {
      // Recursively traverse the left subtree if it exists
      if (node.left) {
        helper(node.left);
      }

      // Recursively traverse the right subtree if it exists
      if (node.right) {
        helper(node.right);
      }

      visited.push(node.value); // Visit the current node and add its value to the visited array
    }

    helper(current); // Start the pre-order traversal from the root
    return visited; // Return the array of visited node values in pre-order
  }

   // Method to search the tree in a depth-first, in-order approach
   dfsInOrder(){
    const visited = []; // Initialize an array to store the visited nodes' values

    const current = this.root; // Set the current node to the root of the tree

    // Helper function for recursive pre-order traversal
    const helper = (node) => {
      // Recursively traverse the left subtree if it exists
      if (node.left) {
        helper(node.left);
      }

      visited.push(node.value); // Visit the current node and add its value to the visited array

      // Recursively traverse the right subtree if it exists
      if (node.right) {
        helper(node.right);
      }
    }

    helper(current); // Start the pre-order traversal from the root
    return visited; // Return the array of visited node values in pre-order
  }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree.breadthFirstSearch());
console.log(tree.dfsPreOrder());
console.log(tree.dfsPostOrder());
console.log(tree.dfsInOrder());
