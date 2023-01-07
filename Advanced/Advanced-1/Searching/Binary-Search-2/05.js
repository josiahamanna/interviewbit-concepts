/*
Find Nth Magical number. Given A and B, find Nth multiple of A or B.
Example: A = 2 and B = 3 find N = 8;
Answer: 12
*/

const getGcd = (A, B) => {
  if (A > B) {
    A = A ^ B;
    B = A ^ B;
    A = A ^ B;
  }

  while (A > 0) {
    let temp = A;
    A = B % A;
    B = temp;
  }

  return B;
};

const solve = (A, B, C) => {
  let lcm = (B * C) / getGcd(B, C),
    l = Math.min(B, C),
    r = A * Math.min(B, C),
    ans = 0;
  console.log(r);

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    let multOfAorB =
      Math.floor(mid / B) + Math.floor(mid / C) - Math.floor(mid / lcm);
    console.log("multOfAorB", multOfAorB);
    if (multOfAorB >= A) {
      ans = mid;
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return ans;
};

console.log(solve(8, 4, 3));
