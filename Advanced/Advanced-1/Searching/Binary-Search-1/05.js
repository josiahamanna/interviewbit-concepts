// Given an unsorted array of N distinct elements, find any one of the local minima.

const solve = (A) => {
  if (A.length === 1) return 0;
  if (A[0] < A[1]) return 0;
  if (A[A.length - 1] < A[A.length - 2]) return A.length - 1;
  let l = 1,
    r = A.length - 2,
    result = -1;

  while (l <= r) {
    let mid = Math.floor((r + l) / 2);
    if (A[mid - 1] > A[mid] && A[mid + 1] > A[mid]) {
      result = mid;
      break;
    } else if (A[mid - 1] > A[mid]) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return result;
};

console.log(solve([9, 8, 3, 7, 6, 4, 1, 5]));
