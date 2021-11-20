// Given N array elements calculate sum of OR of all sub arrays

const getCont = (A) => {
  let count = 0;
  let numZeroSub = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] === 1) {
      numZeroSub += (count * (count + 1)) / 2;
      count = 0;
    } else {
      count++;
    }
  }

  numZeroSub += (count * (count + 1)) / 2;

  return (A.length * (A.length + 1)) / 2 - numZeroSub;
};

const isSet = (A, i) => {
  return (A >> i) & 1;
};

const getMeSum = (A, j) => {
  let zeroAndOne = [];

  for (let i = 0; i < A.length; i++) {
    if (isSet(A[i], j)) {
      zeroAndOne.push(1);
    } else {
      zeroAndOne.push(0);
    }
  }
  console.log("sum", getCont(zeroAndOne), zeroAndOne);

  return (getCont(zeroAndOne) * Math.pow(2, j)) % (Math.pow(10, 9) + 7);
};

const solve = (A) => {
  let sum = 0;
  for (let i = 0; i <= 30; i++) {
    sum += getMeSum(A, i) % (Math.pow(10, 9) + 7);
  }
  return sum % (Math.pow(10, 9) + 7);
};

const A = [21, 4, 18, 8, 6];

console.log(solve(A));
