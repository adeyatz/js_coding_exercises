export function getFillings(sandwich) {
	if (sandwich === undefined) throw new Error('ingredients is required');

	return sandwich.fillings;
}

export function isFromManchester(person) {
	if (person === undefined) throw new Error('person is required');

	return person.city === 'Manchester';
}

export function getBusNumbers(people) {
	if (people === undefined) throw new Error('people is required');

	return Math.ceil(people / 40);
}

export function countSheep(animals) {
	if (animals === undefined) throw new Error('arr is required');

	return animals.filter(animal => animal === 'sheep').length;

}

export function hasMPostCode(person) {
	if (person === undefined) throw new Error('person is required');

	return /^[M][0-9]/.test(person.address.postCode);
}
