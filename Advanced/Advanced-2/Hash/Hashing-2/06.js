/*
Given two integer array A and B of size N and M respectively. Your task is to find all the common elements in both the array.

NOTE:

Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.
*/

const solve = (A, B) => {
  let hashA = {},
    hashB = {},
    result = [];

  for (let i = 0; i < A.length; i++) {
    if (hashA[A[i]]) {
      hashA[A[i]]++;
    } else {
      hashA[A[i]] = 1;
    }
  }

  for (let i = 0; i < B.length; i++) {
    if (hashB[B[i]]) {
      hashB[B[i]]++;
    } else {
      hashB[B[i]] = 1;
    }
  }

  for (let key in hashA) {
    if (hashB[key]) {
      let repeat = Math.min(hashA[key], hashB[key]);
      for (let j = 0; j < repeat; j++) {
        result.push(key);
      }
    }
  }

  return result;
};

console.log(solve([1, 2, 2, 1], [2, 3, 1, 2]));
