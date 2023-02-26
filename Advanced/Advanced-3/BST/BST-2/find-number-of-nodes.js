class TreeNode {
    constructor(data) {
        this.data = data; 
        this.left = null;
        this.right = null;
    }
}

function constructTree(A){
    if (!A.length) return null;

    let root = new TreeNode(parseInt(A[0]));
    let queue = [root];
    let i = 1;
    while(queue.length) {
        let temp = queue.shift();

        if(A[i] != -1) {
            temp.left = new TreeNode(parseInt(A[i]));
            queue.push(temp.left);
        }
        i++;
        if(A[i] != -1) {
            temp.right = new TreeNode(parseInt(A[i]));
            queue.push(temp.right);
        }
        i++;
    }

    return root;
}

let yes = false;

const solve = (root, total) => {
    if(!root) return 0;
    total = total + root.data;

    let lSum = solve(root.left, total);
    let rSum = solve(root.right, total);

    console.log(root ? root.data : null, total, lSum, rSum); 

    if(total + lSum == rSum || total + rSum == lSum) yes = true;

    return root.data + lSum + rSum;
}

let inputString = '375 112 267 -1 -1 632 -1 -1 157 596 633 -1 -1 -1 -1';
// let inputString = '10 5 15 -1 -1 -1 -1';
let data = (inputString).split(' ');
let root = constructTree(data);

console.log(solve(root, 0), yes);
