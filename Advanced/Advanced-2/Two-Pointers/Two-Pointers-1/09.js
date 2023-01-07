/*
Given a sorted array of distinct integers A and an integer B, find and return how many rectangles with distinct configurations can be created using elements of this array as length and breadth whose area is lesser than B.

(Note that a rectangle of 2 x 3 is different from 3 x 2 if we take configuration into view)
*/

const solve = (A, B) => {
  let result = 0;

  let i = 0,
    j = A.length - 1;

  while (i < A.length && j > -1) {
    if (A[i] * A[j] >= B) {
      j--;
    } else {
      result += (j + 1) % (10 ** 9 + 7);
      i++;
    }
  }

  return result % (10 ** 9 + 7);
};

console.log(solve([1, 2, 3, 4, 5], 5));
