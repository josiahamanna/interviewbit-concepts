const solve = (A, B) => {
    class contact {
        constructor() {
            this.isEnd = 1;
            this.count= 0;
            this.hashMap = {};
        }

        addContact = function (str) {
            let curr = this;
            for(let i = 0; i < str.length; i++) {
                if(!curr.hashMap[str[i]]) {
            curr.hashMap[str[i]] = new contact();
                }
                curr = curr.hashMap[str[i]]
                curr.count++;
            }
            curr.isEnd = 1;
        }

        findTotalSuggestions = function (str, root) {
            let i, curr = this;
            for(i = 0; i < str.length; i++) {
                if(!curr.hashMap[str[i]]) {
                    return 0
                }
                curr = curr.hashMap[str[i]]
            }
            return curr.count;
        }

    };


    let root = new contact(), result = [];

    for(let i = 0; i < A.length; i++) {
        if(A[i] == 0) root.addContact(B[i], root);
        else result.push(root.findTotalSuggestions(B[i], root));
    }

    return result;
}

console.log(solve([ 0, 0, 1, 1 ], [ "hack", "hacker", "hac", "hak" ]));
