// Given a sorted array, find ciel of given element k. (Ciel is min element >=k)

const solve = (A, B) => {
  let l = 0,
    r = A.length - 1,
    result = Number.MAX_SAFE_INTEGER;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (A[mid] === B) {
      result = A[mid];
      break;
    } else if (A[mid] > B) {
      result = A[mid];
      r = mid - 1;
    } else if (A[mid] < B) {
      l = mid + 1;
    }
  }
  return result;
};

console.log(solve([-5, 2, 3, 6, 9, 10, 11, 14, 18], 12));
