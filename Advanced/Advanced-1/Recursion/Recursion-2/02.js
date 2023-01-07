const solve = (A, B) => {
  if (A === 1 || A === 1) {
    return 0;
  }
  if (B < Math.pow(2, A - 2)) {
    return solve(A - 1, B);
  } else {
    return 1 - solve(A - 1, B - Math.pow(2, A - 2));
  }
};

console.log(solve(4, 15));
