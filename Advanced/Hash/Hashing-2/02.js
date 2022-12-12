/*
Given two arrays of integers A and B of size N each, where each pair (A[i], B[i]) for 0 <= i < N represents a unique point (x, y) in 2-D Cartesian plane.

Find and return the number of unordered quadruplet (i, j, k, l) such that (A[i], B[i]), (A[j], B[j]), (A[k], B[k]) and (A[l], B[l]) form a rectangle with the rectangle having all the sides parallel to either x-axis or y-axis.
*/

const solve = (A, B) => {
  let result = 0,
    hashSet = new Set();

  for (let i = 0; i < A.length; i++) {
    hashSet.add(`${A[i]}_${B[i]}`);
  }

  const check = (x, y) => {
    if (hashSet.has(`${x}_${y}`)) return true;
    return false;
  };

  console.log(hashSet);

  for (let i = 0; i < A.length; i++) {
    for (let j = i + 1; j < A.length; j++) {
      if (A[i] !== A[j] && B[i] !== B[j]) {
        if (check(A[i], B[j]) && check(A[j], B[i])) {
          result++;
        }
      }
    }
  }

  return result / 2;
};

console.log(solve([1, 1, 2, 2, 3, 3], [1, 2, 1, 2, 1, 2]));
