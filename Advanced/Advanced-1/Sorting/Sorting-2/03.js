/*
Given a array A of non negative integers, arrange them such that they form the largest number.

Note: The result may be very large, so you need to return a string instead of an integer.
*/

const solve = (A) => {
  if (A.every((item) => item === 0)) {
    return 0;
  }

  let result = "";
  A.sort(
    (a, b) => Number(String(b) + String(a)) - Number(String(a) + String(b))
  );

  for (let i = 0; i < A.length; i++) {
    result += A[i];
  }

  return result;
};

console.log(solve([0, 0]));

const paint = (A, B, C) => {
  let mod = 10000003,
    ans = 0;

  let sumOfAllRange = 0,
    maxElement = 0;

  for (let i = 0; i < C.length; i++) {
    C[i] = (((C[i] % mod) * B) % mod) % mod;
    sumOfAllRange += C[i];
    maxElement = Math.max(maxElement, C[i]);
  }

  let left = maxElement,
    right = sumOfAllRange;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (check(C, mid, A)) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return ans % mod;
  function check(arr, minTime, noOfPainters) {
    let paintersAssigned = 1,
      totalTime = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (totalTime + arr[i] > minTime) {
        paintersAssigned++;

        totalTime = arr[i];
      } else {
        totalTime += arr[i];
      }
    }
    if (paintersAssigned <= noOfPainters) return true;
    return false;
  }
};
