const sumZero = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[right] + arr[left] === 0) {
      return [arr[left], arr[right]];
    }

    if (arr[right] + arr[left] > 0) {
      right--;
    } else {
      left++;
    }
  }
};

sumZero([-4, -3, -2, -1, 0, 1, 2, 5]);
