/*
Given an array of integers A, find and return the count of divisors of each element of the array.

NOTE: Order of the resultant array should be same as the input array.
*/

const solve = (A) => {
  let result = [];
  let max = Math.max(...A);

  let divisorArray = new Array(max + 1).fill(1);

  for (let i = 1; i <= max; i++) {
    for (let j = 2 * i; j <= max; j += i) {
      divisorArray[j] += 1;
    }
  }

  for (let i = 0; i < A.length; i++) {
    result.push(divisorArray[A[i]]);
  }

  return result;
};

const A = [8, 9, 10];

console.log(solve(A));
