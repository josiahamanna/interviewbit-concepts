// Print all N numbers

const solve = (A) => {
  if (A) {
    console.log(A);
    solve(A - 1);
  } else {
    return;
  }
};

console.log(solve(10));
