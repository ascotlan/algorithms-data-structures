function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j = i - 1;
    for (; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j]; //shift larger values
    }
    arr[j + 1] = currentVal; //insert current value
  }

  return arr;
}

console.log(insertionSort([2, 1, 0, 21, 76, 4]));
console.log(insertionSort([1, 2, 3, 4, -1]));
