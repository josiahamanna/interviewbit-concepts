/* 
Given an array A, find the nearest smaller element G[i] for every element A[i] in the array such that the element has an index smaller than i.

More formally,

G[i] for an element A[i] = an element A[j] such that

j is maximum possible AND

j < i AND

A[j] < A[i]

Elements for which no smaller element exist, consider the next smaller element as -1.Given an array A, find the nearest smaller element G[i] for every element A[i] in the array such that the element has an index smaller than i.

More formally,

G[i] for an element A[i] = an element A[j] such that

j is maximum possible AND

j < i AND

A[j] < A[i]

Elements for which no smaller element exist, consider the next smaller element as -1.
*/

const solve = (A) => {
  let ans = [],
    s = [];

  for (let i = 0; i <= A.length; i++) {
    while (s[s.length - 1] > A[i] && s.length) {
      s.pop();
    }
    if (!s.length) {
      ans.push(-1);
    } else {
      ans.push(s[s.length - 1]);
    }
    s.push(A[i]);
  }
  return ans;
};

console.log(solve([4, 5, 2, 10, 8]));
