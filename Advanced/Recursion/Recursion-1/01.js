/*
Calcuate GCD of two numbers
*/

const solve = (A, B) => {
  if (B === 0) return A;
  if (A > B) return solve(A % B, B);
  else return solve(A, B % A);
};

const A = 7;
const B = 35;

console.log(solve(A, B));
