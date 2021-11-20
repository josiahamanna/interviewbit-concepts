// boundary printing
// inner loop

const solve = (A) => {
  let N = A.length;
  let M = A[0].length;

  let i = 0;
  let j = 0;

  if (N == 1 || M == 1) {
    if (N > 1) {
      for (let k = 1; k <= N; k++) {
        console.log(A[i][j]);
        i++;
      }
    } else {
      for (let k = 1; k <= M; k++) {
        console.log(A[i][j]);
        j++;
      }
    }
  }

  while (M > 1 && N > 1) {
    for (let k = 1; k <= M - 1; k++) {
      console.log(A[i][j]);
      j++;
    }

    for (let k = 1; k <= N - 1; k++) {
      console.log(A[i][j]);
      i++;
    }

    for (let k = 1; k <= M - 1; k++) {
      console.log(A[i][j]);
      j--;
    }

    for (let k = 1; k <= N - 1; k++) {
      console.log(A[i][j]);
      i--;
    }
    M -= 2;
    N -= 2;
    i++;
    j++;
  }

  return;
};

// const A = [
//   [1, 2, 3, 4, 5],
//   [14, 15, 16, 17, 6],
//   [13, 20, 19, 18, 7],
//   [12, 11, 10, 9, 8]
// ];

//const A = [[1, 2, 3, 4]];

const A = [[1], [2], [3], [4], [5]];

console.log(solve(A));
