/*
Given a sorted array A of size N and a target value B, return the index (0-based indexing) if the target is found.
If not, return the index where it would be if it were inserted in order.
*/

const solve = (A, B) => {
  let l = 0,
    r = A.length - 1,
    result = -1;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (A[mid] === B) {
      result = mid;
      break;
    } else if (A[mid] > B) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  if (result === -1) {
    return l;
  } else {
    return result;
  }
};

console.log(solve([1, 3, 5, 6], 0));
