/*
Given an integer array A of N integers, find the pair of integers in the array which have minimum XOR value. Report the minimum XOR value.
*/

const solve = (A) => {
  let minXor = Number.MAX_SAFE_INTEGER;
  A.sort((a, b) => a - b);
  for (let i = 1; i < A.length; i++) {
    minXor = Math.min(minXor, A[i] ^ A[i - 1]);
  }

  return minXor;
};

const A = [12, 4, 6, 2];

console.log(solve(A));
