/*
Given a matrix of integers A of size N x M in which each row is sorted.

Find and return the overall median of the matrix A.

NOTE: No extra memory is allowed.

NOTE: Rows are numbered from top to bottom and columns are numbered from left to right.
*/

const solve = (A) => {
  let l = Number.MAX_SAFE_INTEGER,
    r = Number.MIN_SAFE_INTEGER,
    d = (1 + A.length * A[0].length) / 2,
    ans = -1;

  for (let i = 0; i < A.length; i++) {
    l = Math.min(l, A[i][0]);
  }
  for (let i = 0; i < A.length; i++) {
    r = Math.max(r, A[i][A[0].length - 1]);
  }

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    let count = 0;
    for (let i = 0; i < A.length; i++) {
      let L = 0,
        R = A[i].length - 1,
        result = -1;
      while (L <= R) {
        let MID = Math.floor((L + R) / 2);

        if (A[i][MID] > mid) {
          R = MID - 1;
        } else {
          result = MID;
          L = MID + 1;
        }
      }
      if (result !== -1) count += result + 1;
    }

    if (count < d) {
      l = mid + 1;
    } else {
      ans = mid;
      r = mid - 1;
    }
  }
  return ans;
};

const A = [
  [1, 3, 5],
  [2, 6, 9],
  [3, 6, 9]
];
console.table(A);
console.log(solve(A));
