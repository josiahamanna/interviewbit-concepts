const solve = (A, B) => {
  let result = [1];

  for (let i = 1; i <= A; i++) {
    result[i] = (i * result[i - 1]) % B;
  }

  return result;
};

const getPower = (a, b, c) => {
  let product = 1;
  while (b) {
    if (b & 1) {
      product *= a % c;
    }
    a *= a % c;
    b = b >> 1;
  }

  return product % c;
};

const solveInv = (A, B) => {
  let result = [1];

  for (let i = 1; i <= A; i++) {
    result[i] = ((getPower(i, B - 2, B) % B) * result[i - 1]) % B;
  }

  return result;
};

const A = 1000000;
const B = 1000003;

console.log(solve(A, B));
console.log(solveInv(A, B));
