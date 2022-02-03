/*
You are given 3 sorted arrays A, B and C.

Find i, j, k such that : max(abs(A[i] - B[j]), abs(B[j] - C[k]), abs(C[k] - A[i])) is minimized.

Return the minimum max(abs(A[i] - B[j]), abs(B[j] - C[k]), abs(C[k] - A[i])).
*/

const solve = (A, B, C) => {
  let i = 0,
    j = 0,
    k = 0,
    result = Number.MAX_SAFE_INTEGER;

  while (i < A.length && j < B.length && k < C.length) {
    result = Math.min(
      result,
      Math.max(
        Math.abs(A[i] - B[j]),
        Math.abs(B[j] - C[k]),
        Math.abs(C[k] - A[i])
      )
    );
    if (A[i] <= B[j] && A[i] <= C[k]) {
      i++;
    } else if (B[j] <= A[i] && B[j] <= C[k]) {
      j++;
    } else {
      k++;
    }
  }

  return result;
};

console.log(solve([3, 5, 6], [2], [3, 4]));
