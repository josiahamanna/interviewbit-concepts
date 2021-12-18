/*
Given an array of integers, every element appears thrice except for one which occurs once.

Find that element which does not appear thrice.

NOTE: Your algorithm should have a linear runtime complexity.

Could you implement it without using extra memory?
*/

const solve = (A) => {
  let result = 0;
  for (let i = 0; i < 32; i++) {
    let count = 0;
    for (let j = 0; j < A.length; j++) {
      if (A[j] & (1 << i)) count++;
    }
    if (count % 3 !== 0) {
      result += Math.pow(2, i);
    }
  }

  return result;
};

const A = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4];

console.log(solve(A));
