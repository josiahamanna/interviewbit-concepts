/*
Given an array with n objects colored red, white or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white and blue.
Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note: Using library sort function is not allowed.
*/

const solve = (A) => {
  const swap = (i, j) => {
    A[i] = A[i] ^ A[j];
    A[j] = A[i] ^ A[j];
    A[i] = A[i] ^ A[j];
  };

  let j = 0;

  for (let i = 0; i < 3; i++) {
    while (A[j] === i) {
      j++;
    }

    for (let k = j + 1; k < A.length; k++) {
      if (A[k] === i) {
        swap(k, j);
        j++;
      }
    }
  }

  return A;
};

console.log(solve([0, 1, 2, 0, 1, 2]));
