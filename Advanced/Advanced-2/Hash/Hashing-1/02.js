/*
Given an integer array, find longest subarray with sum = 0
*/

const solve = (A) => {
  console.log("input", A);
  let prefix = [A[0]],
    hashMap = { 0: -1 },
    result = Number.MIN_SAFE_INTEGER,
    l,
    r;

  for (let i = 1; i < A.length; i++) {
    prefix[i] = A[i] + prefix[i - 1];
  }

  console.log(prefix);

  for (let i = 0; i < prefix.length; i++) {
    if (hashMap[prefix[i]] !== undefined) {
      console.log(i - hashMap[prefix[i]], hashMap[prefix[i]], i);
      if (result < i - hashMap[prefix[i]]) {
        result = i - hashMap[prefix[i]];
        l = hashMap[prefix[i]];
        r = i;
      }
    } else {
      console.log(prefix[i], i);
      hashMap[prefix[i]] = i;
    }
  }
  console.log(hashMap, l, r, result);
  return A.slice(l + 1, r + 1);
};

console.log(solve([1, 2, -2, 4, -4]));
