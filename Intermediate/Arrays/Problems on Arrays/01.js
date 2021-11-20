// boundary printing 

const solve = (A) => {
  const N = A.length;
  const M = A[0].length;

  let i = 0;
  let j = 0;

  for(let k = 1; k <= M -1; k++) {
    console.log(A[i][j]);
    j++;
  }

  for(let k = 1; k <= N -1; k++) {
    console.log(A[i][j]);
    i++;
  }

  for(let k = 1; k <= M -1; k++) {
    console.log(A[i][j]);
    j--;
  }

  for(let k = 1; k <= N -1; k++) {
    console.log(A[i][j]);
    i--;
  }

  return;
};

const A = [
  [1, 2, 3, 4, 1],
  [5, 6, 7, 0, 2],
  [9, 2, 0, 4, 3],
  [5, 6, 7, 0, 4],
];

console.log(solve(A));
