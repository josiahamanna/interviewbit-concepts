const solve = (arr, l, r) => {
  let sum = 0;
  let prefix = [];

  prefix[0] = arr[0];

  for (let i = 1; i < arr.length; i++) {
    prefix[i] = prefix[i - 1] + arr[i];
  }

  sum = prefix[r] - prefix[l] + arr[l];

  return sum;
};

const arr = [-3, 6, 2, 4, 5, 2, 8, -9, 3, 1];

console.log(solve(arr, 1, 3));
console.log(solve(arr, 2, 7));
console.log(solve(arr, 4, 8));
