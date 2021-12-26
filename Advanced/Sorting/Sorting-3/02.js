/*
Given an integer array A, sort the array using QuickSort.
*/

const swap = (A, a, b) => {
  if (A[a] === A[b]) return;
  A[a] = A[a] ^ A[b];
  A[b] = A[a] ^ A[b];
  A[a] = A[a] ^ A[b];
};

const arrange = (A, l, r) => {
  let p1 = l + 1,
    p2 = r,
    pivot = A[l];

  while (p1 <= p2) {
    if (A[p1] <= pivot) {
      p1++;
    } else if (A[p2] > pivot) {
      p2--;
    } else {
      swap(A, p1, p2);
      p1++;
      p2--;
    }
  }
  swap(A, l, p1 - 1);
  return p1 - 1;
};

const quickSort = (A, l, r) => {
  if (l > r) {
    return;
  }
  let index = arrange(A, l, r);
  quickSort(A, l, index - 1);
  quickSort(A, index + 1, r);
};

const solve = (A) => {
  quickSort(A, 0, A.length - 1);
  return A;
};

console.log(solve([1, 4, 10, 2, 1, 5]));
