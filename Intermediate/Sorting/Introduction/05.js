const solve = (students) => {
  return students.sort((a, b) => {
    if (a.marks < b.marks) {
      return 0;
    }
    if (a.marks === b.marks) {
      if (a.rol > b.rol) {
        return 0;
      }
    }
    return -1;
  });
};

const students = [
  { rol: 14, marks: 484 },
  { rol: 2, marks: 500 },
  { rol: 10, marks: 595 },
  { rol: 3, marks: 495 },
  { rol: 9, marks: 484 },
  { rol: 13, marks: 500 },
  { rol: 21, marks: 494 },
  { rol: 24, marks: 595 }
];

console.table(students);

console.log(solve(students));
