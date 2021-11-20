// Given N array elements, check if there exists a pair (i, j) such that A[i]+A[j] = k; i!=k

const solve = (A, B) => {
  let myHash = {};
  let result = 0;

  for (let i = 0; i < A.length; i++) {
    if (myHash[A[i]]) {
      myHash[A[i]][0]++;
      myHash[A[i]][1].push(i);
    } else {
      myHash[A[i]] = [1, [i]];
    }
  }

  for (let i = 0; i < A.length; i++) {
    let target = A[i] - B;
    if (myHash[target] && !myHash[target][1].includes(i)) {
      console.log("first test");
      result = 1;
    }
  }

  return result;
};

const A = [1, 3, 2];
console.log("length of array", A);
console.table(solve(A, 0));
