const solve = (A, B) => {
    class DictNode {
        constructor() {
            this.isEnd = 0;
            this.hashMap = {};
        }
    }

    function constructDict(A, root) {
        for(let i = 0; i < A.length; i++) {
            let ch = A[i];
            if(!root.hashMap[ch]) {
                let t = new DictNode();
                root.hashMap[ch] = t;
                root = root.hashMap[ch];
            } else {
                root = root.hashMap[ch];
            }
        };

        root.isEnd = 1;
    }

    function findWord(B, root) {
        for(let i = 0; i < B.length; i++) {
            let ch = B[i];
            if(!root.hashMap[ch]) return 0;
            else root = root.hashMap[ch];
        }
        return root.isEnd;
    }

    let root = new DictNode();

    for(let i = 0; i < A.length; i++) {
        constructDict(A, root);
    }    

    console.log(root);

    let result = [];

    for(let i = 0; i < B.length; i++) {
        let found = findWord(B[i], root);
        result.push(found);
    }

    return result;
}    

console.log(solve([ "a", "b" ], [ "a", "b" ]));
