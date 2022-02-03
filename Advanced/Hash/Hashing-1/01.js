/*
Given an integer array, find any pair (i, j) such that j > i A[i] === A[j] && (j-i) is minimum
*/

const solve = (A) => {
  let hashMap = {},
    result = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < A.length; i++) {
    if (hashMap[A[i]] !== undefined) {
      result = Math.min(result, i - hashMap[A[i]]);
      hashMap[A[i]] = i;
    } else {
      hashMap[A[i]] = i;
    }
  }

  return result;
};

console.log(solve([1, 1]));
