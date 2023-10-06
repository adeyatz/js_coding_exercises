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
	console.log (onesAndZeros);
	return onesAndZeros;
};



export const reverseNumber = (n) => {
	if (n === undefined) throw new Error('n is required');
	// Your code here!
};

export const sumArrays = (arrs) => {
	if (arrs === undefined) throw new Error('arrs is required');
	// Your code here!
};

export const arrShift = (arr) => {
	if (arr === undefined) throw new Error('arr is required');
	// Your code here!
};

export const findNeedle = (haystack, searchTerm) => {
	if (haystack === undefined) throw new Error('haystack is required');
	if (searchTerm === undefined) throw new Error('searchTerm is required');
	// Your code here!
};

export const getWordFrequencies = (str) => {
	if (str === undefined) throw new Error('str is required');
	// Your code here!
};
