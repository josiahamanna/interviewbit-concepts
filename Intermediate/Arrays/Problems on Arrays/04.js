// given a 2D array every row is sorted every column is sorted find an element k

const solve = (A, k) => {
  let N = A.length;
  let M = A[0].length;

  let result = false;

  // Start at top right!
  let i = 0;
  let j = M - 1;
  // We can do it for i = N-1; j = 0
  // rest of the corners we have ambiguity

  while (j > -1 && i < N) {
    console.log(A[i][j]);
    if (A[i][j] < k) {
      i++;
    } else if (A[i][j] > k) {
      j--;
    } else if (A[i][j] == k) {
      result = true;
      break;
    }
  }

  return result;
};

const A = [
  [10, 20, 30, 40],
  [15, 25, 35, 45],
  [27, 29, 37, 48],
  [32, 33, 39, 50]
];

const k = 35;

console.log(solve(A, k));
