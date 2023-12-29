function partition(array, l = 0, r = array.length - 1) {
  const pivot = array[l];
  let swapIdx = l + 1;
  for (let j = l + 1; j <= r; j++) {
    if (array[j] < pivot) {
      swap(array, j, swapIdx);
      swapIdx++;
    }
  }
  swap(array, l, swapIdx - 1);
  return swapIdx - 1;
}

function swap(arr, idx1, idx2) {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function quickSort(array, l = 0, r = array.length - 1) {
  if (r <= l) return;

  const pivotIndex = partition(array, l, r);
  quickSort(array, l, pivotIndex - 1); //left portion
  quickSort(array, pivotIndex + 1, r); //right portion

  return array;
}

console.log(quickSort([3, 44, 5, 0, 9, 2, 99, 1, 2]));
