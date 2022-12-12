/*
Given a linked list where every node represents a linked list and contains two pointers of its type:

Pointer to next node in the main list (right pointer)
Pointer to a linked list where this node is head (down pointer). All linked lists are sorted.
You are asked to flatten the linked list into a single list. Use down pointer to link nodes of the flattened list. The flattened linked list should also be sorted.
*/

/*
  Create Linked List
*/

let head = null;

class Node {
  constructor(x) {
    this.data = x;
    this.right = null;
    this.down = null;
  }
}

let node1 = new Node(2);
head = node1;
let node2 = new Node(4);
node1.right = node2;
let node3 = new Node(7);
node1.down = node3;
let node4 = new Node(7);
node3.down = node4;
let node5 = new Node(11);
node2.down = node5;

const findMiddle = (head) => {
  if (head === null || head.right === null) {
    return null;
  }
  let slow = head,
    fast = head;

  while (fast === null && fast.right === null) {
    fast = fast.right.right;
    slow = slow.right;
  }

  return slow;
};

const mergeLinkedList = (head1, head2) => {
  console.log("mergelinkedlist", head1, head2);
  if (head1 === null) return head2;
  if (head2 === null) return head1;

  let newList = null;

  if (head1.data <= head2.data) {
    newList = head1;
    head1 = head1.down;
  } else {
    newList = head2;
    head2 = head2.down;
  }

  let temp = newList;

  while (head1 && head2) {
    if (head1.data <= head2.data) {
      temp.down = head1;
      temp = temp.down;
      head1 = head1.down;
    } else {
      temp.down = head2;
      head2 = head2.down;
      temp = temp.down;
    }
  }
  console.log("result", newList);
  return newList;
};

const solve = (head) => {
  if (head === null || head.right === null) return head;

  let head1 = findMiddle(head);
  let head2 = head1.right;
  head1.right = null;

  solve(head1);
  solve(head2);

  return mergeLinkedList(head1, head2);
};

let alive = true;

while (alive) {
  solve();
}

console.log("solve", JSON.stringify(solve(head)));
