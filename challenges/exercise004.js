export function findSmallNums(nums) {
	if (!nums) throw new Error('nums is required');

	const numsLessThan1 = [];

	nums.forEach(nums => {
		if (nums < 1)
			numsLessThan1.push(nums);
	});
	return numsLessThan1;

}

export function findNamesBeginningWith(names, char) {
	if (!names) throw new Error('names is required');
	if (!char) throw new Error('char is required');

	const namesBeginningWith = [];

	names.forEach(name => {
		if (name.startsWith(char))
			namesBeginningWith.push(name);
	});
	return namesBeginningWith;

}

export function findVerbs(words) {
	if (!words) throw new Error('words is required');

	const verbs = [];

	words.forEach(word => {
		if (/to /.test(word))
			verbs.push(word);
	});
	return verbs;
}

export function getIntegers(nums) {
	if (!nums) throw new Error('nums is required');

	const integers = [];

	nums.forEach(number => {
		if (Math.floor(number) === number)
			integers.push(number);
	});
	return integers;


}

export function getCities(users) {
	if (!users) throw new Error('users is required');

	const cities = [];

	users.forEach(user => {
		cities.push(user.data.city.displayName);
	});
	return cities;
}

export function getSquareRoots(nums) {
	if (!nums) throw new Error('nums is required');

	const squareRoots = [];

	nums.forEach(number => {
		squareRoots.push(Math.round(Math.sqrt(number) * 100) / 100);
	});
	return squareRoots;
}

export function findSentencesContaining(sentences, str) {
	if (!sentences) throw new Error('sentences is required');
	if (!str) throw new Error('str is required');

	const sentencesContaining = [];

	sentences.forEach(sentence => {
		if (sentence.toLowerCase().includes(str.toLowerCase()))
			sentencesContaining.push(sentence);
	});
	return sentencesContaining;

}

export function getLongestSides(triangles) {
	if (!triangles) throw new Error('triangles is required');

	const longestSides = [];

	triangles.forEach(triangle => {
		longestSides.push(Math.max(...triangle));
	});
	return longestSides;
}
