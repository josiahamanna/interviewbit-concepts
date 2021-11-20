// Given N array elements, each element is either 0 or 1 calculate no of sub arrays whose OR of all the elements will be 1.

const solve = (A) => {
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

  console.log(numZeroSub);
  return (A.length * (A.length + 1)) / 2 - numZeroSub;
};

const A = [0, 0, 1, 0, 0, 0];

console.log(solve(A));
