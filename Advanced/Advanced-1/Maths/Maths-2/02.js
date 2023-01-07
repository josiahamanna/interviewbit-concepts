// Given an integer array. Delete exactly one element such that gcd of remaining elements is maximum

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

const solve = (A) => {
  let prefixGcd = [A[0]],
    suffixGcd = new Array(A.length),
    ans = 0;

  suffixGcd[A.length - 1] = A[A.length - 1];

  for (let i = 1; i < A.length; i++) {
    prefixGcd.push(getGcd(prefixGcd[i - 1], A[i]));
  }

  for (let i = A.length - 2; i > -1; i--) {
    suffixGcd[i] = getGcd(suffixGcd[i + 1], A[i]);
  }

  for (let i = 0; i < A.length; i++) {
    if (i === 0) {
      ans = Math.max(ans, suffixGcd[i + 1]);
    } else if (i === A.length - 1) {
      ans = Math.max(ans, prefixGcd[i - 1]);
    } else {
      ans = Math.max(ans, getGcd(prefixGcd[i - 1], suffixGcd[i + 1]));
    }
  }

  return ans;
};

const A = [12, 15, 18];
console.log("input", A);
console.log(solve(A));
