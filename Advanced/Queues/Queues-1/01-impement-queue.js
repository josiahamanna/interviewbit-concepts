/*
Implement queue using array
*/

let arr = [],
  r = -1,
  f = -1;

const enqueue = (x) => {
  arr[++r] = x;
};

const dequeue = () => {
  if (r === f) {
    return "empty";
  } else {
    f++;
  }
};

const front = () => {
  return arr[f + 1];
};

const showQueue = () => {
  if (r === f) {
    return "empty";
  }
  let a = [];
  let i = f + 1;
  while (i != r + 1) {
    a.push(arr[i]);
    i++;
  }
  return a;
};

const isEmpty = () => {
  if (r == f) return true;
  else return false;
};

console.log(isEmpty());
enqueue(1);
console.log(arr);
console.log(front());
console.log(isEmpty());
enqueue(2);
enqueue(3);
enqueue(4);
console.log(arr);
dequeue();
console.log(showQueue());
dequeue();
console.log(showQueue());
dequeue();
dequeue();
dequeue();
console.log(showQueue());
enqueue(2);
enqueue(3);
enqueue(4);
console.log(showQueue());
