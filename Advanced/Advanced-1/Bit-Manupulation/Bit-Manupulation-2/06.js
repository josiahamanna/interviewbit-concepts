/*
Given an integer A.
Two numbers X and Y are defined as follows:

X is the greatest number smaller than A such that XOR sum of X and A is the same as the sum of X and A.
Y is the smallest number greater than A such that XOR sum of Y and A is the same as the sum of Y and A.
Find and return the XOR of X and Y.

NOTE 1: XOR of X and Y is defined as X ^ Y where '^' is the BITWISE XOR operator.

NOTE 2: Your code will be run against a maximum of 100000 Test Cases.
*/

const solve = (A) => {
  let x = 0,
    y = 0,
    msb;

  for (let i = 31; i > -1; i--) {
    if (A & (1 << i)) {
      msb = i;
      break;
    }
  }

  for (let i = 0; i < 32 && i <= msb; i++) {
    if (!(A & (1 << i))) {
      x += Math.pow(2, i);
    }
  }

  for (let i = 31; i > -1; i--) {
    if (A & (1 << i)) {
      y += Math.pow(2, i + 1);
      break;
    }
  }

  console.log(A, A.toString(2), x, x.toString(2), y, y.toString(2));

  return x ^ y;
};

const A = 4;

console.log(solve(A));
