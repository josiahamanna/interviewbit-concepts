const solve = (A) => {
  let zeroElementIndex = [];
  console.log(A);
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[0].length; j++) {
      if (A[i][j] === 0) {
        zeroElementIndex.push([i, j]);
      }
    }
  }

  console.log("zeroElementIndex", zeroElementIndex);
  for (let k = 0; k < zeroElementIndex.length; k++) {
    let row = zeroElementIndex[k][0];
    let col = zeroElementIndex[k][1];
    for (let j = 0; j < A[0].length; j++) {
      A[row][j] = 0;
    }
    for (let i = 0; i < A.length; i++) {
      A[i][col] = 0;
    }
  }

  return A;
};

// const A = [[94, 91]];

const A = [
  [97, 18, 55, 1, 50, 17, 16, 0, 22, 14],
  [58, 14, 75, 54, 11, 23, 54, 95, 33, 23],
  [73, 11, 2, 80, 6, 43, 67, 82, 73, 4],
  [61, 22, 23, 68, 23, 73, 85, 91, 25, 7],
  [6, 83, 22, 81, 89, 85, 56, 43, 32, 89],
  [0, 6, 1, 69, 86, 7, 64, 5, 90, 37],
  [10, 3, 11, 33, 71, 86, 6, 56, 78, 31],
  [16, 36, 66, 90, 17, 55, 27, 26, 99, 59],
  [67, 18, 65, 68, 87, 3, 28, 52, 9, 70],
  [41, 19, 73, 5, 52, 96, 91, 10, 52, 21]
];

// const A = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 0],
//   [9, 2, 0, 4]
// ];

const B = 2;

console.log(solve(A, B));
