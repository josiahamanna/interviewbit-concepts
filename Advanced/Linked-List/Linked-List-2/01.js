/*
Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

Try solving it using constant additional space.
*/
/*
  Create Linked List
*/

let head = null;

class Node {
  constructor(x) {
    this.data = x;
    this.next = null;
  }
}

let node1 = new Node(1);
head = node1;
let node2 = new Node(2);
node1.next = node2;
let node3 = new Node(3);
node2.next = node3;
let node4 = new Node(4);
node3.next = node4;
let node5 = new Node(5);
node4.next = node5;
let node6 = new Node(6);
node5.next = node6;
let node7 = new Node(7);
node6.next = node7;
node7.next = node4;

const printLinkedList = (head) => {
  let temp = head;

  if (head) {
    while (temp !== null) {
      console.log(temp.data);
      temp = temp.next;
    }
  } else {
    console.log("List empty");
  }
  return;
};

const solve = () => {
  let fast = head;
  let slow = head;

  while (fast.next !== null && fast.next.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      break;
    }
  }

  let curr = head;

  while (curr !== slow) {
    curr = curr.next;
    slow = slow.next;
  }

  console.log("curr", curr);
};

console.log("solve", solve());
