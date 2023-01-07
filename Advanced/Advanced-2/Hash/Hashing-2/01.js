/*
Given two arrays of integers A and B of size N each, where each pair (A[i], B[i]) for 0 <= i < N represents a unique point (x, y) in 2D Cartesian plane.

Find and return the number of unordered triplets (i, j, k) such that (A[i], B[i]), (A[j], B[j]) and (A[k], B[k]) form a right angled triangle with the triangle having one side parallel to the x-axis and one side parallel to the y-axis.

NOTE: The answer may be large so return the answer modulo (109 + 7).
*/

const solve = (A, B) => {
  let result = 0,
    xHashMap = new Map(),
    yHashMap = new Map();

  for (let i = 0; i < A.length; i++) {
    if (xHashMap.has(A[i])) {
      xHashMap.set(A[i], xHashMap.get(A[i]) + 1);
    } else {
      xHashMap.set(A[i], 1);
    }
    if (yHashMap.has(B[i])) {
      yHashMap.set(B[i], yHashMap.get(B[i]) + 1);
    } else {
      yHashMap.set(B[i], 1);
    }
  }

  for (let i = 0; i < A.length; i++) {
    let x = xHashMap.get(A[i]) ? xHashMap.get(A[i]) - 1 : 0;
    let y = yHashMap.get(B[i]) ? yHashMap.get(B[i]) - 1 : 0;
    result += (x * y) % (10 ** 9 + 7);
  }

  return result % (10 ** 9 + 7);
};

console.log(solve([1, 1, 2, 3, 3], [1, 2, 1, 2, 1]));
