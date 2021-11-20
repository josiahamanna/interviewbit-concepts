// Speacial index
// Given N array elements

const solve = (A, q) => {
  const N = A.length;

  let prefixEven = [];
  prefixEven[0] = A[0];

  let result = 0;

  for (let i = 1; i < A.length; i++) {
    console.log(A[i]);
    if (i % 2 == 1) {
      prefixEven[i] = prefixEven[i - 1];
    } else {
      prefixEven[i] = A[i] + prefixEven[i - 1];
    }
  }

  console.log(prefixEven);
};

const A = [6, -2, 3, 4, 10, 5, 19, 2, 3, 2];

const query = [2, 7];

console.log(solve(A, query));
