/*
Given an array of positive integers A and an integer B, find and return first continuous subarray which adds to B.

If the answer does not exist return an array with a single element "-1".

First sub-array means the sub-array for which starting index in minimum.
*/

const solve = (A, B) => {
  let prefix = [0];
  let sum = 0;
  for (let k = 0; k < A.length; k++) {
    sum += A[k];
    prefix.push(sum);
  }

  let i = 0,
    j = 1,
    l = 0,
    r = 0;
  while (j < prefix.length) {
    if (prefix[j] - prefix[i] === B) {
      l = i;
      r = j;
      break;
    } else if (prefix[j] - prefix[i] < B) {
      j++;
    } else {
      i++;
      if (i === j) j++;
    }
  }

  if (r === 0) return [-1];
  return A.slice(l, r);
};

console.log(solve([1, 2, 3, 4, 5], 5));
