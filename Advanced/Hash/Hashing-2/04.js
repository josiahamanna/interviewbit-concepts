/*
Given an array A of length N. You have to answer Q queires.

Each query will contain 4 integers l1, r1, l2 and r2. If sorted segment from [l1, r1] is same as sorted segment from [l2 r2] then answer is 1 else 0.

NOTE The queries are 0-indexed.
*/

const solve = (A, B) => {
  let hashMap = {},
    prefix = [BigInt(0)],
    result = [];
  for (let i = 0; i < A.length; i++) {
    if (!hashMap[A[i]]) {
      let random;
      while (true) {
        random = Math.floor(Math.random() * 10 ** 9);
        if (!Object.values(hashMap).includes(random)) {
          break;
        }
      }
      hashMap[A[i]] = random;
    }
  }

  for (i = 0; i < A.length; i++) {
    prefix[i + 1] = BigInt(hashMap[A[i]]) + BigInt(prefix[i]);
  }

  B.forEach((q) => {
    const [l1, r1, l2, r2] = q;
    let sum1 = prefix[r1 + 1] - prefix[l1];
    let sum2 = prefix[r2 + 1] - prefix[l2];

    if (sum1 === sum2) {
      result.push(1);
    } else {
      result.push(0);
    }
  });

  return result;
};

console.log(solve([1, 7, 11, 8, 11, 7, 1], [[0, 2, 4, 6]]));
