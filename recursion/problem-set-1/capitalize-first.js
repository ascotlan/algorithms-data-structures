function capitalizeFirst(arr) {
  let result = [];

  for (let word of arr) {
    if (word.length === 1) return word[0].toUpperCase();
   
    result = result.concat(capitalizeFirst(word.slice(0, 1)) + word.slice(1));
  }

  return result;
}

console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']
