// Implementation of a Max Binary Heap data structure
class MaxBinaryHeap {
  // Constructor initializes an empty array to store heap elements
  constructor() {
    this.values = [];
  }

  // Helper method to move a newly inserted element up the heap to maintain the heap property
  bubbleUp() {
    // Start with the index of the last element in the heap
    let index = this.values.length - 1;

    // Calculate the index of the parent element
    let parentIndex = Math.floor((index - 1) / 2);

    // Temporary variable to facilitate swapping
    let parent = null;

    // Continue swapping until the heap property is restored
    while (this.values[parentIndex] < this.values[index]) {
      // Swap the parent and child elements
      parent = this.values[parentIndex];
      this.values[parentIndex] = this.values[index];
      this.values[index] = parent;

      // Update indices for the next iteration
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  // Method to insert a new element into the heap
  insert(element) {
    // Add the new element to the end of the heap
    this.values.push(element);

    // Move the new element up the heap to maintain the heap property
    this.bubbleUp();
  }

  // Helper method to move an element down the heap to maintain the heap property
  bubbleDown() {
    let index = 0;

    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;

      // Check if left child exists
      const leftChild = this.values[leftChildIndex];

      // Check if right child exists
      const rightChild = this.values[rightChildIndex];

      // Find the index of the child with the greater value
      let maxChildIndex;

      // Compare left and right children (considering cases where one child may not exist)
      if (
        leftChild !== undefined &&
        (rightChild === undefined || leftChild > rightChild)
      ) {
        maxChildIndex = leftChildIndex;
      } else {
        maxChildIndex = rightChildIndex;
      }

      // Check if the heap property is violated
      if (this.values[index] < this.values[maxChildIndex]) {
        // Swap the parent and child elements
        const temp = this.values[index];
        this.values[index] = this.values[maxChildIndex];
        this.values[maxChildIndex] = temp;

        // Update index for the next iteration
        index = maxChildIndex;
      } else {
        break; // Exit the loop if the heap property is satisfied
      }
    }
  }

  // Method to extract the maximum value from the heap
  extractMax() {
    // Store the max value to be removed
    const removedValue = this.values[0];

    // Replace the root with the last element and move it down the heap
    this.values[0] = this.values.pop();
    this.bubbleDown();

    // Return the extracted maximum value
    return removedValue;
  }
}

const heap = new MaxBinaryHeap();

heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
heap.insert(1);
heap.insert(45);
heap.insert(199);
console.log(heap.extractMax());
console.log(heap.values);
