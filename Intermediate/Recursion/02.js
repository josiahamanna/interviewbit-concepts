// Find factorial

const solve = (A) => {
  if (A == 0) {
    return 1;
  } else {
    return A * solve(A - 1);
  }
};

console.log(solve(1));
