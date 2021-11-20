/*
Given N array elements, pick any k elements such that | sum of k elements - sum of remaining array elements | is maximised 
Notice it's absolute 

Sort it and do it by yourself
*/

const solve = (A, k) => {
  A = A.sort((a, b) => b - a);
  let max = 0,
    min = 0;

  for (let i = 0; i < k; i++) {
    max += A[i];
  }

  for (let i = k; i < A.length; i++) {
    min += A[i];
  }

  return Math.abs(max - min);
};

const A = [3, -2, 4, -1, 6, 7, 2, 0];

console.log(solve(A, 3));
