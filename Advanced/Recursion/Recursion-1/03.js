/*
Given a number A, we need to find sum of its digits using recursion.
Assumption: Calculate and return sum of digits
Main logic: If the number is less than or equal to 10 return that number else call function again.
Base condition: If the number is less that or equal to 10 stop and return that number
*/

const solve = (A) => {
  if (A === 0) {
    return 0;
  }
  return (A % 10) + solve(Math.floor(A / 10));
};

console.log("ans", solve(12345));
