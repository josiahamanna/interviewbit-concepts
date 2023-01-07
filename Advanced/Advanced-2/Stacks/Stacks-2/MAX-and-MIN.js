/* 
Given an array of integers A.

value of a array = max(array) - min(array).

Calculate and return the sum of values of all possible subarrays of A modulo 109+7.
*/

const solve = (A) => {
  let leftMax = [],
    rightMax = [],
    leftMin = [],
    rightMin = [],
    s = [],
    result = 0;

  for (let i = 0; i < A.length; i++) {
    while (s.length && A[s[s.length - 1]] >= A[i]) {
      s.pop();
    }

    if (!s.length) leftMin.push(-1);
    else leftMin.push(s[s.length - 1]);

    s.push(i);
  }

  s = [];

  for (let i = 0; i < A.length; i++) {
    while (s.length && A[s[s.length - 1]] <= A[i]) {
      s.pop();
    }

    if (!s.length) leftMax.push(-1);
    else leftMax.push(s[s.length - 1]);

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

  s = [];

  for (let i = A.length - 1; i > -1; i--) {
    while (s.length && A[s[s.length - 1]] <= A[i]) {
      s.pop();
    }

    if (!s.length) rightMax.push(A.length);
    else rightMax.push(s[s.length - 1]);

    s.push(i);
  }

  rightMin = rightMin.reverse();
  rightMax = rightMax.reverse();

  for (let i = 0; i < A.length; i++) {
    result +=
      ((i - leftMax[i]) * (rightMax[i] - i) -
        (i - leftMin[i]) * (rightMin[i] - i)) *
      A[i];
  }

  return result;
};

console.log(solve([4, 7, 3, 8]));
