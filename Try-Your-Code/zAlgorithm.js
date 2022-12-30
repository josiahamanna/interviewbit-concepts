const twoSum = (nums, target) => {
	let hashMap = {}, result = [ ];
	
	for(let i = 0; i < nums.length; i++) {
		console.log('hash map', hashMap)
		console.log('i', i, 'nums[i]', nums[i])
		console.log('target - nums[i]', target - nums[i], 'hashMap[target - nums[i]]', hashMap[target - nums[i]]);
		if(hashMap[nums[i]] != undefined && hashMap[target - nums[i]] != undefined) {
			console.log('hey I am in first if');
			if(hashMap[target - nums[i]] != undefined) {
				if(i != hashMap[target - nums[i]]) {
					result.push(i);
					result.push(hashMap[target - nums[i]]);
					break;
				}
			}
		} else {
			hashMap[nums[i]] = i;
		}
		console.log('***')
	}

	return result;
}

console.log(twoSum([1,1,1,1,1,4,1,1,1,1,1,7,1,1,1,1,1], 11))
