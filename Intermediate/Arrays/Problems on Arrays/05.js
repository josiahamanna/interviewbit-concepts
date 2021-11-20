// Given a 2d matrix every element is 0/1, every row is sorted, find max 1's in a row.

const solve = (A, k) => {
  let N = A.length;
  let M = A[0].length;
  let result = 0;

  let i = 0;
  let j = M - 1;

  while (i < N && j > -1) {
    if (A[i][j] == 1) {
      j--;
      result++;
    } else {
      i++;
    }
  }

  return result;
};

const A = [
  [0, 0, 1, 1, 1],
  [0, 0, 0, 0, 1],
  [0, 1, 1, 1, 1],
  [0, 1, 1, 1, 1],
  [0, 0, 0, 1, 1],
  [0, 1, 1, 1, 1]
];

console.log(solve(A));
