/*
Given an array of integers A, we call (i, j) an important reverse pair if i < j and A[i] > 2*A[j].
Return the number of important reverse pairs in the given array A.
*/

const merge = (A, l, m, r) => {
  let p1 = l,
    p2 = m,
    p3 = 0,
    temp = [],
    count = 0;

  while (p1 < m && p2 <= r) {
    if (A[p1] > 2 * A[p2]) {
      count += m - p1;
      p2++;
    } else {
      p1++;
    }
  }

  p2 = m;
  p1 = l;

  while (p1 < m && p2 <= r) {
    if (A[p1] < A[p2]) {
      temp[p3++] = A[p1++];
    } else {
      temp[p3++] = A[p2++];
    }
  }

  while (p1 < m) {
    temp[p3++] = A[p1++];
  }
  while (p2 <= r) {
    temp[p3++] = A[p2++];
  }

  for (let i = 0, j = l; i < temp.length; i++, j++) {
    A[j] = temp[i];
  }

  return count;
};

const mergeSort = (A, l, r) => {
  if (l === r) return 0;

  let m = parseInt(l + (r - l) / 2);

  let x = mergeSort(A, l, m);
  let y = mergeSort(A, m + 1, r);
  let z = merge(A, l, m + 1, r);
  return x + y + z;
};

const solve = (A) => {
  return mergeSort(A, 0, A.length - 1);
  //return A;
};
const A = [8, 2, 7, 3, 1, 5, 6];
console.log(solve(A));
console.log(A);
