/*
  Reverse first k elements
*/
/*
  Create Linked List
*/

let head = null

class Node {
    constructor(x) {
	this.data = x;
	this.next = null
    }
}

let node1 = new Node(1)
head = node1;
let node2 = new Node(2)
node1.next = node2
let node3 = new Node(3)
node2.next = node3
let node4 = new Node(4)
node3.next = node4
let node5 = new Node(5)
node4.next = node5

const printLinkedList = (head) => {
    let temp = head;

    while(temp !== null) {
	console.log(temp.data);
	temp = temp.next;
    }

    return;
};

const solve = (k) => {

    let nxt = null, curr = head, prev = null;

    while(curr !== null && k > 0) {
	nxt = curr.next;
	curr.next = prev;
	prev = curr;
	curr = nxt;
	k--;
    }

    head.next = curr

    return prev;
    
};

console.log('solve', printLinkedList(solve(2)));
