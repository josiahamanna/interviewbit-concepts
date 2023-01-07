/*
    A CPU has N tasks to be performed. It is to be noted that the tasks have to be completed in a 
    specific order to avoid deadlock. In every clock cycle, the CPU can either perform a task or 
    move it to the back of the queue. You are given the current state of the scheduler queue in 
    array A and the required order of the tasks in array B.

    Determine the minimum number of clock cycles to complete all the tasks.
*/

const solve = (A, B) => {
  let count = 0;

  while (B[0]) {
    if (A[0] === B[0]) {
      A.shift();
      B.shift();
    } else {
      A.push(A.shift());
    }
    count++;
  }

  return count;
};

console.log(solve([2, 3, 1, 5, 4], [1, 3, 5, 4, 2]));
