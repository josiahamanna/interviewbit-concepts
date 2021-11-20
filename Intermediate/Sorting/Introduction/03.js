const solve = (A) => {
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    if (i === A[i]) {
      count++;
    }
  }
  return count;
};

const arr = [-3, 0, 2, 4, 5, 5, 5, 5, 8, 8, 10, 10, 10, 14];

console.log(solve(arr.sort((a, b) => a - b)));
