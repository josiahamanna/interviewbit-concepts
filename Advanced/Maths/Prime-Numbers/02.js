/*
Given an even number A ( greater than 2 ), return two prime numbers whose sum will be equal to given number.

If there are more than one solutions possible, return the lexicographically smaller solution.
*/

const solve = (A) => {
  let result = [];

  let divisorArray = new Array(A + 1).fill(true);

  for (let i = 2; i <= A; i++) {
    for (let j = i * i; j <= A; j += i) {
      divisorArray[j] = false;
    }
  }

  console.log(divisorArray);

  for (let i = 2; i < A; i++) {
    if (divisorArray[i]) {
      if (i + i === A) {
        result.push(i);
        result.push(i);
        break;
      } else if (divisorArray[A - i]) {
        result.push(i);
        result.push(A - i);
        break;
      }
    }
  }

  return result;
};

const A = 42;

console.log(solve(A));
