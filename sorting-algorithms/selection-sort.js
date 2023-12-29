function selectionSort(arr) {
  let minValIndex = -1;
  for (let i = 0; i < arr.length; i++) {
    minValIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minValIndex] > arr[j]) minValIndex = j;
    }
    if (minValIndex !== i) swap(arr, minValIndex, i);
  }

  return arr;
}

function swap(arr, idx1, idx2) {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

console.log(selectionSort([0, 2, 34, 22, 10, 19, 17]));
