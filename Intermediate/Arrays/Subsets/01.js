/*  
 Subsequence: Sequence generated by deleting one or more (also none) elements from the array.
 Ex: [-2, -3, 6, 2, 4, -1, 0, 3]
 if you remove (-2, -3, 2, 0) left is {6, 4, -1, 3} is a subsequence.
 if you don't remove any element, it's also a subsequence
 if you remove all, empty array is a subsequence

 All sub-arrays have to be subsequences.
 But not all subsequences are sub-arrays

 Subsequences have to be arraged based on their index value
 Ex: [3, -1, 0, 6, 2]
     {3, 0, 2} is a subsequence, but {0, 3, 2} is not a subsequence
     Order of the index has to be maintained
 Ex: [4, -1, 2]
 list of all sub sequence: {}
                           {4}, {-1}, {2}
                           {4, -1}, {4, 2}, {-1, 2}
                           {4, -1, 2}
 If we sort the array, then sub sequences having single elements will be same. But not the sub sequences more than one element.
 
 Subsets are exactly same as sub sequences but order does not matter.
 So sorting doen't effect subsets

 Total number of subsets/subsequences: (2^n)-1
*/

/*
Problem: Given N array elements check if there exits a subset with sum = K

*/

const checkBit = (S, j) => {
  return (S >> j) & 1;
};

const solve = (A) => {
  let N = A.length;

  for (let i = 1; i < 1 << N; i++) {
    let sum = 0;
    for (let j = 0; j < N; j++) {
      if (checkBit((+String(i)).toString(2), j)) sum += A[j];
    }
    if (sum === 10) {
      let temp = [];

      for (let j = 0; j < N; j++) {
        if (checkBit((+String(i)).toString(2), j)) {
          temp.push(A[j]);
        }
      }
      console.log(temp);
    }
  }
};

const A = [3, -1, 0, 6, 2, -3, 5];

console.log(solve(A));
