const solve = (A) => {
  let result = [],
    maxHash = {},
    maxStackHash = {},
    maxElement = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i][0] === 1) {
      if (maxHash[A[i][1]]) {
        maxHash[A[i][1]]++;
        if (maxElement < maxHash[A[i][1]]) {
          maxElement = maxHash[A[i][1]];
        }
      } else {
        maxHash[A[i][1]] = 1;
        if (maxElement < maxHash[A[i][1]]) {
          maxElement = maxHash[A[i][1]];
        }
      }
      if (maxStackHash[maxHash[A[i][1]]]) {
        maxStackHash[maxHash[A[i][1]]].push(A[i][1]);
      } else {
        maxStackHash[maxHash[A[i][1]]] = [A[i][1]];
      }
      result.push(-1);
    } else {
      console.log(maxHash, maxStackHash, maxElement);

      let candidate = maxStackHash[maxElement].pop();
      result.push(candidate);
      if (!maxStackHash[maxElement].length) {
        delete maxStackHash[maxElement];
        maxElement = Math.max(...Object.keys(maxStackHash));
      }
      maxHash[candidate]--;
    }
  }

  return result;
};

console.log(
  solve([
    [1, 5],
    [1, 7],
    [1, 5],
    [1, 7],
    [1, 4],
    [1, 5],
    [2, 0],
    [2, 0],
    [2, 0],
    [2, 0],
  ])
);
