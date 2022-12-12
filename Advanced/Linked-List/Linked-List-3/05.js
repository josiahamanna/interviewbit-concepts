/*
sort given linked list
*/

/*
  Create Linked List
*/

let head = null;

class Node {
  constructor(x) {
    this.data = x;
    this.right = null;
    // this.down = null;
  }
}

let node1 = new Node(7);
head = node1;
let node2 = new Node(11);
node1.right = node2;
let node3 = new Node(7);
node2.right = node3;
let node4 = new Node(2);
node3.right = node4;
let node5 = new Node(4);
node4.right = node5;

const swap = (head1, head2) => {
  let temp = null;
  if (head1.data > head2.data) {
    temp = head1.data;
    head1.data = head2.data;
    head2.data = temp;
  } else {
    temp = head2.data;
    head2.data = head1.data;
    head1.data = temp.data;
  }
};

const findMid = (head) => {
  let slow = head;
  let fast = head;

  while (fast.right !== null && fast.right.right !== null) {
    slow = slow.right;
    fast = fast.right.right;
  }

  return slow;
};

const solve = (head) => {
  if (head.right && head.right.right === null) {
    swap(head, head.right);
  } else {
    console.log(head);
    let head1 = findMid(head);
    let head2 = head1.right;
    solve(head1);
    solve(head2);
  }
  return head;
};

console.log("solve", JSON.stringify(solve(head)));
