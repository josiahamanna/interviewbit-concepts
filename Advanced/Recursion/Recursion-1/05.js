/*
Given a sequence f(A) = f(A-1) + f(A-2) + f(A-3) + A . Calculate the Ath term of the sequence.

Given f(0)=1; f(1)=1; f(2)=2;
*/

const solve = (A) => {
  if (A === 0 || A === 1) {
    return 1;
  }
  if (A === 2) {
    return 2;
  }
  return solve(A - 1) + solve(A - 2) + solve(A - 3) + A;
};

console.log("ans", solve(3));
