const merge = (A, l, m, r) => {
  let p3 = 0,
    p2 = m,
    p1 = l,
    temp = [],
    count = 0;

  while (p1 < m && p2 <= r) {
    if (A[p1] <= A[p2]) {
      temp[p3++] = A[p1++];
    } else {
      temp[p3++] = A[p2++];
      count += m - p1;
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
  return count;
};

const mergeSort = (A, l, r) => {
  if (l === r) {
    return 0;
  }

  let m = parseInt(l + (r - l) / 2);

  let x = mergeSort(A, l, m);
  let y = mergeSort(A, m + 1, r);

  let z = merge(A, l, m + 1, r);

  return x + y + z;
};

const solve = (A) => {
  return mergeSort(A, 0, A.length - 1);
};

console.log(solve([6, 12, 10, 17, 10, 22, 9, 19, 21, 31, 26, 8]));
