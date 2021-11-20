const solve = (arr) => {
  const N = arr.length;
  let min = arr[0],
    max = arr[0];

  for (let i = 0; i < N; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
    if (max < arr[i]) {
      max = arr[i];
    }
  }

  let maxInd = 2 * N;
  let minInd = 2 * N;
  let result = N;

  for (let i = N - 1; i > -1; i--) {
    if (arr[i] === min) {
      result = Math.min(result, maxInd - i + 1);
      minInd = i;
    }
    if (arr[i] === max) {
      result = Math.min(result, minInd - i + 1);
      maxInd = i;
    }
  }

  console.log("min", result);
  // arr[i] * {i+1} * {N-1}
};

//const arr = [2, 2, 6, 4, 5, 1, 5, 2, 6, 4, 1];
const arr = [814, 761, 697, 483, 981];

console.log(solve(arr));
