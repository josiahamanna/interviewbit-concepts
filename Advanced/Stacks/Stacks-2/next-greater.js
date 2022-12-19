/*
Given an array A, find the next greater element G[i] for every element A[i] in the array.
The next greater element for an element A[i] is the first greater element on the right side of A[i] in the array, A.

More formally:

G[i] for an element A[i] = an element A[j] such that 
    j is minimum possible AND 
    j > i AND
    A[j] > A[i]
Elements for which no greater element exists, consider the next greater element as -1.
*/

const solve = (A) => {
  let s = [],
    rightMax = [];

  for (let i = A.length - 1; i > -1; i--) {
    while (s.length && s[s.length - 1] <= A[i]) {
      s.pop();
    }

    if (!s.length) rightMax.push(-1);
    else rightMax.push(s[s.length - 1]);
    console.log(s, i);
    s.push(A[i]);
  }

  console.log(rightMax);

  return rightMax.reverse();
};

console.log(solve([1]));
