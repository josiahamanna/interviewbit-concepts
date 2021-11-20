// Fibonacci series
// N: 0 1 2 3 4 5 . . .
// R: 1 1 2 3 5 8 . . .

const solve = (A) => {
  if (A == 1 || A == 0) {
    return 1;
  } else {
    return solve(A - 1) + solve(A - 2);
  }
};

console.log(solve(10));
