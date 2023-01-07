/*
Given a roteted sorted array with distinct elements. Search given element k.
*/
// solution using two pass binary search

const solve = (A, B) => {
  let l = 0,
    r = A.length - 1;

  const binarySearchOne = (l, r, k) => {
    let result = 0;
    while (l <= r) {
      let mid = Math.floor((l + r) / 2);
      if (A[mid] > k) {
        l = mid + 1;
      } else {
        result = mid;
        r = mid - 1;
      }
    }
    return result;
  };

  const binarySearchTwo = (l, r, k) => {
    let result = -1;
    console.log(l, r);

    while (l <= r) {
      let mid = Math.floor((l + r) / 2);
      if (A[mid] === k) {
        result = mid;
        break;
      } else if (A[mid] > k) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
    return result;
  };

  let t = binarySearchOne(l, r, A[0]);

  if (B <= A[0]) {
    console.log("B <= A[0]", t, l, r);
    return binarySearchTwo(t, r, B);
  } else {
    console.log("B !<= A[0]", t, l, r);
    return binarySearchTwo(0, t - 1 === -1 ? r : t - 1, B);
  }
};

//console.log(solve([1, 7, 67, 133, 178], 1));

console.log(solve([4, 5, 6, 1, 2, 3], 4));
