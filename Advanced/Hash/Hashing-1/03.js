/*
Given an array, find the length of largest sequesnce which can be rearranged to get consecutive elements.
*/

const solve = (A) => {
  let hashSet = new Set(),
    result = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < A.length; i++) {
    hashSet.add(A[i]);
  }

  for (let i = 0; i < A.length; i++) {
    if (!hashSet.has(A[i] - 1)) {
      let chainLength = 1;
      x = A[i] + 1;
      while (hashSet.has(x)) {
        chainLength++;
        x++;
      }
      result = Math.max(result, chainLength);
    }
  }

  return result;
};

console.log(solve([100, 4, 3, 6, 10, 20, 11, 5, 101]));
console.log(solve([-1, 8, 2, 3, 7, 1, 4, 9]));
