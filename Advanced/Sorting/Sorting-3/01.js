/*
Given an integer array A of size N.
You have to find all possible non-empty subsequence of the array of numbers and then, for each subsequence, find the difference between the largest and smallest numbers in that subsequence Then add up all the differences to get the number.

As the number may be large, output the number modulo 1e9 + 7 (1000000007).

NOTE: Subsequence can be non-contiguous.
*/

const solve = (A) => {
  let maxSum = 0,
    minSum = 0;
  A.sort((a, b) => a - b);
  for (let i = 0; i < A.length; i++) {
    maxSum +=
      (((A[i] * 2 ** i) % (10 ** 9 + 7)) + (10 ** 9 + 7)) % (10 ** 9 + 7);
    minSum +=
      (((A[i] * 2 ** (A.length - i - 1)) % (10 ** 9 + 7)) + (10 ** 9 + 7)) %
      (10 ** 9 + 7);
  }
  return (((maxSum - minSum) % (10 ** 9 + 7)) + (10 ** 9 + 7)) % (10 ** 9 + 7);
};

console.log(solve([1, 2, 3, 4, 5]));
