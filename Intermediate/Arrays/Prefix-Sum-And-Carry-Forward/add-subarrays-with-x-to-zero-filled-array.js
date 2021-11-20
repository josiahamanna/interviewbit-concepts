const solve = (arr, q) => {
  let prefix = [];
  for (let i = 0; i < q.length; i++) {
    arr[q[i][0]] += q[i][2];
    if (q[i][1] + 1 < arr.length) arr[q[i][1] + 1] -= q[i][2];
  }

  prefix[0] = arr[0];

  for (let i = 1; i < arr.length; i++) {
    prefix[i] = prefix[i - 1] + arr[i];
  }
  return prefix;
};

const arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

console.log(
  solve(arr, [
    [2, 5, 3],
    [3, 7, 2],
    [1, 4, -4],
    [5, 8, 1],
    [6, 9, -3]
  ])
);
