function power(...args) {
  let power = 1;

  function helper(args) {
    if (args[1] === 0) return;
    power *= args[0];
    helper([args[0], args[1] - 1]);
  }

  helper([...args]);

  return power;
}

//alternative

function power(num, exp) {
  if (exp === 0) return 1;

  return num * power(num, exp - 1);
}

console.log(power(2, 0));
console.log(power(2, 2));
console.log(power(2, 4));
