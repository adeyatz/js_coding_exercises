export const findNextNumber = (nums, numberToFind) => {
	if (nums === undefined) throw new Error('nums is required');
	if (numberToFind === undefined) throw new Error('n is required');

	const index = nums.findIndex (number => number === numberToFind);
	
	return index === -1 || index + 1 >= nums.length ? null : nums[index + 1];
};

export const count1sand0s = (str) => {
	if (str === undefined) throw new Error('str is required');

	const onesAndZeros = {1 : 0, 0: 0};

	for (let i = 0; i < str.length; i++)
	{
		const ch = str[i];
		
		if (!(onesAndZeros[ch] === undefined)) {
			onesAndZeros[ch] += 1;
		}
	}
	return onesAndZeros;
};



export const reverseNumber = (number) => {
	if (number === undefined) throw new Error('n is required');
	
	return Number (number.toString().split('').reverse().join(''));
};

export const sumArrays = (arrs) => {
	if (arrs === undefined) throw new Error('arrs is required');
	
	let sum = 0;
	arrs.forEach (arr => arr.forEach(num => sum += num));
	return sum;
};

export const arrShift = (arr) => {
	if (arr === undefined) throw new Error('arr is required');

	// const result = [];

	// for (let i = 0; i < arr.length; i++) {
	// 	if (i  === 0 ) {
	// 		result.push (arr[arr.length -1]);
	// 	} else if (i == arr.length - 1) {
	// 		result.push (arr[0]);
	// 	} else {
	// 		result.push (arr[i]);
	// 	}
	// }

	if (arr.length > 0) {
		const first = arr[0];
		const last = arr[arr.length - 1];
		arr[0] = last;
		arr[arr.length - 1] = first;
	}
	return arr;

	// return arr.map ((value, index) => {
	// 	if (index == 0) {
	// 		return (arr[arr.length - 1]);
	// 	} else if (index == arr.length - 1) {
	// 		return arr[0];
	// 	}
	// 		else {
	// 			return value;
	// 		}
	// 	});
};

export const findNeedle = (haystack, searchTerm) => {
	if (haystack === undefined) throw new Error('haystack is required');
	if (searchTerm === undefined) throw new Error('searchTerm is required');

	for (let key in haystack) {
		if (typeof haystack[key] === "string") {
			if (haystack[key].toLowerCase().includes(searchTerm.toLowerCase())) {
				return true;
			}
		}
	}
	return false;
};

export const getWordFrequencies = (str) => {
	if (str === undefined) throw new Error('str is required');
	
	const cleanStrArr = str.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase().split(' ');

	const wordsCounter = {};
	
	cleanStrArr.forEach (word => (wordsCounter[word] === undefined) ? wordsCounter[word] = 1 : wordsCounter[word] += 1);
	
	return wordsCounter;
};
