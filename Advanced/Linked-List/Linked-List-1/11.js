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
let node3 = new Node(2)
node2.next = node3
let node4 = new Node(4)
node3.next = node4
let node5 = new Node(4)
node4.next = node5

const printLinkedList = (head) => {
    let temp = head;

    if(head) {
	while(temp !== null) {
	    console.log(temp.data);
	    temp = temp.next;
	}	
    } else {
	console.log("List empty")
    }
    return;
};

const solve = () => {
    return head;
};

console.log('solve', printLinkedList(solve(1, 2)));
