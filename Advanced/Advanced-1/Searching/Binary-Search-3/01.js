/*
Farmer John has built a new long barn, with N stalls. Given an array of integers A of size N where each element of the array represents the location of the stall, and an integer B which represent the number of cows.

His cows don't like this barn layout and become aggressive towards each other once put into a stall. To prevent the cows from hurting each other, John wants to assign the cows to the stalls, such that the minimum distance between any two of them is as large as possible. What is the largest minimum distance?
*/

const solve = (A, B) => {
  A.sort((a, b) => a - b);

  let l = 1,
    r = A[A.length - 1] - A[0],
    result = 1;

  console.log(l, r);

  const check = (mid) => {
    let lastPlaced = A[0],
      cow = 1,
      result = false;
    for (let i = 0; i < A.length; i++) {
      if (A[i] - lastPlaced >= mid) {
        cow++;
        lastPlaced = A[i];
        if (cow === B) {
          result = true;
          break;
        }
      }
    }
    return result;
  };

  while (l < r) {
    let mid = Math.floor((l + r) / 2);
    if (check(mid)) {
      result = mid;
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return result;
};

console.log(solve([5, 17, 100, 11], 2));
