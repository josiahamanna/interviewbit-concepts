/*
Given a sorted array of integers (not necessarily distinct) A and an integer B, find and return how many pair of integers ( A[i], A[j] ) such that i != j have sum equal to B.

Since the number of such pairs can be very large, return number of such pairs modulo (109 + 7).
*/

const solve = (A, B) => {
  let i = 0,
    j = A.length - 1,
    result = 0;

  while (i < j) {
    if (A[i] + A[j] > B) {
      j--;
    } else if (A[i] + A[j] < B) {
      i++;
    } else {
      if (A[i] === A[j]) {
        let count = 0;

        while (A[i] === A[j]) {
          count++;
          i++;
        }
        result += ((count * (count - 1)) / 2) % (10 ** 9 + 7);
      } else {
        let counti = 0,
          countj = 0,
          xi = A[i],
          xj = A[j];
        while (A[i] === xi) {
          counti++;
          i++;
        }
        while (A[j] === xj) {
          countj++;
          j--;
        }

        result += (counti * countj) % (10 ** 9 + 7);
      }
    }
  }
  return result % (10 ** 9 + 7);
};

console.log(solve([1, 1], 2));
