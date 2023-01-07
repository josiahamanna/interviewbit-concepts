/*
Given an one-dimensional integer array A of size N and an integer B.

Count all distinct pairs with difference equal to B.

Here a pair is defined as an integer pair (x, y), where x and y are both numbers in the array and their absolute difference is B.
*/

const solve = (A, B) => {
  let myMap = {},
    result = 0,
    dubMap = {};

  for (let i = 0; i < A.length; i++) {
    if (myMap[A[i]]) {
      myMap[A[i]]++;
    } else {
      myMap[A[i]] = 1;
    }
  }

  for (let i = 0; i < A.length; i++) {
    if (!dubMap[A[i]]) {
      if (B == 0) {
        if (myMap[A[i]] > 1) {
          result++;
        }
      } else {
        if (myMap[A[i] + B]) {
          result++;
        }
      }
      dubMap[A[i]] = true;
    }
  }
  return result;
};

console.log(
  solve(
    [
      8,
      5,
      1,
      10,
      5,
      9,
      9,
      3,
      5,
      6,
      6,
      2,
      8,
      2,
      2,
      6,
      3,
      8,
      7,
      2,
      5,
      3,
      4,
      3,
      3,
      2,
      7,
      9,
      6,
      8,
      7,
      2,
      9,
      10,
      3,
      8,
      10,
      6,
      5,
      4,
      2,
      3
    ],
    3
  )
);
