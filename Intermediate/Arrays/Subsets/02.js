/*
Given N elements array find sum of all subsets sum

How many sub sets the single element is present
When you consider a element, in remaining elements, how many subsets are there? this time consider empty subset. That is 2^(n-1).

*/
const solve = (A) => {
  let sum = 0;

  for (let i = 0; i < A.length; i++) {
    sum += A[i] * (i + 1) * (A.length - i);
    //sum += A[i] * Math.pow(2, A.length - 1);
  }
  return sum;
};

//const A = [3, -1, 0, 6, 2, -3, 5];
const A = [1, 2, 3];
