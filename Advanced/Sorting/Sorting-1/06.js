/*
Given an array A of N integers where each value represents number of chocolates in a packet.

i-th can have A[i] number of chocolates.

There are B number students, the task is to distribute chocolate packets following below conditions:

1. Each student gets one packet.
2. The difference between the number of chocolates in packet with maximum chocolates and packet with minimum chocolates given to the students is minimum.
Return the minimum difference (that can be achieved) between maximum and minimum number of chocolates distributed.
*/

const solve = (A, B) => {
  if (!A.length || B === 0) return 0;
  A.sort((a, b) => a - b);

  let min = A[B - 1] - A[0];

  let i = 1,
    j = B;

  while (A[j] !== undefined) {
    let diff = A[j] - A[i];
    if (diff < min) {
      min = diff;
    }
    i++;
    j++;
  }
  return min;
};

console.log(solve([3, 4, 1, 9, 56, 7, 9, 12], 5));
