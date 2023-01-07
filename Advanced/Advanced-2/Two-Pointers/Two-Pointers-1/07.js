/*
Given n non-negative integers A[0], A[1], …, A[n-1] , where each represents a point at coordinate (i, A[i]).

N vertical lines are drawn such that the two endpoints of line i is at (i, A[i]) and (i, 0).

Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container.
*/

const solve = (A) => {
  if (A.length === 1) {
    return 0;
  }

  let i = 0,
    j = A.length - 1,
    result = Number.MIN_SAFE_INTEGER;

  while (i < j) {
    result = Math.max(result, (j - i) * Math.min(A[i], A[j]));
    if (A[i] < A[j]) {
      i++;
    } else {
      j--;
    }
  }

  return result;
};

console.log(solve([1]));
