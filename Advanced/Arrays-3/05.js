// Given a 2D integer matrix A of size N x N find a B x B submatrix where B<= N and B>= 1, such that sum of all the elements in submatrix is maximum.

const solve = (A, B) => {
  let C = [],
    D = [],
    E = [],
    F = [],
    result = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < A.length - B + 1; i++) {
    for (let j = 0; j < A[0].length - B + 1; j++) {
      C.push(i);
      D.push(j);
      E.push(B + i - 1);
      F.push(B + j - 1);
    }
  }

  let prefix = [];

  for (let i = 0; i < A.length; i++) {
    let tempPrefix = [];
    for (let j = 0; j < A[0].length; j++) {
      if (j === 0) {
        tempPrefix[j] = A[i][j];
      } else {
        tempPrefix[j] = tempPrefix[j - 1] + A[i][j];
      }
    }
    prefix.push(tempPrefix);
  }

  for (let j = 0; j < A[0].length; j++) {
    for (let i = 1; i < A.length; i++) {
      prefix[i][j] = prefix[i - 1][j] + prefix[i][j];
    }
  }

  for (let i = 0; i < C.length; i++) {
    let a1 = C[i],
      b1 = D[i],
      a2 = E[i],
      b2 = F[i];
    let sum = prefix[a2][b2];

    if (a1 > 0) sum = sum - prefix[a1 - 1][b2];
    if (b1 > 0) {
      sum = sum - prefix[a2][b1 - 1];
    }

    if (a1 > 0 && b1 > 0) sum = sum + prefix[a1 - 1][b1 - 1];
    result = Math.max(result, sum);
  }

  return result;
};

const A = [
  [
    -50,
    73,
    -34,
    -56,
    -41,
    -8,
    -61,
    -47,
    -76,
    54,
    10,
    45,
    -51,
    86,
    13,
    -26,
    -78,
    68,
    -82,
    87,
  ],
  [
    5,
    58,
    91,
    -98,
    -75,
    -23,
    -86,
    14,
    -76,
    34,
    -26,
    72,
    59,
    -67,
    -30,
    -13,
    -3,
    18,
    77,
    73,
  ],
  [
    -30,
    63,
    -32,
    92,
    85,
    2,
    -20,
    -87,
    -73,
    -98,
    -1,
    27,
    -75,
    43,
    24,
    -77,
    72,
    -39,
    81,
    -97,
  ],
  [
    -68,
    5,
    93,
    25,
    -69,
    -8,
    42,
    -78,
    -14,
    -36,
    0,
    87,
    60,
    -87,
    74,
    -30,
    70,
    -65,
    -67,
    11,
  ],
  [
    60,
    -4,
    -33,
    -15,
    50,
    40,
    -6,
    -5,
    -76,
    -81,
    25,
    76,
    -6,
    -42,
    2,
    71,
    -34,
    -22,
    93,
    -49,
  ],
  [
    -16,
    -82,
    -36,
    19,
    52,
    -100,
    -13,
    -40,
    26,
    -90,
    57,
    70,
    15,
    76,
    -73,
    -57,
    58,
    64,
    9,
    -18,
  ],
  [
    -14,
    65,
    -13,
    77,
    -26,
    -75,
    -73,
    -71,
    28,
    -77,
    20,
    2,
    62,
    23,
    96,
    37,
    -39,
    95,
    25,
    -36,
  ],
  [
    -40,
    -98,
    16,
    -70,
    26,
    -89,
    71,
    -89,
    47,
    53,
    20,
    90,
    24,
    88,
    63,
    40,
    -49,
    -38,
    -71,
    0,
  ],
  [
    13,
    58,
    78,
    65,
    -93,
    -23,
    -100,
    -42,
    -61,
    3,
    60,
    57,
    24,
    -23,
    8,
    13,
    -13,
    -99,
    -50,
    -40,
  ],
  [
    -72,
    93,
    84,
    -95,
    40,
    11,
    4,
    -65,
    56,
    -28,
    50,
    -77,
    -15,
    56,
    -84,
    -74,
    57,
    26,
    57,
    37,
  ],
  [
    -29,
    -31,
    61,
    -4,
    -78,
    -83,
    12,
    17,
    -4,
    85,
    -59,
    -77,
    29,
    -71,
    65,
    59,
    32,
    -4,
    -45,
    -47,
  ],
  [
    62,
    84,
    34,
    -46,
    72,
    -43,
    69,
    32,
    63,
    -93,
    -17,
    11,
    -65,
    -33,
    -52,
    -25,
    38,
    -77,
    42,
    54,
  ],
  [
    11,
    41,
    75,
    -41,
    -75,
    -79,
    -30,
    -74,
    34,
    -95,
    83,
    -50,
    98,
    -21,
    1,
    93,
    34,
    -63,
    34,
    56,
  ],
  [
    93,
    76,
    5,
    62,
    48,
    -19,
    0,
    -87,
    -59,
    -45,
    -45,
    42,
    -38,
    -89,
    -23,
    -76,
    -22,
    52,
    -57,
    -4,
  ],
  [
    -27,
    -60,
    13,
    -25,
    -28,
    -82,
    -90,
    -83,
    32,
    12,
    -5,
    69,
    -69,
    -60,
    -12,
    -15,
    -10,
    -3,
    89,
    90,
  ],
  [
    45,
    53,
    14,
    -49,
    40,
    -56,
    -42,
    35,
    59,
    92,
    -95,
    -36,
    81,
    3,
    -71,
    75,
    -92,
    -8,
    97,
    49,
  ],
  [
    56,
    61,
    -73,
    -33,
    41,
    29,
    -60,
    -87,
    74,
    -99,
    -23,
    -85,
    -17,
    -87,
    92,
    -76,
    -99,
    92,
    59,
    -30,
  ],
  [
    -72,
    -73,
    -16,
    -25,
    86,
    -2,
    70,
    -13,
    -53,
    -96,
    3,
    -79,
    -37,
    6,
    63,
    -90,
    71,
    -11,
    -60,
    64,
  ],
  [
    42,
    -81,
    13,
    91,
    4,
    -82,
    -68,
    50,
    -95,
    75,
    39,
    3,
    -78,
    -2,
    -53,
    84,
    -52,
    71,
    -36,
    13,
  ],
  [
    -25,
    45,
    12,
    46,
    -22,
    69,
    -38,
    19,
    85,
    -11,
    44,
    -35,
    40,
    -55,
    8,
    18,
    -30,
    -99,
    23,
    32,
  ],
];

const B = 13;

console.log(solve(A, B));
