/*
Given a matrix of integers A of size N x M and an integer B. Write an efficient algorithm that searches for integar B in matrix A.

This matrix A has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than or equal to the last integer of the previous row.
Return 1 if B is present in A, else return 0.
*/

const solve = (A, B) => {
  let l = 0,
    r = A.length * A[0].length - 1,
    result = 0;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);

    let i = Math.floor(mid / A[0].length);
    let j = mid % A[0].length;
    if (A[i][j] === B) {
      result = 1;
      break;
    } else if (A[i][j] > B) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return result;
};

const A = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
];

console.log(solve(A, 100));
