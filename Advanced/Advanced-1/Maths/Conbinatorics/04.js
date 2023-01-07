/*
Given a string A, find the rank of the string amongst its permutations sorted lexicographically. Note that the characters might be repeated. If the characters are repeated, we need to look at the rank in unique permutations. Look at the example for more details.

NOTE:

The answer might not fit in an integer, so return your answer % 1000003 where 1000003 is a prime number.
String A can consist of both lowercase and uppercase letters. Characters with lesser ascii value are considered smaller i.e. 'a' > 'Z'.
*/

const getPower = (a, b, c) => {
  if (b === BigInt(1)) {
    return BigInt(1);
  }
  let result = BigInt(1);
  while (BigInt(b)) {
    if (b & BigInt(1)) result *= a % c;
    a *= a % c;
    b >>= BigInt(1);
  }
  return result;
};

const getFact = (A, C) => {
  let result = BigInt(1);
  for (let i = 2; i <= A; i++) {
    result = (result * BigInt(i)) % BigInt(C);
  }
  return result % BigInt(C);
};

const findOne = (S, i, C) => {
  let temp = 0;
  for (let j = i + 1; j < S.length; j++) {
    if (S[i] > S[j]) {
      temp++;
    }
  }
  return temp % C;
};

const findTwo = (S, i, C) => {
  let freq = new Array(52).fill(0);
  for (let j = i; j < S.length; j++) {
    if (S[j] >= "A" && S[j] <= "Z")
      freq[A[j].charCodeAt(0) - "A".charCodeAt(0)] += 1;
    else freq[A[j].charCodeAt(0) - "a".charCodeAt(0) + 26] += 1;
  }

  let freqFact = BigInt(1);

  for (let i = 0; i < freq.length; i++) {
    if (freq[i]) {
      freqFact *= getFact(freq[i], C) % BigInt(C);
    }
  }

  console.log(freqFact);

  return (
    Number(
      (getFact(S.length - i - 1, C) *
        getPower(BigInt(freqFact), BigInt(C - 2), BigInt(C))) %
        BigInt(C)
    ) % C
  );
};

const solve = (A) => {
  let ans = BigInt(0);

  const C = 1000003;

  for (let i = 0; i < A.length; i++) {
    let lessOnRight = findOne(A, i, C);
    let permutations = findTwo(A, i, C);
    ans += BigInt(lessOnRight * permutations) % BigInt(C);
  }
  return Number((ans + BigInt(1)) % BigInt(C));
};

const A = "bbbbaaaa";

console.log(solve(A));
