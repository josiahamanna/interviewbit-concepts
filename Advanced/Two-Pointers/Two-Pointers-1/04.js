/*
Given sorted arrays (distinct elements), count all pair(i, j) such that arr[j]-arr[i] = k (i!=k)
*/

const solve = (A, B) => {
  let i = 0,
    j = 1,
    count = 0;

  while (j < A.length) {
    let con = Math.floor(A[j] - A[i]);

    if (con > B) {
      i++;
    } else if (con < B) {
      j++;
    } else {
      count++;
      i++;
      j++;
    }

    if (i === j) {
      j++;
    }
  }
  return count;
};

console.log(solve([-3, 0, 1, 3, 6, 8, 11, 14, 18, 25], 5));
