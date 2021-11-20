// if only one row
// If only one col
// Wite edge case

const solve = (A) => {
  const N = A.length;
  const M = A[0].length;

  
  let i = 0;
  let j = 0;


  if(M === 1&& N ===1) {
    if(N > 1) {
      for(let k = 1; k <= M -1; k++) {
        console.log(A[i][j]);
        j++;
      }   
    } else {
      for(let k = 1; k <= N -1; k++) {
        console.log(A[i][j]);
        i++;
    }
  }

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

// const A = [
//   [1, 2, 3, 4, 5],
// ];

const A = [[1], [2], [3], [4], [5]];

console.log(solve(A));
