/*
Given a bitonic sequence A of N distinct elements, write a program to find a given element B in the bitonic sequence in O(logN) time.

NOTE:

A Bitonic Sequence is a sequence of numbers which is first strictly increasing then after a point strictly decreasing.
*/

const solve = (A, B) => {
  const getBitonicPoint = (l, r) => {
    let result = -1;
    while (l <= r) {
      let mid = Math.floor((l + r) / 2);
      if (A[mid] > A[mid - 1] && A[mid] > A[mid + 1]) {
        result = mid;
        break;
      } else if (A[mid] > A[mid - 1] && A[mid] < A[mid + 1]) {
        l = mid + 1;
      } else if (A[mid] < A[mid - 1] && A[mid] > A[mid + 1]) {
        r = mid - 1;
      }
    }
    return result;
  };

  const searchLeftPart = (l, r) => {
    let result = -1;
    while (l <= r) {
      let mid = Math.floor((l + r) / 2);
      if (A[mid] === B) {
        result = mid;
        break;
      } else if (A[mid] > B) {
        r = mid - 1;
      } else if (A[mid] < B) {
        l = mid + 1;
      }
    }
    return result;
  };

  const searchRightPart = (l, r) => {
    let result = -1;
    while (l <= r) {
      let mid = Math.floor((l + r) / 2);
      if (A[mid] === B) {
        result = mid;
        break;
      } else if (A[mid] > B) {
        l = mid + 1;
      } else if (A[mid] < B) {
        r = mid - 1;
      }
    }
    return result;
  };

  let bitonicPoint = getBitonicPoint(1, A.length - 2);

  if (A[bitonicPoint] === B) {
    return bitonicPoint;
  }

  let leftResult = searchLeftPart(0, bitonicPoint);

  if (leftResult !== -1) {
    return leftResult;
  } else {
    return searchRightPart(bitonicPoint, A.length - 1);
  }
};

console.log(solve([3, 9, 10, 20, 17, 5, 1], 1));
