const mySort = (a, b) => {
  if (a < b) {
    return [a, b];
  } else {
    return [a, b];
  }
};

const solve = (arr) => {
  const solution = [];
  for (let i = 1; i < arr.length; i++) {
    let [a, b] = mySort(arr[i], arr[i - 1]);
    solution.push(a, b);
  }
  return solution;
};

const arr = [1, 0, 2, 1, 2, 0];
console.table(arr);

console.log(solve(arr));
