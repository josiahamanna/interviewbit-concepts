/*
 * Given N unsorted element, find the kth indexed element if the elements were sorted.(No modification allowed)
 * Solution:
 *   Idea is to find an element which has exactly k elements smaller that it.
 *   So bruteforce approach will be:
 *      count = 0;
 *      for i = 0 to array length - 1
 *        for j = 0 to array length -1
 *            if i != j and A[i] < A[j]
 *               increment count by 1
 *            if count is equal to k
 *               ans = A[i]
 *               break;
 *   Think of Binary search
 *     Search space will be between Max and Min of the array.
 *     For every mid check how many elements are there less than mid
 */

function solve(A, k) {
  // get the search range for binary search
  let left = Math.min(...A);
  let right = Math.max(...A);

  // get count of elements less than mid
  function getCount(mid) {
    let c = 0;

    for (let i = 0; i < A.length; i++) {
      if (A[i] < mid) {
        c++;
      }
    }

    return c;
  }

  // Do the binary search
  let mid = parseInt((left + right) / 2);

  while (left <= right) {
    mid = parseInt((left + right) / 2);

    let count = getCount(mid);

    if (count <= k) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return mid;
}

console.log(solve([5, 2, 7, 10, 3], 2));
