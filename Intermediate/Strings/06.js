// Given a string calculate length of logest palindromic substring
const expand = (A, p1, p2) => {
  while (A[p1] === A[p2] && p1 > -1 && p2 < A.length) {
    p1--;
    p2++;
  }
  return p2 - p1 - 1;
};

const solve = (A) => {
  let maxCount = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < A.length; i++) {
    maxCount = Math.max(maxCount, expand(A, i, i));
  }

  for (let i = 0; i < A.length - 1; i++) {
    maxCount = Math.max(maxCount, expand(A, i, i + 1));
  }

  return maxCount;
};

const A = "abacab";
console.log(A);
console.log(solve(A));
