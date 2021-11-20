// Given ar[N], it contains all elements from [1 N+1] execpt 1 element, find missing elemets.

const solve = (arr) => {
  const N = arr.length;
  const actual = ((N + 1) * (N + 2)) / 2;

  let sum = 0;

  for (let i = 0; i < N; i++) {
    sum += arr[i];
  }

  return actual - sum;
};

const arr = [1, 2, 3];

console.log(solve(arr));
