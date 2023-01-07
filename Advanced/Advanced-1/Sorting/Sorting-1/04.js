/*
Given an array A of size N, groot wants you to pick 2 indices i and j such that

1 <= i, j <= N
A[i] % A[j] is maximum among all possible pairs of (i, j).
Help Groot in finding the maximum value of A[i] % A[j] for some i, j.
*/

const solve = (A) => {
  A.sort((a, b) => a - b);

  let i = A.length - 2;
  while (i > 0) {
    if (A[i] % A[A.length - 1]) {
      break;
    }
    i--;
  }
  console.log(i);
  return A[i] % A[A.length - 1];
};

console.log(solve([5, 5, 5, 5]));
