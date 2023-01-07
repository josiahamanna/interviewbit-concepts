/*
Write a function that takes an integer and returns the number of 1 bits it has.
*/

const solve = (A) => {
  let count = 0;

  for (let i = 0; i < 32; i++) {
    if (A & (1 << i)) count++;
  }

  return count;
};

console.log(solve(7));
