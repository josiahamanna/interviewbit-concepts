/*
Given N tasks, K workers, array -> A[i] = time taken to complete ith task. Find minimum time to complete all tasks.
   One task can only be done by 1 person.
   A worker can only do continuous tasks.
   Workers can work in parallel
*/

const solve = (A, B) => {
  const check = (mid) => {
    let worker = 1;
    let currentTime = A[0];

    for (let i = 1; i < A.length; i++) {
      if (currentTime + A[i] > mid) {
        worker++;
        currentTime = A[i];
      } else {
        currentTime += A[i];
      }
    }
    if (worker <= B) {
      return true;
    } else {
      return false;
    }
  };
};

console.log(solve([]));
