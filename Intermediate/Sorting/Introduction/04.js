const solve = (A) => {
  let count = 0;
  let special = 0;

  for (let i = 1; i < A.length; i++) {
    if (A[i] !== A[i - 1]) {
      console.log("i", i);
      count = i;
    }
    if (A[i] === count) {
      console.log(A[i], count);
      special++;
    }
  }
  return special;
};

const arr = [-3, 0, 2, 4, 5, 5, 5, 5, 8, 8, 8, 10, 10, 10, 10, 14];

console.log(solve(arr));
