// Given N array element calculate sum of |max-min| every sub sequence.

const solve = (A) => {
  let maxSum = 0,
    minSum = 0;
  A = A.sort((a, b) => a - b);
  for (let i = 0; i < A.length; i++) {
    maxSum += A[i] * Math.pow(2, i);
  }
  for (let i = 0; i < A.length; i++) {
    minSum += A[i] * Math.pow(2, A.length - 1 - i);
  }

  return Math.abs(maxSum - minSum);
};

const A = [-2, 3, 4];

console.log(solve(A));
