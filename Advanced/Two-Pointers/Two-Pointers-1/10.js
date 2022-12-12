/*
Given an array A of N integers, find three integers in A such that the sum is closest to a given number B. Return the sum of those three integers.

Assume that there will only be one solution.
*/

const solve = (A, B) => {
  A.sort((a, b) => a - b);
  let result = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < A.length - 2; i++) {
    let j = i + 1,
      k = A.length - 1;

    while (j < k) {
      let sum = A[i] + A[j] + A[k];

      if (Math.abs(sum - B) < Math.abs(result - B)) {
        result = sum;
      }

      if (sum > B) {
        k--;
      }

      if (sum < B) {
        j++;
      }

      if (sum === B) {
        result = sum;
        break;
      }
    }
  }

  return result;
};

console.log(solve([-1, 2, 1, -4], 1));
console.log(solve([1, 2, 3], 6));
