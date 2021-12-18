/*
A lucky number is a number which has exactly 2 distinct prime divisors.

You are given a number A and you need to determine the count of lucky numbers between the range 1 to A (both inclusive).
*/

const solve = (A) => {
  let result = 0;

  let divisorArray = new Array(A + 1);

  for (let i = 2; i <= A; i++) {
    for (let j = 2 * i; j <= A; j += i) {
      if (!divisorArray[i])
        if (divisorArray[j]) divisorArray[j].push(i);
        else divisorArray[j] = [i];
    }
  }

  for (let i = 0; i < divisorArray.length; i++) {
    if (divisorArray[i] && divisorArray[i].length == 2) {
      result++;
    }
  }

  return result;
};

const A = 12;

console.log(solve(A));
