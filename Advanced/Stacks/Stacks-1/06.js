const solve = (A) => {
  if (!A.length) return A;

  let tempStack = [A.pop()];

  while (A.length) {
    let top = A.pop();
    console.log(tempStack, "|", top);
    if (top >= tempStack[tempStack.length - 1]) {
      tempStack.push(top);
    } else {
      let i = 0;
      while (top < tempStack[tempStack.length - 1] && tempStack.length) {
        i++;
        console.log("**", i);
        A.push(tempStack.pop());
      }
      tempStack.push(top);
      for (let j = 0; j < i; j++) {
        tempStack.push(A.pop());
      }
    }
  }

  return tempStack;
};

console.log(
  solve([
    66, 96, 43, 28, 14, 1, 41, 76, 70, 81, 22, 11, 42, 78, 4, 88, 70, 43, 90, 6,
    12,
  ])
);
