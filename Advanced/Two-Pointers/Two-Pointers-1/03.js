/*
given sorted array (distinct elements), count all pair(i,j) such that arr[j]+arr[i]=k (i!=j)
*/

const solve = (A, B) => {
  let i = 0,
    j = A.length - 1,
    count = 0;

  while (i < j) {
    let con = A[i] + A[j];
    if (con < B) {
      i++;
    } else if (con > B) {
      j--;
    } else {
      count++;
      i++;
      j--;
    }
  }

  return count;
};

console.log(solve([-3, 0, 1, 3, 6, 8, 11, 14, 18, 25], 17));
