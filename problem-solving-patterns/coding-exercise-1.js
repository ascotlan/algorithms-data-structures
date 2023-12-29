// sameFrequency Solution

function sameFrequency(num1, num2) {
  const str1 = num1.toString();
  const str2 = num2.toString();

  if (str1.length !== str2.length) {
    return false;
  }

  const freqCounter = {};

  for (let el of str1) {
    freqCounter[el] = (freqCounter[el] || 0) + 1;
  }

  for (let el of str2) {
    if (!freqCounter[el]) {
      return false;
    } else {
      freqCounter[el] -= 1;
    }
  }

  return true;
}

// areThereDuplicates Solution (Frequency Counter)
function areThereDuplicates(...args) {
  const freqCounter = {};

  for (let el of args) {
    freqCounter[el] = (freqCounter[el] || 0) + 1;

    if (freqCounter[el] > 1) {
      return true;
    }
  }

  return false;
}

// areThereDuplicates Solution (Multiple Pointers)

function areThereDuplicates(...args) {
  args.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });

  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

// areThereDuplicates One Liner Solution

function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}
