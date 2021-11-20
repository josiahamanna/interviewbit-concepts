// Given a, n calculate and return a^n

const solve = (a, b) => {
  let result = BigInt(a);

  for (let i = 1; i < b; i++) {
    result *= a;
  }
  return result;
};

const a = 10;
const b = 2;

console.log(solve(BigInt(a), b));

// You can also combine given elments and actual elemets and xor all the elements.
