const solve = (arr, l, r) => {
  let sum = 0;

  for (let i = l; i <= r; i++) {
    sum += arr[i];
  }

  return sum;
};

const arr = [-3, 6, 2, 4, 5, 2, 8, -9, 3, 1];

console.log(solve(arr, 1, 3));
console.log(solve(arr, 2, 7));
console.log(solve(arr, 4, 8));
// TC = Q*O(N)
// SC = O(1)
