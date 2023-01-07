/*
Given a singly linked list A, determine if it's a palindrome. Return 1 or 0, denoting if it's a palindrome or not, respectively.
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

let node1 = new Node(8);
head = node1;
let node2 = new Node(1);
node1.next = node2;
/* let node3 = new Node(2);
node2.next = node3;
let node4 = new Node(1);
node3.next = node4; */
/* let node5 = new Node(1);
node4.next = node5; */
/* let node6 = new Node(6);
node5.next = node6;
let node7 = new Node(7);
node6.next = node7;
node7.next = node4;
 */
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
  let slow = head;
  let fast = head;
  let halfLength = 0;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    halfLength++;
  }

  console.log(slow, fast);

  let secondHead = slow;

  if (fast) {
    // size is odd
    secondHead = slow.next;
  }

  let curr = secondHead,
    nxt = null,
    prev = null;

  while (curr !== null) {
    nxt = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nxt;
  }

  let firstHead = head;

  console.log(
    "first head",
    JSON.stringify(firstHead),
    "second head",
    JSON.stringify(prev),
    halfLength
  );

  let i = 0;

  while (prev && firstHead && prev.data === firstHead.data) {
    prev = prev.next;
    firstHead = firstHead.next;
    i++;
  }

  if (halfLength === i) return 1;
  else return 0;
};

console.log("solve", solve());
