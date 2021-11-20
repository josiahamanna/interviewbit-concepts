const solve = (A, k) => {
  let result = 0;
  let myHash = {};

  for (let i = 0; i < A.length; i++) {
    if (myHash[A[i]]) {
      myHash[A[i]][0] = A[i];
      myHash[A[i]][1] = i;
    } else {
      myHash[A[i]] = [A[i], i];
    }
  }

  console.log(myHash);

  for (let i = 0; i < A.length; i++) {
    let m = A[i] - k;
    let n = A[i] + k;
    if (myHash[A[i]][0] && myHash[A[i]][1] !== i) {
      result = 1;
      break;
    }
  }
  return result;
};

const A = [4, 1, 3, 9, 6, 1, 2];

console.log(solve(A, 1));
