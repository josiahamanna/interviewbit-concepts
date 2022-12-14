/* 
Design a stack that supports push, pop, top, and retrieve the minimum element in constant time.
    push(x) -- Push element x onto stack.
    pop() -- Removes the element on top of the stack.
    top() -- Get the top element.
    getMin() -- Retrieve the minimum element in the stack.
NOTE:
    All the operations have to be constant time operations.
    getMin() should return -1 if the stack is empty.
    pop() should return nothing if the stack is empty.
    top() should return -1 if the stack is empty.
*/

function Solve(s) {
  this.s = s;
  this.currMin = Number.MAX_SAFE_INTEGER;
}

Solve.prototype.push = function (e) {
  if (e < this.currMin && this.s.length !== 0) {
    this.s.push(2 * e - this.currMin);
    this.currMin = e;
  } else if (this.s.length === 0) {
    this.currMin = e;
    this.s.push(e);
  } else {
    this.s.push(e);
  }
  console.log(this.s, this.currMin);
};

Solve.prototype.pop = function () {
  if (this.s[this.s.length - 1] < this.currMin) {
    this.currMin = 2 * this.currMin - this.s[this.s.length - 1];
  }
  return this.s.pop();
};

Solve.prototype.top = function () {
  if (this.s[this.s.length - 1] < this.currMin) {
    let prevMin = 2 * this.currMin - this.s[this.s.length - 1];
    return (prevMin + this.s[this.s.length - 1]) / 2;
  } else return this.s[this.s.length - 1];
};

Solve.prototype.getMin = function () {
  return this.currMin;
};

const solve = new Solve([]);

console.log("push", solve.push(7));
console.log("push", solve.push(3));
console.log("getMin", solve.getMin());
console.log("top", solve.top());
console.log("push", solve.push(6));
console.log("getMin", solve.getMin());
console.log("top", solve.top());
/* console.log("push", solve.push(4));
console.log("push", solve.push(2));
console.log("getMin", solve.getMin());
console.log("top", solve.top());
console.log("pop", solve.pop());
console.log("push", solve.push(9));
console.log("top", solve.top());
console.log("getMin", solve.getMin());
console.log("pop", solve.pop());
console.log("getMin", solve.getMin());
console.log("top", solve.top());
console.log("getMin", solve.getMin());
console.log("pop", solve.pop());
console.log("getMin", solve.getMin());
console.log("pop", solve.pop());
console.log("getMin", solve.getMin());
console.log("pop", solve.pop());
console.log("getMin", solve.getMin());
console.log(Number.MAX_SAFE_INTEGER);
 */
