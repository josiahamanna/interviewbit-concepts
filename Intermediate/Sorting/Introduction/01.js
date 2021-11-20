const solve = (A) => {
  let ans = 0;
  for (let i = 0; i < A.length; i++) {
    ans = ans + A[i] * (i + 1);
  }

  return ans;
};

const arr = [10, 2, 3, 4, 15];

console.log(solve(arr.sort((a, b) => a - b).reverse()));
