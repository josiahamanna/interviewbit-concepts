const solve = (A, B) => {
  let cnt = new Map(),
    ans = 0,
    pre_sum = 0;

  for (let i = 0; i < A; i++) {
    ans += i * B[i] - pre_sum;
    pre_sum += B[i];

    if (cnt.has(B[i] - 1)) ans -= cnt.get(B[i] - 1);

    if (cnt.has(B[i] + 1)) ans += cnt.get(B[i] + 1);

    if (cnt.has(B[i])) cnt.set(B[i], cnt.get(B[i]) + 1);
    else cnt.set(B[i], 1);
  }

  return ((ans % (10 ** 9 + 7)) + (10 ** 9 + 7)) % (10 ** 9 + 7);
};

console.log(solve(3, [1, 2, 3]));
