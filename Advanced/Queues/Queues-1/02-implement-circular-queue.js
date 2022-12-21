/* 
    Implement circular queue
*/

const queueSize = 6;

let queue = new Array(6),
  r = -1,
  f = -1,
  size = 0;

const enqueue = (x) => {
  if (size === queueSize) {
    return "queue full";
  }
  r = (r + 1) % queueSize;
  queue[r] = x;
  return ++size;
};

const dequeue = () => {
  if (size === 0) {
    return "queue empty";
  }

  f = (f + 1) % queueSize;
  size--;

  return queue[f];
};

const front = () => {
  return queue[(f + 1) % queueSize];
};

const showQueue = () => {
  if (size === 0) {
    console.log("queue empty");
  }
  let j = f + 1,
    result = "";

  for (let i = 0; i < size; i++) {
    result += queue[j] + " ";
    j = (j + 1) % queueSize;
  }
  console.log(result);
};

showQueue();
console.log(enqueue(1));
console.log(enqueue(2));
console.log(enqueue(3));
console.log(enqueue(4));
console.log(enqueue(5));
console.log(enqueue(6));
console.log(enqueue(7));
showQueue();
console.log(dequeue());
showQueue();
console.log(enqueue(1));
showQueue();
console.log(dequeue());
console.log(dequeue());
console.log(dequeue());
showQueue();
console.log(enqueue(2));
console.log(enqueue(3));
console.log(enqueue(4));
showQueue();
console.log(dequeue());
console.log(dequeue());
console.log(dequeue());
console.log(dequeue());
console.log(dequeue());
console.log(dequeue());
showQueue();
console.log(enqueue(1234));
showQueue();
