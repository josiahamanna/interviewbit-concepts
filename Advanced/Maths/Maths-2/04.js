/*
Given an array of integers A of size N containing GCD of every possible pair of elements of another array.

Find and return the original numbers which are used to calculate the GCD array in any order. For example, if original numbers are {2, 8, 10} then the given array will be {2, 2, 2, 2, 8, 2, 2, 2, 10}.
*/

const getGcd = (A, B) => {
  if (A > B) {
    A = A ^ B;
    B = A ^ B;
    A = A ^ B;
  }

  while (A > 0) {
    let temp = A;
    A = B % A;
    B = temp;
  }

  return B;
};

const solve = (A, B) => {
  A.sort((a, b) => b - a);
  let result = [A[0]];

  console.log("input", A);

  for (let i = 1; i < A.length; i++) {
    for (let j = 0; j < result.length; j++) {
      for (let k = 0; k < 2; k++) {
        A.splice(A.indexOf(getGcd(A[i], result[j])), 1);
      }
    }
    result.push(A[i]);
    console.log(A);
  }

  return A;
};

const A = [
  46,
  1,
  2,
  1,
  1,
  1,
  5,
  45,
  1,
  1,
  2,
  5,
  1,
  40,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  31,
  1,
];

console.log(solve(A));
