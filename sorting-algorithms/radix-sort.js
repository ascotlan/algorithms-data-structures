function getDigit(num, position) {
  return Math.floor(Math.abs(num) / Math.pow(10, position)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
  let result = 0;
  arr.forEach((num) => {
    const count = digitCount(num);
    result = result < count ? count : result;
  });

  return result;
}

function radixSort(array) {
  const maxDigits = mostDigits(array);

  for (let k = 0; k < maxDigits; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < array.length; i++) {
      const digit = getDigit(array[i], k);
      digitBuckets[digit].push(array[i]);
    }
    array = [].concat(...digitBuckets);
  }

  return array;
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));
