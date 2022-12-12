/*
Given an array of +ve integers, find count of subarray with sum = k.
*/

const solve = (A, B) => {
  let prefix = [0],
    i = 0,
    j = 1,
    count = 0;

  for (let i = 0; i < A.length; i++) {
    prefix[i + 1] = A[i] + prefix[i];
  }

  while (j < prefix.length) {
    let con = Math.abs(prefix[j] - prefix[i]);

    if (con > B) {
      i++;
    } else if (con < B) {
      j++;
    } else {
      count++;
      i++;
      j++;
    }

    if (i === j) {
      j++;
    }

    if (prefix[i] === B) {
      count++;
    }
  }

  return count;
};

console.log(solve([3, 2, 5, 0, 1, 8, 6, 2, 10], 15));
