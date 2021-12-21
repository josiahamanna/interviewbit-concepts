/*
Find the Bth smallest element in given array A .

NOTE: Users should try to solve it in <= B swaps.
*/

const solve = (A, B) => {
  const swap = (a, b) => {
    A[a] = A[a] ^ A[b];
    A[b] = A[a] ^ A[b];
    A[a] = A[a] ^ A[b];
  };
  for (let i = 0; i < B; i++) {
    let min = Number.MAX_SAFE_INTEGER;
    let index = -1;
    for (let j = i; j < A.length; j++) {
      if (A[j] < min) {
        min = A[j];
        index = j;
      }
    }
    A[i] !== A[index] && swap(i, index);
  }

  return A[B - 1];
};

console.log(solve([2, 1, 4, 3, 2], 3));
