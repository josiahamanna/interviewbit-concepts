/*
Given the price list at which tickets for a flight were purchased, figure out the kth smallest price for the flight. kth smallest price is the minimum possible n such that there are at least k price elements in the price list with value <= n. In other words, if the price list was sorted, then A[k-1] ( k is 1 based, while the array is 0 based ).

NOTE You are not allowed to modify the price list ( The price list is read only ). Try to do it using constant extra space.
*/

const solve = (A, B) => {
  let r = Number.MIN_SAFE_INTEGER,
    l = Number.MAX_SAFE_INTEGER,
    result = 0;

  for (let i = 0; i < A.length; i++) {
    r = Math.max(r, A[i]);
    l = Math.min(l, A[i]);
  }

  console.log("l, r", l, r, A);

  const check = (mid) => {
    let count = 0;
    for (i = 0; i <= A.length; i++) {
      if (A[i] <= mid) {
        count++;
      }
    }

    console.log("mid::A[mid]::count", mid, count);

    return count >= B;
  };

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    let con = check(mid);
    console.log(mid, con);
    if (con) {
      result = mid;
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return result;
};

//console.log(solve([2, 1, 4, 3, 2], 3));
console.log(
  solve(
    [
      8,
      16,
      80,
      55,
      32,
      8,
      38,
      40,
      65,
      18,
      15,
      45,
      50,
      38,
      54,
      52,
      23,
      74,
      81,
      42,
      28,
      16,
      66,
      35,
      91,
      36,
      44,
      9,
      85,
      58,
      59,
      49,
      75,
      20,
      87,
      60,
      17,
      11,
      39,
      62,
      20,
      17,
      46,
      26,
      81,
      92
    ],
    9
  )
);
