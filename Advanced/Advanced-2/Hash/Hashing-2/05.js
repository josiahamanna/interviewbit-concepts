/*
Given two array of integers A and B describing a pair of (A[i], B[i]) coordinates in 2D plane. A[i] describe x coordinates of the ith point in 2D plane whereas B[i] describes the y-coordinate of the ith point in 2D plane.

Find and return the maximum number of points which lie on the same line.
*/

const solve = (A, B) => {
  let result = Number.MIN_SAFE_INTEGER;

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

  for (let i = 0; i < A.length; i++) {
    let counter = {},
      dup = 1;
    for (let j = i + 1; j < A.length; j++) {
      if (A[j] === A[i] && B[i] === B[j]) dup++;
      else {
        let dx = A[j] - A[i],
          dy = B[j] - B[i];
        let g = getGcd(Math.abs(dx), Math.abs(dy));

        let num = dx / g;
        let dem = dy / g;

        if (num <= 0 && dem <= 0) {
          num = Math.abs(num);
          dem = Math.abs(dem);
        } else {
          if (dem < 0) {
            dem = -dem;
            num = -num;
          }
        }
        if (counter[`${num}_${dem}`]) {
          counter[`${num}_${dem}`]++;
        } else {
          counter[`${num}_${dem}`] = 1;
        }
      }

      result = Math.max(result, dup);

      for (let key in counter) {
        result = Math.max(result, counter[key] + dup);
      }
    }
  }

  return result;
};

console.log(
  solve(
    [
      -39,
      25,
      -17,
      -5,
      16,
      0,
      -17,
      -9,
      21,
      -19,
      11,
      -10,
      -18,
      17,
      37,
      -36,
      -36,
      16,
      41,
      36,
      42,
      5,
      -35,
      47,
      -33,
      4,
      -30,
      4,
      -7,
      34,
      31,
      22,
      -48,
      -41,
      -37,
      -19,
      27,
      30,
      -19,
      1,
      7,
      -21
    ],
    [
      37,
      -11,
      -46,
      -37,
      32,
      46,
      -30,
      -36,
      -20,
      -23,
      -5,
      28,
      4,
      -31,
      9,
      9,
      9,
      37,
      34,
      31,
      9,
      -16,
      6,
      -20,
      -27,
      -25,
      -35,
      47,
      -6,
      22,
      -49,
      47,
      8,
      42,
      49,
      -28,
      -47,
      40,
      7,
      -11,
      44,
      -4
    ]
  )
);
