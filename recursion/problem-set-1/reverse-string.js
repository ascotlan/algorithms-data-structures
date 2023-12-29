function reverse(str) {
  if (str.length <= 1) return str;

  return str.slice(-1) + reverse(str.slice(0, -1));
}

console.log(reverse("awesome")); // 'emosewa'
console.log(reverse("rithmschool")); // 'loohcsmhtir'
