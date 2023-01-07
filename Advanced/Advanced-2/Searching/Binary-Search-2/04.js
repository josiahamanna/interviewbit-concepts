/*
Given an array of positive integers, find maximum k such that there is no subarray of length k with sum > B
*/

const solve = (A, B) => {
  const check = (k, B) => {
    let sum = 0,
      result = true;
    for (let i = 0; i < k; i++) {
      sum += A[i];
    }
    if (sum > B) return false;
    for (let i = k; i < A.length; i++) {
      sum += A[i] - A[i - k];
      if (sum > B) {
        result = false;
        break;
      }
    }
    return result;
  };

  let l = 1,
    r = A.length,
    ans = 0;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (check(mid, B)) {
      ans = mid;
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return ans;
};

console.log(solve([1, 2, 3, 4, 5], 10));
console.log(solve([5, 17, 100, 11], 130));
