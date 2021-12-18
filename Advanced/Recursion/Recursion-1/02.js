/*
Implement pow(x, n) % d.
In other words, given x, n and d,

find (xn % d)

Note that remainders on division cannot be negative. In other words, make sure the answer you return is non negative.
*/

const getPower = (A, B, C) => {
  A = ((A % C) + C) % C;
  if (B === BigInt(0)) {
    return BigInt(1) % C;
  }
  if (B === BigInt(1)) {
    return A % C;
  }

  let power = getPower(A, B / BigInt(2), C) % C;
  console.log(power);
  if (B & BigInt(1)) {
    console.log("b is odd");
    return (((power * power) % C) * (A % C)) % C;
  } else {
    console.log("b is even");
    return (power * power) % C;
  }
};

const solve = (A, B, C) => {
  return ((Number(getPower(BigInt(A), BigInt(B), BigInt(C))) % C) + C) % C;
};

console.log("ans", solve(-1, 2, 100));
