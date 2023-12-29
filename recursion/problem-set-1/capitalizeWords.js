function capitalizedWords(arr) {
  if (arr.length === 1) return arr[0].toUpperCase();
  let result = [];

  result = result.concat(arr[0].toUpperCase(), capitalizedWords(arr.slice(1)));
  return result;
}

let words = ["i", "am", "learning", "recursion"];
console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
