// Binary search

const solve = (A, B) => {
  let l = 0,
    r = A.length - 1,
    mid,
    result = -1;

  while (l <= r) {
    mid = Math.floor((l + r) / 2);

    if (A[mid] === B) {
      result = mid;
      break;
    }
    if (A[mid] > B) {
      r = mid - 1;
    }
    if (A[mid] < B) {
      l = mid + 1;
    }
  }
  return result;
};
console.log(solve([1, 2, 3, 4, 5], 1));
