// Divident = divisor * quotient + reminder => reminder = divident - divisor * quotient

// If the number gets very large and cannot be stored, intervier will give us to calculate Modulous
const solve = (a, b, m) => {
  let result = 1;

  for (let i = 1; i <= b; i++) {
    result *= a % m;
  }
  return result % m;
};

const a = 10;
const b = 2;
const m = 7;

console.log(solve(a, b, m));
