/*
Given an array A of non-negative integers of size N. Find the minimum sub-array Al, Al+1 ,…, Ar such that if we sort(in ascending order) that sub-array, then the whole array should get sorted. If A is already sorted, output -1.
*/

const solve = (A) => {
  let B = A.slice(0);
  let start, end, startDetected;

  A.sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });

  for (let i = 0; i < A.length; i++) {
    if (A[i] !== B[i]) {
      if (!startDetected) {
        start = i;
        startDetected = true;
      } else {
        end = i;
      }
    }
  }

  if (startDetected) return [start, end];
  else return [-1];
};

console.log(solve([5, 2, 3, 4, 1]));
