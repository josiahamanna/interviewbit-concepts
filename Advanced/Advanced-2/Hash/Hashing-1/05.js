/*
You are given an array of N integers, A1, A2 ,…, AN and an integer B. Return the of count of distinct numbers in all windows of size B.

Formally, return an array of size N-B+1 where i'th element in this array contains number of distinct elements in sequence Ai, Ai+1 ,..., Ai+B-1.

NOTE: if B > N, return an empty array.
*/

const solve = (A, B) => {
  let hashMap = new Map(),
    result = [];

  for (let i = 0; i < B; i++) {
    if (hashMap.has(A[i])) {
      hashMap.set(A[i], hashMap.get(A[i]) + 1);
    } else {
      hashMap.set(A[i], 1);
    }
  }

  result.push(hashMap.size);

  for (let i = B; i < A.length; i++) {
    if (hashMap.get(A[i - B]) === 1) {
      hashMap.delete(A[i - B]);
    } else {
      hashMap.set(A[i - B], hashMap.get(A[i - B]) - 1);
    }

    if (hashMap.has(A[i])) {
      hashMap.set(A[i], hashMap.get(A[i]) + 1);
    } else {
      hashMap.set(A[i], 1);
    }

    result.push(hashMap.size);
  }

  return result;
};

console.log(solve([1, 2, 1, 3, 4, 3], 3));
