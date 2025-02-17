/* 
⚠️
⚠️ See exercise006.md - this time you have to write your own tests! ⚠️
⚠️
*/

/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
export const sumMultiples = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  if (!Array.isArray(arr)) throw new Error("Array is required");

  return arr.reduce(
    (runningTotal, number) =>
      number % 5 === 0 || number % 3 === 0
        ? runningTotal + number
        : runningTotal,
    0
  );
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
const DNA_ERR_MSG = "Valid DNA string is required";

export const isValidDNA = (str) => {
  if (str === undefined || !(typeof str === "string"))
    throw new Error(DNA_ERR_MSG);

  if (str.length == 0) return false;

  const dnaMatches = str.match(/[acgt]/gi);
  if (dnaMatches != null) return dnaMatches.length === str.length;
  else return false;
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
export const getComplementaryDNA = (str) => {
  if (str === undefined) throw new Error(DNA_ERR_MSG);
  if (!isValidDNA(str)) throw new Error(DNA_ERR_MSG);

  const dnaChars = str.toUpperCase().split("");

  const dnaSwitcher = { A: "T", T: "A", C: "G", G: "C" };

  return dnaChars.map((ch) => dnaSwitcher[ch]).join("");
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
const PRIME_ERR_MSG = "Number greater than 1 required";

export const isItPrime = (number) => {
  if (number === undefined) throw new Error(PRIME_ERR_MSG);
  if (!(typeof number === "number")) throw new Error(PRIME_ERR_MSG);
  if (number <= 1) throw new Error(PRIME_ERR_MSG);
  if (Math.floor(number) != number) return false;

  if (number === 2) return true;

  const numberSquareRoot = Math.sqrt(number);

  for (let i = 2; i <= numberSquareRoot; i++) {
    if (number % i === 0) return false;
  }
  return true;
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
const MATRIX_ERR_MSG = "Requires number > 0 and fill parameter";

export const createMatrix = (number, filler) => {
  if (number === undefined || filler === undefined)
    throw new Error(MATRIX_ERR_MSG);
  if (!(typeof number === "number") || number <= 0)
    throw new Error(MATRIX_ERR_MSG);

  const innerArr = [];
  for (let inner = 0; inner < number; inner++) {
    innerArr.push(filler);
  }
  const matrix = [];
  for (let outer = 0; outer < number; outer++) {
    matrix.push(innerArr);
  }
  return matrix;

  //   for (let outer = 0; outer < number; outer++) {
  //     const innerArr = [];
  //     for (let inner = 0; inner < number; inner++) {
  //       innerArr.push(filler);
  //     }
  //     result.push(innerArr);
  //   }
  //   return result;
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
const STAFF_ERR_MSG = "Requires staff Array and weekday";
const MIN_STAFF_REQUIRED = 3;

export const areWeCovered = (staff, dayOfWeek) => {
  if (staff === undefined || dayOfWeek === undefined)
    throw new Error(STAFF_ERR_MSG);
  if (!Array.isArray(staff) || !(typeof dayOfWeek == "string"))
    throw new Error(STAFF_ERR_MSG);

  const dayToCheck = dayOfWeek.toLowerCase();

  const weeklyRota = {
    sunday: 0,
    monday: 0,
    tuesday: 0,
    wednesday: 0,
    thursday: 0,
    friday: 0,
    saturday: 0,
  };

  const updateRota = (staffRotaDays) =>
    Object.keys(weeklyRota).forEach(
      (day) => (weeklyRota[day] += staffRotaDays.indexOf(day) != -1 ? 1 : 0)
    );

  const daysToLowerCase = (days) => days.map((day) => day.toLowerCase());

  if (weeklyRota[dayToCheck] == null) throw new Error(STAFF_ERR_MSG);

  if (staff.length < MIN_STAFF_REQUIRED) return false;

  staff.forEach((staffMember) => updateRota(daysToLowerCase(staffMember.rota)));

  return weeklyRota[dayToCheck] >= MIN_STAFF_REQUIRED;
};
