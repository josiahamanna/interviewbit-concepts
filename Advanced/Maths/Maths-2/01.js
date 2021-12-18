const solve = (A, B) => {
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

const A = 6;
const B = 7;

console.log(solve(A, B));
