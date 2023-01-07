/*
Given three integers A, B and C, where A represents n, B represents r and C represents p and p is a prime number greater than equal to n, find and return the value of nCr % p where nCr % p = (n! / ((n-r)! * r!)) % p.

x! means factorial of x i.e. x! = 1 * 2 * 3... * x.

NOTE: For this problem, we are considering 1 as a prime.
*/

let factOfi = {
  1: 1,
};

const getFact = (A, C) => {
  let result = BigInt(1);
  for (let i = 2; i <= A; i++) {
    result = (result * BigInt(i)) % BigInt(C);
    factOfi[i] = result;
  }
  return Number(result % BigInt(C));
};

function mult(a, b, c) {
  a = BigInt(a);
  b = BigInt(b);
  let m = BigInt(c);
  return Number((a * b) % m);
}

function getPower(a, b, m) {
  if (b == 0) return 1;
  if (b % 2 == 1) return mult(a, getPower(a, b - 1, m), m);
  return getPower(mult(a, a, m), b / 2, m);
}

const solve = (A, B, C) => {
  return (
    ((((getFact(A, C) * getPower(factOfi[A - B], C - 2, C)) % C) *
      getPower(factOfi[B], C - 2, C)) %
      C) %
    C
  );
};

console.log(solve(808135, 38376, 14323247));

//console.log(getFact(45447, 8913119));
