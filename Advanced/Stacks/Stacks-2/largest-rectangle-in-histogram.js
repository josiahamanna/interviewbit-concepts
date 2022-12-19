/*
Given an array of integers A.

A represents a histogram i.e A[i] denotes the height of the ith histogram's bar. Width of each bar is 1.

Find the area of the largest rectangle formed by the histogram.
*/

const solve = (A) => {
  let result = 0,
    s = [],
    leftMin = [],
    rightMin = [];

  for (let i = 0; i < A.length; i++) {
    while (s.length && A[s[s.length - 1]] >= A[i]) {
      s.pop();
    }

    if (!s.length) leftMin.push(-1);
    else leftMin.push(s[s.length - 1]);
    s.push(i);
  }

  s = [];

  for (let i = A.length - 1; i > -1; i--) {
    while (s.length && A[s[s.length - 1]] >= A[i]) {
      s.pop();
    }

    if (!s.length) rightMin.push(A.length);
    else rightMin.push(s[s.length - 1]);
    s.push(i);
  }

  rightMin = rightMin.reverse();

  for (let i = 0; i < A.length; i++) {
    result = Math.max(result, (rightMin[i] - leftMin[i] - 1) * A[i]);
  }

  return result;
};

console.log(solve([2, 1, 5, 6, 2, 3]));
