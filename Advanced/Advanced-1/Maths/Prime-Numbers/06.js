/*
You have given an array A having N integers. Let say G is the product of all elements of A.

You have to find the number of distinct prime divisors of G.
*/

const solve = (A) => {
  let max = Math.max(...A);

  let divisorArray = new Array(max + 1);
  let primeArray = new Array(max + 1).fill(true);

  primeArray[1] = false;

  for (let i = 2; i <= max; i++) {
    for (let j = i * i; j <= max; j += i) {
      primeArray[i] = false;
    }
  }

  for (let i = 2; i <= max; i++) {
    for (let j = 2 * i; j <= max; j += i) {
      if (!divisorArray[i])
        if (divisorArray[j]) divisorArray[j].push(i);
        else divisorArray[j] = [i];
    }
  }

  let mySet = new Set();

  for (let i = 0; i < A.length; i++) {
    if (divisorArray[A[i]]) {
      divisorArray[A[i]].forEach((item) => mySet.add(item));
    } else if (primeArray[A[i]]) {
      mySet.add(A[i]);
    }
  }

  return mySet.size;
};

const A = [96, 98, 5, 41, 80];

console.log(solve(A));
