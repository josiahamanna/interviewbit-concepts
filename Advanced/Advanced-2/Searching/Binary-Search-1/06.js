/*
Every element occurs twice except for one. Find unique element.
Note: Duplicates are adjacent to each other.
*/

const solve = (A) => {
  if (A.length === 1) return A[0];
  if (A[0] !== A[1]) return A[0];
  if (A[A.length - 1] !== A[A.length - 2]) return A[A.length - 1];

  let l = 1,
    r = A.length - 2,
    result = -1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (A[mid - 1] !== A[mid] && A[mid + 1] !== A[mid]) {
      result = A[mid];
      break;
    }
    if (A[mid - 1] === A[mid]) {
      mid = mid - 1;
    }
    if (mid % 2 === 0) {
      l = mid + 2;
    } else {
      r = mid - 1;
    }
  }

  return result;
};

console.log(solve([3, 3, 1, 1, 8, 8, 10, 10, 19, 6, 6, 2, 2, 4, 4]));
