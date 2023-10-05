export function getSquares(numbers) {
	if (numbers === undefined) throw new Error('nums is required');
	
	return numbers.map (number => number * number);
}

export function camelCaseWords(words) {
	if (words === undefined) throw new Error('words is required');
	
	return words.reduce ((current, word) => current + word.charAt(0).toUpperCase() + word.slice(1));
}

export function getTotalSubjects(people) {
	if (people === undefined) throw new Error('people is required');
	
	return people.reduce ((previousTotal, person) => previousTotal + person.subjects.length,0);
}

export function checkIngredients(menu, ingredientToFind) {
	if (menu === undefined) throw new Error('menu is required');
	if (!ingredientToFind) throw new Error('ingredient is required');
	
	return menu.filter(meal => meal.ingredients
					.filter (mealIngredient => mealIngredient === ingredientToFind).length > 0).length > 0;
}

export function duplicateNumbers(arr1, arr2) {
	if (arr1 === undefined) throw new Error('arr1 is required');
	if (arr2 === undefined) throw new Error('arr2 is required');
	// Your code here!
}
