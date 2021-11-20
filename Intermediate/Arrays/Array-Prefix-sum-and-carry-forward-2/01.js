const solve = (arr) => {
  let totalSum = 0;

  for (let i = 0; i < arr.length; i++) {
    totalSum += arr[i];
  }

  console.log("total sum", totalSum);

  let count = 0;
  let leftSum = 0;
  for (let i = 0; i < arr.length; i++) {
    leftSum += arr[i];
    let rightSum = totalSum - leftSum + arr[i];
    if (rightSum === leftSum) {
      count++;
    }
  }

  return count++;
};

const arr = [-2, 3, 1, -4, -1, 4, -3];

console.log(solve(arr));
