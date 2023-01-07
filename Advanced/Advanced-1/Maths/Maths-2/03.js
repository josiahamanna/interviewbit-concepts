/*
You are given two positive numbers A and B . You need to find the maximum valued integer X such that:

X divides A i.e. A % X = 0
X and B are co-prime i.e. gcd(X, B) = 1
*/

const getGcd = (A, B) => {
  if (A > B) {
    A = A ^ B;
    B = A ^ B;
    A = A ^ B;
  }

  while (A > 0) {
    let temp = A;
    A = B % A;
    B = temp;
  }

  return B;
};

const solve = (A, B) => {
  let result;
  while (A > 1) {
    A = A / getGcd(A, B);
    if (getGcd(A, B) === 1) {
      result = A;
      break;
    }
  }

  return result;
};

const A = 30;
const B = 12;

console.log(solve(A, B));
