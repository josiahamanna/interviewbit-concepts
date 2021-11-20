const solve = (arr) => {
  let sum = 0;
  let prefix = [];

  prefix[0] = arr[0];

  for (let i = 1; i < arr.length; i++) {
    prefix[i] = prefix[i - 1] + arr[i];
  }

  return prefix;
};

const arr = [-3, 6, 2, 4, 5, 2, 8, -9, 3, 1];

console.log(solve(arr));
