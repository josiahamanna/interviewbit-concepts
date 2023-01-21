/*
 * Given N elements where A[i] represents the height of the wall pick any two walls such that the watter collected between them is maximized
 * (This problem is not same as 'Rain water tapping between walls. Here, when we choose two walls we assume rest of the walls to be vanished/gone')
 * Solution:
 *  Formula to find the water collected between walls is (|i-j|)*(Min(A[i], A[i])).
 *  Think of two pointers.
 *  Place i and j in leftmost and rightmost respectively.
 *  Calculate the amount of water. And update the answer.
 *  After calculating which one to move? i to right or j to left? Which will give us better answer?
 *  We can decide that pointer pointing to the smaller wall is to be moved.
 *  If we enconter walls with same hight we can move both the pointers*/

const solve = (A) => {
  let ans = 0;

  let i = 0,
    j = A.length - 1;

  while (i != j) {
    let x = (j - i) * Math.min(A[i], A[j]);
    ans = Math.max(ans, x);

    if (A[i] > A[j]) {
      j++;
    } else {
      i++;
    }
  }

  return ans;
};

console.log(solve([1, 2, 3, 4]));
