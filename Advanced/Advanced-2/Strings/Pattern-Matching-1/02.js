/*
Given a string A of length N consisting of lowercase alphabets. Find the period of the string.

Period of the string is the minimum value of k (k >= 1), that satisfies A[i] = A[i % k] for all valid i.
*/

const solve = (A) => {
  let zArray = [A.length],
    result;

  let L = 0,
    R = 0;

  for (let i = 1; i < A.length; i++) {
    if (i > R) {
      L = i;
      R = i;
      while (R < A.length && A[R] === A[R - L]) {
        R++;
      }
      zArray[i] = R - L;
      R--;
    } else {
      let j = i - R;
      if (zArray[j] < R - i + 1) {
        zArray[i] = zArray[j];
      } else {
        L = i;
        R++;
        while (R < A.length && A[R] === A[R - L]) {
          R++;
        }
        zArray[i] = R - L;
        R--;
      }
    }
  }

  console.log(zArray);

  for (let i = 1; i < zArray.length; i++) {
    if (zArray[i] + i === A.length) {
      result = i;
      break;
    }
  }

  return result ? result : zArray[0];
};

console.log(solve("abababababb"));
