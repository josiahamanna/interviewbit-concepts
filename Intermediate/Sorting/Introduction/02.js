const solve = (A) => {
  let min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < A.length - 1; i++) {
    min = Math.min(min, Math.abs(A[i] - A[i + 1]));
  }

  return min;
};

const arr = [9, 14, 21, 7, -3, 4, 26, 10];

console.log(solve(arr.sort((a, b) => a - b).reverse()));
