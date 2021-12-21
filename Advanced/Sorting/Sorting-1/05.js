/*
Given an array of integers A, sort the array into a wave like array and return it, In other words, arrange the elements into a sequence such that

a1 >= a2 <= a3 >= a4 <= a5…..
NOTE : If there are multiple answers possible, return the one that's lexicographically smallest.
*/

const solve = (A) => {
  A.sort((a, b) => a - b);
  const swap = (a, b) => {
    A[a] = A[a] ^ A[b];
    A[b] = A[a] ^ A[b];
    A[a] = A[a] ^ A[b];
  };

  for (let i = 1; i < A.length; i += 2) {
    swap(i - 1, i);
  }

  return A;
};

console.log(solve([1, 2, 3, 4]));
