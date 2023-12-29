function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    let noSwaps;
    for (let j = 0; j < i - 1; j++) {
      noSwaps = true;
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1, noSwaps);
        noSwaps = false;
      }
    }
    if(noSwaps) break;
  }
  return arr;
}

function swap(arr, idx1, idx2) {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

console.log(bubbleSort([2, 1, 0, 21, 76, 4]));
console.log(bubbleSort([1, 2, 3, 4, -1]));
