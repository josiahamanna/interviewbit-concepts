/*
Given two sorted integer arrays A and B, merge B and A as one sorted array and return it as an output.
*/

const solve = (A, B) => {
  let p1 = 0,
    p2 = 0,
    p3 = 0,
    result = new Array(A.length + B.length);

  while (p1 < A.length && p2 < B.length) {
    if (A[p1] <= B[p2]) {
      result[p3++] = A[p1++];
    } else {
      result[p3++] = B[p2++];
    }
  }

  while (p1 < A.length) {
    result[p3++] = A[p1++];
  }
  while (p2 < B.length) {
    result[p3++] = B[p2++];
  }
  return result;
};

console.log(solve([4, 7, 9], [2, 11, 19]));
