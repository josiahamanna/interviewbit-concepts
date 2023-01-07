/*
Given an array of integers A, every element appears twice except for one. Find that single one.

NOTE: Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
*/

const solve = (A) => {
  return Number(A.reduce((acc, item) => BigInt(acc) ^ BigInt(item), BigInt(0)));
};

const A = [1, 1, 2, 2, 3];

console.log(solve(A));
