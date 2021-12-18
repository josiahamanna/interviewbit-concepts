// Gvien a sub matrix N*M find total sum of all sub matrixes sum

const solve = (A) => {
  let sum = 0;
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[0].length; j++) {
      sum += A[i][j] * (i + 1) * (j + 1) * (A.length - i) * (A[0].length - j);
    }
  }
  return sum;
};

const A = [
  [1, 1],
  [1, 1],
];

console.log(solve(A));
