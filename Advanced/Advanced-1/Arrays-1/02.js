// Given with an array of integers of size N. Find first missing positive integers
// [-8, 1, 6, 4, 5, -10, 2, 9]; 3 is missing
// If 1 to N is present then N+1 is missing
// If 1 to N is not present then the missing will fall inside 1 to N; meaning search space is N
// Traverse on the array and put true in new array.
// Again iterate on new array and you will get the number missing;

// const solve = (A) => {
//   let truth = [];
//   for (let i = 0; i < A.length; i++) {
//     if (A[i] > 0) {
//       truth[A[i] - 1] = true;
//     }
//   }

//   let i = 0;
//   while (truth[i]) {
//     i++;
//   }

//   return i + 1;
// };

/*
 * for i = 0-N
 * if(element is not btw 1->N)
 * contine
 * else 
 *  right position = A[i]-1
 *  if(A[rightposition] !== A[i])
 *    swap(A[i], Arr[Arr[i]-1])
}
 */

const swap = (A, i, j) => {
  console.log("before", A[i], A[j], j);
  A[i] = A[i] ^ A[j];
  A[j] = A[i] ^ A[j];
  A[i] = A[i] ^ A[j];
  console.log("after", A[i], A[j]);
};

const solve = (A) => {
  for (let i = 0; i < A.length; i++) {
    console.log("le", A[i]);
    while (
      A[i] !== i + 1 &&
      A[A[i] - 1] !== A[i] &&
      A[i] > 0 &&
      A[i] <= A.length
    ) {
      swap(A, i, A[i] - 1);
    }
    console.log("arr", A);
  }

  return A;
};
const A = [-8, 1, 6, 4, 5, -10, 2, 9];
console.log("input", A);
console.log(solve(A));

/*
 * Can we say we consider A[i+1] only if sum(till i) + 1 is greater than equal to A[i+1]
 */
