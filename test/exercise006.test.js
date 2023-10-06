import {
    sumMultiples
} from "../challenges/exercise006";

console.log(sumMultiples);

describe("sumMultiples", () => {
    test("Error is thrown if nothing is passed in", () => {
        expect(() => {
            sumMultiples();
        }).toThrow("arr is required");

        expect(() => {
            sumMultiples("foo");
        }).toThrow("Array is required");

        expect(() => {
            sumMultiples(4);
        }).toThrow("Array is required");

    });

    test("it returns the sum of numbers that are a multiple of 3 or 5", () => {
        expect(sumMultiples([3])).toBe(3);
        expect(sumMultiples([5])).toBe(5);
        expect(sumMultiples([6])).toBe(6);
        expect(sumMultiples([10, 3])).toBe(13);
    });

    test("it returns 0 if there are no numbers that are a multiple of 3 or 5", () => {
        expect(sumMultiples([1])).toBe(0);
        expect(sumMultiples([1, 1, 2, 4, 7, 8, 11, 13])).toBe(0);
    });

    test("it returns 0 if the array is empty", () => {
        expect(sumMultiples([])).toBe(0);
    });


    test("it returns the sum of numbers that are a multiple of 3 or 5 with other numbers", () => {
        expect(sumMultiples([1, 2, 3, 4, 5, 6 ,7 ,8, 9, 10])).toBe(33);
        expect(sumMultiples([11, 12, 13, 14, 15, 19])).toBe(27);
    });




});
