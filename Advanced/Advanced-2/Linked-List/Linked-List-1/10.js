/*
Given a linked list A, remove the B-th node from the end of the list and return its head.

For example, Given linked list: 1->2->3->4->5, and B = 2. After removing the second node from the end, the linked list becomes 1->2->3->5.

NOTE: If B is greater than the size of the list, remove the first node of the list.

NOTE: Try doing it using constant additional space.
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

const solve = (B) => {
    let size = 0, temp = head;

    while(temp != null) {
	size++;
	temp = temp.next
    }

    let target = size - B;
    temp = head;

    while(target > 1) {
	temp = temp.next;
	target--;
    }

    temp.next = temp.next.next;

    return head;
};

console.log('solve', printLinkedList(solve(1)));
