const solve = (A) => {

  const test = (A) => {
    if(A.length === 3) {
      A.push(0);
      return;
    }
    A.push(A[A.length-1] + 1);
    test(A)
  }

  test(A)

  return A;
};

const A = [];

console.log(solve(A));
