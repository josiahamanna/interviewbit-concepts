/*
We define f(X, Y) as number of different corresponding bits in binary representation of X and Y.
For example, f(2, 7) = 2, since binary representation of 2 and 7 are 010 and 111, respectively. The first and the third bit differ, so f(2, 7) = 2.

You are given an array of N positive integers, A1, A2 ,..., AN. Find sum of f(Ai, Aj) for all pairs (i, j) such that 1 ≤ i, j ≤ N. Return the answer modulo 109+7.
*/

const countBit = (number) => {
  let count = 0;

  for (let i = 0; i < 32; i++) {
    if (number & (1 << i)) count++;
  }

  return count;
};

const solve = (A) => {
  let sum = 0,
    mod = 1000000007;
  for (let i = 0; i < 32; i++) {
    let count = 0;
    for (let j = 0; j < A.length; j++) {
      if (A[j] & (1 << i)) count++;
    }

    sum += count * (A.length - count);
    sum %= mod;
  }

  return sum * 2;
};

const A = [1, 3, 5];

console.log(solve(A));
