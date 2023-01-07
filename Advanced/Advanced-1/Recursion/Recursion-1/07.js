/*
Write a program to find the factorial of the given number A.
*/

const solve = (A) => {
  if (A === 0) {
    return 1;
  }

  return solve(A - 1) * A;
};

console.log(solve(6));
