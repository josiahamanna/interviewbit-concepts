/*

 */

const solve = (A, B) => {
  let hashMap = new Map(),
    result = [];

  for (let i = 0; i < A.length; i++) {
    if (hashMap.has(A[i])) {
      hashMap.set(A[i], hashMap.get(A[i]) + 1);
    } else {
      hashMap.set(A[i], 1);
    }
  }

  for (let i = 0; i < B.length; i++) {
    if (hashMap.has(B[i])) {
      for (let j = 0; j < hashMap.get(B[i]); j++) {
        result.push(B[i]);
      }
      hashMap.delete(B[i]);
    }
  }

  for (let i of hashMap) {
    for (let j = 0; j < i[1]; j++) {
      result.push(i[0]);
    }
  }

  return result;
};

console.log(solve([1, 2, 3, 4, 5], [5, 4, 2]));
