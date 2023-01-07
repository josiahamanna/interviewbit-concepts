/*
  Given a singly linked list A, determine if it's a palindrome. Return 1 or 0, denoting if it's a palindrome or not, respectively.
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
let node6 = new Node(6)
node5.next = node6
let node7 = new Node(7)
node6.next = node7


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
    let slowP = head;
    let fastP = head;

    while(fastP !== null && fastP.next !== null) {
	slowP = slowP.next;
	fastP = fastP.next.next;
    }

    console.log(slowP, fastP)

    return head;   
};

console.log('solve', printLinkedList(solve()));
