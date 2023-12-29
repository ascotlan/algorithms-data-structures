function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

var time1 = Date.now();
addUpTo(1000000000);
var time2 = Date.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)
