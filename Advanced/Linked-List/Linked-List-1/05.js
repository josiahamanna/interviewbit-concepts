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
let node5 = new Node(6)
node4.next = node5

/*
  Insert element in right position
*/  

const solve = (A) => {
    let newNode = new Node(A);
    let temp = head;

    if(A < head.data) {
	newNode.next = head;
	head = newNode
	return head
    }

    while(temp.next.data < A && temp.next != null) {
	temp = temp.next
    }
    newNode.next = temp.next
    temp.next = newNode

    return head;
};

console.log(solve(5).next.next.next)
