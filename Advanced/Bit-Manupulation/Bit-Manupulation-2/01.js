/*
Given a positive integer A, the task is to count the total number of set bits in the binary representation of all the numbers from 1 to A.
*/

const solve = (A) => {
  if (!A) {
    return;
  }
  solve(A - 1);
  console.log(A.toString(2));
  return A;
};

const A = 10;

console.log(solve(A));
