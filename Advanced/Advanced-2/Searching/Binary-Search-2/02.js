/*
Given a roteted sorted array with distinct elements. Search given element k.
*/
// solution using single pass

const solve = (A, B) => {
  let l = 0,
    r = A.length - 1,
    result = -1;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (A[mid] === B) {
      result = mid;
      break;
    } else if (A[mid] >= A[0]) {
      if (B >= A[0] && B < A[mid]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    } else {
      if (B > A[mid] && B <= A[A.length - 1]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }

  return result;
};

console.log(solve([4, 5, 6, 1, 2, 3], 3));
