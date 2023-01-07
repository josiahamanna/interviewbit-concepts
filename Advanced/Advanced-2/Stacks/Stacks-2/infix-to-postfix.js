const solve = (A) => {
  const precedence = {
    "^": 3,
    "/": 2,
    "*": 2,
    "+": 1,
    "-": 1,
  };

  let postfix = [],
    stack = [];

  for (let i = 0; i < A.length; i++) {
    if (/[a-zA-Z]/.test(A[i])) {
      postfix.push(A[i]);
    } else if (A[i] === "(") {
      stack.push(A[i]);
    } else if (A[i] === ")") {
      while (stack.length && stack[stack.length - 1] != "(") {
        postfix.push(stack.pop());
      }
      stack.pop();
    } else if (precedence[A[i]] <= precedence[stack[stack.length - 1]]) {
      while (
        precedence[A[i]] <= precedence[stack[stack.length - 1]] &&
        stack.length &&
        stack[stack.length - 1] !== "("
      ) {
        postfix.push(stack.pop());
        console.log("I entered", A[i], stack);
      }

      stack.push(A[i]);
    } else {
      stack.push(A[i]);
    }
    console.log(A[i], " | ", stack, " | ", postfix.join(""));
  }

  if (stack.length) {
    while (stack.length) {
      postfix.push(stack.pop());
    }
  }

  return postfix.join("");
};

// console.log(solve("x^y/(a*z)+b"));
console.log(solve("q+(c*t)*o+(g*g)+q*(i-a)*p-(i*l)"));
