export function findSmallNums(nums) {
	if (!nums) throw new Error('nums is required');
	
	const numsLessThan1  = [];

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] < 1)
			numsLessThan1.push (nums[i]);
	}
	return numsLessThan1;

}

export function findNamesBeginningWith(names, char) {
	if (!names) throw new Error('names is required');
	if (!char) throw new Error('char is required');

	const namesBeginningWith  = [];

	for (let i = 0; i < names.length; i++) {
		if (names[i].startsWith (char))
			namesBeginningWith.push (names[i]);
	}
	return namesBeginningWith;

}

export function findVerbs(words) {
	if (!words) throw new Error('words is required');
	
	const verbs  = [];

	for (let i = 0; i < words.length; i++) {
		if (/to /.test(words[i]))
			verbs.push (words[i]);
	}
	return verbs;
}

export function getIntegers(nums) {
	if (!nums) throw new Error('nums is required');
	
	const integers = [];

	for (let i = 0; i < nums.length; i++) {
		if (Math.floor(nums[i]) === nums[i])
			integers.push (nums[i]);
	}
	return integers;

	
}

export function getCities(users) {
	if (!users) throw new Error('users is required');
	
	const cities = [];

	for (let i = 0; i < users.length; i++) {
		cities.push (users[i].data.city.displayName);
	}
	return cities;
}

export function getSquareRoots(nums) {
	if (!nums) throw new Error('nums is required');
	
	const squareRoots = [];

	for (let i = 0; i < nums.length; i++) {

		squareRoots.push (Math.round(Math.sqrt (nums[i]) * 100 )/100);
	}
	return squareRoots;
}

export function findSentencesContaining(sentences, str) {
	if (!sentences) throw new Error('sentences is required');
	if (!str) throw new Error('str is required');

	const sentencesContaining = [];

	for (let i = 0; i < sentences.length; i++) {
		if (sentences[i].toLowerCase().includes(str.toLowerCase()))
			sentencesContaining.push (sentences[i]);
	}
	return sentencesContaining;

}

export function getLongestSides(triangles) {
	if (!triangles) throw new Error('triangles is required');
	
	const longestSides = [];

	for (let i = 0; i < triangles.length; i++) {
		longestSides.push (Math.max(...triangles[i]));
	}
	return longestSides;
}
