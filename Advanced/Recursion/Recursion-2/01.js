const solve = (N, source, temp, dest) => {
  if (N === 0) {
    return;
  }
  solve(N - 1, source, dest, temp);
  console.log(N, source, dest);
  solve(N - 1, temp, source, dest);
};

const A = "";

console.log(solve(100, "A", "B", "C"));
