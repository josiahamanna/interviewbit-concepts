/*
1. Given a matrix of integers A of size N x M and an integer B.
2. In the given matrix every row and column is sorted in increasing order. Find and return the position of B in the matrix in the given form:
   1. If A[i][j] = B then return (i * 1009 + j)
   2. If B is not present return -1.
3. Note 1: Rows are numbered from top to bottom and columns are numbered from left to right.
4. Note 2: If there are multiple B in A then return the smallest value of i*1009 +j such that A[i][j]=B.
*/

const solve = (A, B) => {
  let i = 0,
    j = A[0].length - 1,
    result = Number.MAX_SAFE_INTEGER;

  while (A[i] !== undefined && A[i][j] !== undefined) {
    if (B < A[i][j]) {
      j--;
    } else if (B > A[i][j]) {
      i++;
    } else if (A[i][j] === B) {
      result = Math.min(result, (i + 1) * 1009 + (j + 1));
      j--;
    }
  }

  return result === Number.MAX_SAFE_INTEGER ? -1 : result;
};

const A = [
  [2, 8, 8, 8],
  [2, 8, 8, 8],
  [2, 8, 8, 8],
];

const B = 8;

console.log(solve(A, B));
