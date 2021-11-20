const solve = (A) => {
  A = String(A).split("");
  let mySet = new Set();
  let result = 1;

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A.length; j++) {
      let product = 1;
      for (let k = i; k <= j; k++) {
        product = product * A[k];
      }
      if (mySet.has(product)) {
        result = 0;
        break;
      } else {
        mySet.add(product);
      }
    }
  }

  console.log(mySet);
  return result;
};

const A = 2345;

console.log(solve(A));
// sove it in n^2
