/*
Given two sorted arrays of distinct integers, A and B, and an integer C, find and return the pair whose sum is closest to C and the pair has one element from each array.

More formally, find A[i] and B[j] such that abs((A[i] + B[j]) - C) has minimum value.

If there are multiple solutions find the one with minimum i and even if there are multiple values of j for the same i then return the one with minimum j.

Return an array with two elements {A[i], B[j]}.
*/

const solve = (A, B, C) => {
  let i = 0,
    j = B.length - 1,
    result = Number.MAX_SAFE_INTEGER,
    l,
    r,
    rindex,
    lindex;

  while (i < A.length && j > -1) {
    let sum = A[i] + B[j];

    if (Math.abs(sum - C) < result) {
      result = Math.abs(sum - C);
      l = A[i];
      r = B[j];
      rindex = j;
      lindex = i;
    } else if (Math.abs(sum - C) === result) {
      if (rindex > j && lindex >= i) {
        l = A[i];
        r = B[j];
        rindex = j;
      }
    }

    if (sum > C) {
      j--;
    } else {
      i++;
    }
  }

  return [l, r];
};

//console.log(solve([1], [2, 4], 4));
console.log(solve([5, 10, 20], [1, 2, 30], 13));
//console.log(solve([1, 2, 3, 4, 5], [2, 4, 6, 8], 9));
console.log(solve([1, 3, 5, 7, 9], [2, 4, 6, 8, 10], 10));
