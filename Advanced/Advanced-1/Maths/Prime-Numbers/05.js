// Given an array of integers A, find and return the count of divisors of each element of the array.

const solve = (A) => {
  const solution = [];

  let maxElement = Math.max(...A);

  let spf = [0, 1];

  for (let i = 2; i <= maxElement; i++) {
    spf[i] = i;
  }

  for (let i = 2; i <= maxElement; i++) {
    for (let j = i * i; j <= maxElement; j += i) {
      spf[j] = Math.min(i, spf[j]);
    }
  }

  for (let i = 0; i < A.length; i++) {
    let num = A[i],
      sum = 1;
    console.log(num);
    while (num !== 1) {
      let count = 1;
      let d = spf[num];
      while (num !== 1 && num % d === 0) {
        count++;
        num = num / spf[num];
      }
      sum *= count;
    }

    solution.push(sum);
  }
  return solution;
};

const A = [8, 9, 10];

console.log(solve(A));
