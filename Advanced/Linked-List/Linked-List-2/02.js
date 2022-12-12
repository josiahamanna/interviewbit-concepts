/*
Given a singly linked list A

 A: A0 → A1 → … → An-1 → An 
reorder it to:

 A0 → An → A1 → An-1 → A2 → An-2 → … 
You must do this in-place without altering the nodes' values.
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
/* let node6 = new Node(6)
node5.next = node6
let node7 = new Node(7)
node6.next = node7 */

const solve = () => {
  if (head === null || head.next === null) return head;

  let slow = head,
    fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let secondHead = slow.next;
  slow.next = null;

  let prev = null,
    curr = secondHead,
    nxt = null;

  while (curr !== null) {
    nxt = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nxt;
  }

  secondHead = prev;
  firstHead = head;

  let temp = secondHead;

  while (secondHead !== null && firstHead !== null) {
    temp = secondHead;
    secondHead = secondHead.next;
    temp.next = firstHead.next;
    firstHead.next = temp;
    firstHead = firstHead.next.next;
  }

  return head;
};

console.log("solve", JSON.stringify(solve()));
