const solve = (A, Q) => {
  let N = A.length;

  let hashmap = new Map();
  for (let i = 0; i < N; i++) {
    if (hashmap.has(A[i])) {
      let temp = hashmap.get(A[i]);
      temp.push(i);
      hashmap.set(A[i], temp);
    } else {
      hashmap.set(A[i], [i]);
    }
  }

  // Iterating with q in given queries
  for (let q of Q) {
    if (hashmap.has(q[0])) {
      if (hashmap.has(q[1])) {
        let temp = hashmap.get(q[1]);

        temp = [...temp, ...hashmap.get(q[0])];
        hashmap.set(q[1], temp);
      } else {
        hashmap.set(q[1], hashmap.get(q[0]));
      }
      hashmap.delete(q[0]);
    }
  }

  console.log(hashmap);

  // Creating map to store key value pairs
  let new_map = new Map();
  for (let x of hashmap) for (let index of x[1]) new_map.set(index, x[0]);

  // Updating the main array with final values
  console.log(new_map, new_map.keys());

  for (let key of new_map.keys()) A[key] = new_map.get(key);

  return A;
};

console.log(
  solve(
    [2, 2, 5, 1],
    [
      [3, 2],
      [5, 5],
      [2, 4],
      [3, 2],
      [5, 2]
    ]
  )
);
