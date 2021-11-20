// Given N strings how many different anagrams are there?

const solve = (A, B) => {
  let myHashSet = new Set();

  for (let i = 0; i < A.length; i++) {
    let temp = A[i].split("").sort().join("");
    if (!myHashSet.has(temp)) myHashSet.add(temp);
  }

  return myHashSet.size;
};

const A = ["data", "meta", "cat", "aatd", "tame", "eat", "tac", "talk", "tada"];

console.log(solve(A));
