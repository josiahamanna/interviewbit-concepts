/*
Given an array of integers A and an integer B, we need to reverse the order of the first B elements of the array, 
leaving the other elements in the same relative order.

NOTE: You are required to the first insert elements into an auxiliary queue then perform Reversal of first B elements.
*/

const solve = (A, B) => {
  let aDash = [],
    f = -1;

  for (let i = 0; i < B; i++) {
    aDash.push(A[++f]);
  }

  f = -1;

  for (let i = 0; i < B; i++) {
    A[++f] = aDash.pop();
  }

  return A;
};

console.log(solve([1, 2, 3, 4, 5], 3));
