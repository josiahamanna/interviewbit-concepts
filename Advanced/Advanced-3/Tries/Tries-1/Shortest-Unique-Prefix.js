const solve = (A) => {
    class Dict {
        constructor() {
            this.hashMap = {};
            this.prefixFreq = 0;
        }

        insert = function(str) {
            let curr = this;
            for(let i = 0; i < str.length; i++) {
                if(!curr.hashMap[str[i]]) {
                    curr.hashMap[str[i]] = new Dict();
                }
                curr.prefixFreq++;
                curr = curr.hashMap[str[i]];
            }           
        }

        find = function(str) {
            let curr = this, i;
            for(i = 0; i < str.length; i++) {
                if(curr.prefixFreq == 1) break;
                curr = curr.hashMap[str[i]];
            }
            return str.slice(0, i);
        } 
    }

    let root = new Dict(), result = [];

    for(let i = 0; i < A.length; i++) {
        root.insert(A[i]);
    }

    for(let i = 0; i < A.length; i++) {
        result.push(root.find(A[i]));
    } 

    return result;
};

console.log(solve(["apple", "ball", "cat"]));
