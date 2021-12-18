/*
Calcuate GCD of two numbers
*/

const solve = (A, B) => {
  if (A === 10 || A === 1) {
    return 1;
  } else if (A < 10) {
    return 0;
  }
  let sum = 0;
  while (A) {
    sum += A % 10;
    A = Math.floor(A / 10);
  }
  return solve(sum);
};

console.log(solve(83557));
