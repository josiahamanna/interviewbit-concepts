/*
Given an array of integers A of size N where N is even.

Divide the array into two subsets such that

1.Length of both subset is equal.
2.Each element of A occurs in exactly one of these subset.
Magic number = sum of absolute difference of corresponding elements of subset.

Note: You can reorder the position of elements within the subset to find the value of magic number.

For Ex:- 
subset 1 = {1, 5, 1}, 
subset 2 = {1, 7, 11}
Magic number = abs(1 - 1) + abs(5 - 7) + abs(1 - 11) = 12
Return an array B of size 2, where B[0] = maximum possible value of Magic number modulo 109 + 7, B[1] = minimum possible value of a Magic number modulo 109 + 7.
*/

const getAbsSum = (A, B) => {
  let sum = 0;
  for (let i = 0; i < A.length; i++) {
    sum += Math.abs(A[i] - B[i]) % (10 ** 9 + 7);
  }
  return sum % (10 ** 9 + 7);
};

const solve = (A) => {
  A.sort((a, b) => a - b);
  let subset1 = [];
  let subset2 = [];

  for (let i = 0; i < A.length; i++) {
    if (i < A.length / 2) {
      subset1.push(A[i]);
    } else {
      subset2.push(A[i]);
    }
  }

  let maxAbsSum = getAbsSum(subset1, subset2);

  subset1 = [];
  subset2 = [];

  for (let i = 0; i < A.length; i++) {
    if (i % 2 === 0) {
      subset1.push(A[i]);
    } else {
      subset2.push(A[i]);
    }
  }

  let minAbsSum = getAbsSum(subset1, subset2);

  return [maxAbsSum, minAbsSum];
};

console.log(solve([3, 11, -1, 5]));
