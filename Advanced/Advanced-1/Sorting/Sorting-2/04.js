/*
You are given an array A of N elements. You have to make all elements unique, to do so in one step you can increase any number by one.

Find the minimum number of steps.
*/

const solve = (A) => {
  A.sort((a, b) => a - b);

  let count = 0;

  for (let i = 1; i < A.length; i++) {
    if (A[i - 1] > A[i]) {
      let diff = A[i - 1] - A[i] + 1;
      A[i] += diff;
      count += diff;
    } else if (A[i - 1] === A[i]) {
      count++;
      A[i]++;
    }
  }

  return count;
};

console.log(solve([1, 1, 2, 2]));
