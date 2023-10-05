// 👉 	Each function below has some test cases in `exercise001.test.js`
// 		You can run these tests with `npm test`.
//  	All the test cases must pass for each function.

// Note: Be sure to read the corresponding .md file for each exercise, in the docs folder. 📘 👍

export function capitalize(word) {
	if (word === undefined) throw new Error('word is required');
	if (word.length == 0)
		return "";
	if (word.length == 1)
		return word.toUpperCase();

	return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
}

export function generateInitials(firstName, lastName) {
	if (firstName === undefined) throw new Error('firstName is required');
	if (lastName === undefined) throw new Error('lastName is required');

	const firstInitial = (firstName.length == 0) ? "" : firstName.charAt(0).toUpperCase();
	const lastInitial = (lastName.length == 0) ? "" : lastName.charAt(0).toUpperCase();

	return firstInitial + "." + lastInitial;
}

export function addVAT(originalPrice, vatRate) {
	if (originalPrice === undefined)
		throw new Error('originalPrice is requied');
	if (vatRate === undefined) throw new Error('vatRate is required');

	return originalPrice + (Math.round((originalPrice * (vatRate / 100)) * 100) / 100);
}

export function getSalePrice(originalPrice, reduction) {
	if (originalPrice === undefined)
		throw new Error('originalPrice is required');
	if (reduction === undefined)
		throw new Error('reduction is required');
	if (reduction > 100)
		throw new Error('reduction cannot be greater that 100%');

	return Math.round((originalPrice * ((100 - reduction) / 100)) * 100) / 100;
}

export function getMiddleCharacter(str) {
	if (str === undefined) throw new Error('str is required');
	if (str.length === 0)
		throw new Error('str is empty');

	const myString = str.trim();
	const startPos = Math.floor((myString.length + 1) / 2) - 1;
	const replyStringLength = (myString.length % 2 === 0) ? 2 : 1;

	return myString.substring(startPos, startPos + replyStringLength);

}

export function reverseWord(word) {
	if (word === undefined) throw new Error('word is required');

	if (word.length === 0) throw new Error('word length is zero');

	const splitString = word.split("");

	const reverseArray = splitString.reverse();

	return reverseArray.join("");
}

export function reverseAllWords(words) {
	if (words === undefined) throw new Error('words is required');
	if (words.length === 0) throw new Error('words are not there');

	return words.map(word => reverseWord(word));
}

export function countLinuxUsers(users) {
	if (users === undefined) throw new Error('users is required');

	return users.filter(user => user.type === "Linux").length;
}

export function getMeanScore(scores) {
	if (scores === undefined) throw new Error('scores is required');

	if (scores.length === 0) throw new Error('scores is empty');

	const sum = scores.reduce((total, score) => { return total + score }, 0);
	return Math.round((sum / scores.length) * 100) / 100;
}

export function simpleFizzBuzz(inputValue) {
	if (inputValue === undefined) throw new Error('n is required');

	if (inputValue % 3 === 0 && inputValue % 5 === 0)
		return "fizzbuzz";
	else if (inputValue % 3 === 0)
		return 'fizz';
	else if (inputValue % 5 === 0)
		return 'buzz';
	else
		return inputValue;

}
