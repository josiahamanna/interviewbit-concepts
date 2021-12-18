/*
Given three integers A, B and C, where A represents n, B represents r and C represents m, find and return the value of nCr % m where nCr % m = (n!/((n-r)!*r!))% m.

x! means factorial of x i.e. x! = 1 * 2 * 3... * x.
*/

const solve = (A, B) => {
  const pascalTriangle = [];

  for (let i = 0; i < A; i++) {
    let temp = [];
    for (let j = 0; j <= B && j <= i + 1; j++) {
      if (j === 0) {
        temp.push(1);
      } else if (i + 1 === j) {
        temp.push(1);
      } else {
        temp.push(
          (pascalTriangle[i - 1][j - 1] + pascalTriangle[i - 1][j]) %
            (Math.pow(10, 9) + 7)
        );
      }
    }
    pascalTriangle.push(temp);
  }

  return pascalTriangle[A - 1][B];
};

const A = 4;
const B = 2;

console.log(solve(A, B));
