const solve = (A) => {
	let perfectNumbers = ['1', '2'], queue = [], result = '', ini = '';
	let j = 0;

	for(let i = 0; i < A; i++) {
		result = ini + perfectNumbers[j];	
		queue.push(result);
		j  = (j + 1) % 2;
		
		if(j == 0) {
			ini = queue.shift();	
		}
	};

	return result;
};

console.log(solve(10));
