// Given a matrix of M*N, you are given Q queries find sum of all elements in the sub matrix.
const takeMode = (N) => {
  if (N > 0) return N % (Math.pow(10, 9) + 7);
  else return (N % (Math.pow(10, 9) + 7)) + (Math.pow(10, 9) + 7);
};

const solve = (A, B, C, D) => {
  let prefix = [],
    result = [];

  for (let i = 0; i < A.length; i++) {
    let tempPrefix = [];
    for (let j = 0; j < A[0].length; j++) {
      if (j === 0) {
        tempPrefix[j] = A[i][j];
      } else {
        tempPrefix[j] = takeMode(
          takeMode(tempPrefix[j - 1]) + takeMode(A[i][j])
        );
      }
    }
    prefix.push(tempPrefix);
  }

  console.log(prefix);

  for (let j = 0; j < A[0].length; j++) {
    for (let i = 1; i < A.length; i++) {
      prefix[i][j] = takeMode(
        takeMode(prefix[i - 1][j]) + takeMode(prefix[i][j])
      );
    }
  }

  for (let i = 0; i < B.length; i++) {
    let a1 = B[i] - 1,
      b1 = C[i] - 1,
      a2 = D[i] - 1,
      b2 = E[i] - 1;
    let sum = prefix[a2][b2];

    if (a1 > 0) sum = takeMode(takeMode(sum) - takeMode(prefix[a1 - 1][b2]));
    if (b1 > 0) {
      sum = takeMode(takeMode(sum) - takeMode(prefix[a2][b1 - 1]));
    }

    if (a1 > 0 && b1 > 0)
      sum = takeMode(takeMode(sum) + takeMode(prefix[a1 - 1][b1 - 1]));
    result.push(sum);
  }

  return result;
};

const A = [
  [9999999999, 999999999999, 999999999999, 999999999999],
  [99999999999999, 9999999999999, 999999999999, 999999999999],
];
const B = [1, 1];
const C = [1, 4];
const D = [2, 2];
const E = [2, 4];

console.log(solve(A, B, C, D));
