/*
We have a list A, of points(x,y) on the plane. Find the B closest points to the origin (0, 0).

Here, the distance between two points on a plane is the Euclidean distance.

You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in.)

NOTE: Euclidean distance between two points P1(x1,y1) and P2(x2,y2) is sqrt( (x1-x2)2 + (y1-y2)2 ).
*/

const solve = (A, B) => {
  return A.sort(
    (a, b) => a[0] ** 2 + a[1] ** 2 - (b[0] ** 2 + b[1] ** 2)
  ).slice(0, B);
};

A = [
  [1, -1],
  [2, -1]
];

console.log(solve(A, 1));
