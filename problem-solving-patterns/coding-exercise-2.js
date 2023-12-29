// averagePair Solution
function averagePair(arr, avg){
  let left = 0;
  let right = arr.length - 1;

  while(left < right){
      const result = (arr[left] + arr[right])/2;
        
      if(result === avg){
          return true;
      }
      
      if(result < avg){
          left++;
      }else{
          right--;
      }
  }
  
  return false;
}

// isSubsequence Solution - Iterative
function isSubsequence(str1, str2) {
  let pointer = 0;
  let result = "";
  if (!str1) return true;
  
  for(let i = 0; i < str2.length; i++){
  
      if(str1[pointer] === str2[i]){
          result += str2[i];
          pointer++;
      }
  }
  
  return result === str1;
}

//OR

function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

// isSubsequence Solution - Recursive but not O(1) Space
function isSubsequence(str1, str2) {
  if(str1.length === 0) return true
  if(str2.length === 0) return false
  if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
  return isSubsequence(str1, str2.slice(1))
}