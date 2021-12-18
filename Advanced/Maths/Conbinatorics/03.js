/*
Given a string A. Find the rank of the string amongst its permutations sorted lexicographically.
Assume that no characters are repeated.

Note: The answer might not fit in an integer, so return your answer % 1000003
*/

const findOne = (S, i, C) => {
  let temp = 0;
  for (let j = i + 1; j < S.length; j++) {
    if (S[i] > S[j]) {
      temp++;
    }
  }
  return temp % C;
};

const findTwo = (S, i, C) => {
  return getFact(S.length - i - 1, C);
};

const getFact = (A, C) => {
  let result = BigInt(1);
  for (let i = 2; i <= A; i++) {
    result = (result * BigInt(i)) % BigInt(C);
  }
  return Number(result % BigInt(C));
};

const solve = (A) => {
  let ans = 0;

  const C = Math.pow(10, 9) + 7;

  for (let i = 0; i < A.length; i++) {
    let lessOnRight = findOne(A, i, C);
    let permutations = findTwo(A, i, C);
    ans += (lessOnRight * permutations) % C;
  }
  return (ans + 1) % C;
};

const A = "EGPA";

console.log(solve(A));
