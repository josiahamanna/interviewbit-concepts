/*
Merge sort
*/

const merge = (A, l, m, r) => {
  let p3 = 0,
    p2 = m,
    p1 = l,
    temp = [];
  while (p1 < m && p2 <= r) {
    if (A[p1] < A[p2]) {
      temp[p3++] = A[p1++];
    } else {
      temp[p3++] = A[p2++];
    }
  }

  while (p2 <= r) {
    temp[p3++] = A[p2++];
  }
  while (p1 < m) {
    temp[p3++] = A[p1++];
  }

  for (let i = l, j = 0; i <= r; i++, j++) {
    A[i] = temp[j];
  }
};

const mergeSort = (A, l, r) => {
  if (l === r) {
    return;
  }

  let m = parseInt(l + (r - l) / 2);

  mergeSort(A, l, m);
  mergeSort(A, m + 1, r);

  merge(A, l, m + 1, r);
};

const solve = (A) => {
  mergeSort(A, 0, A.length - 1);
  return A;
};

console.log(solve([9, 8, 7, 6, 5, 4, 3, 2, 1]));
