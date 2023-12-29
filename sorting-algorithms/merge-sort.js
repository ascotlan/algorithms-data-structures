function merge(leftArray, rightArray) {
  let result = [];
  let l = 0;
  let r = 0;
  let k = 0;

  while (l < leftArray.length && r < rightArray.length) {
    if (leftArray[l] <= rightArray[r]) {
      result[k] = leftArray[l];
      l++;
    } else {
      result[k] = rightArray[r];
      r++;
    }
    k++;
  }

  while (l < leftArray.length) {
    result[k] = leftArray[l];
    l++;
    k++;
  }

  while (r < rightArray.length) {
    result[k] = rightArray[r];
    r++;
    k++;
  }

  return result;
}

function mergeSort(inputArray) {
  if (inputArray.length <= 1) return inputArray;

  const midpoint = Math.floor(inputArray.length / 2);
  let leftArray = inputArray.slice(0, midpoint);
  let rightArray = inputArray.slice(midpoint);
  
  leftArray = mergeSort(leftArray);
  rightArray = mergeSort(rightArray);
  return merge(leftArray, rightArray);
}

console.log(mergeSort([2, 1, 0, 21, 76, 4]));
console.log(mergeSort([1, 2, 3, 4, -1]));
