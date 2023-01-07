/*
Given an array of integers A, find and return whether the given array contains a non-empty subarray with a sum equal to 0.

If the given array contains a sub-array with sum zero return 1 else return 0.
*/

const solve = (A) => {
  let prefix = [A[0]],
    hashMap = {},
    result = 0;

  for (let i = 1; i < A.length; i++) {
    prefix[i] = A[i] + prefix[i - 1];
    if (prefix[i] === 0) {
      result = 1;
      break;
    }
  }

  for (let i = 0; i < A.length; i++) {
    if (hashMap[prefix[i]]) {
      result = 1;
      break;
    } else {
      hashMap[prefix[i]] = 1;
    }
  }

  return result;
};
console.log(solve([-1, 1]));
