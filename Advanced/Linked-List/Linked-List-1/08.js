/*
Given a singly linked list A and an integer B, reverse the nodes of the list Bat a time and return the modified linked list.
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
    console.log('printing', head)
    let temp = head;

    while(temp !== null) {
	console.log(temp.data);
	temp = temp.next;
    }

    return;
};

const solve = (B) => {
    const reverse = (head, k) => {

	console.log('entering function', head)

	if(head === null) return null;
	
	let nxt = null, prev = null, curr = head;

	while(curr !== null && k > 0) {
	    nxt = curr.next;
	    curr.next = prev;
	    prev = curr;
	    curr = nxt;
	    k--;
	}

	console.log("leaving", head)

	head.next = reverse(curr, B);
	return prev;
    }
    return reverse(head, B);
};

console.log('solve', printLinkedList(solve(2)));

// console.log(printLinkedList())
