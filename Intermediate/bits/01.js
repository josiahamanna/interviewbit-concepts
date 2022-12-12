const solve = (A) => {
  const getFirstSetBit = (n) => {
    let i = 0;

    while (1 << i <= n) {
      if (n & (1 << i)) break;
      i++;
    }

    return i;
  };

  let num1, num2;
  let xorOfAll = A.reduce((acc, item) => acc ^ item, 0);

  let firstSetBit = getFirstSetBit(xorOfAll);

  console.log("firstbit set", firstSetBit);
  console.log("xorOfAll", xorOfAll);

  for (let i = 0; i < A.length; i++) {
    if (A[i] & (1 << firstSetBit)) {
      num1 ^= A[i];
    } else {
      num2 ^= A[i];
    }
  }

  return [num2, num1].sort((a, b) => a - b);
};

console.log(solve([1, 2, 3, 1, 2, 4]));
