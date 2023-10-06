import {
    sumMultiples
} from "../challenges/exercise006";

console.log (sumMultiples);

 describe("sumMultiples", () => {
    test("it returns the sum of numbers that are a multiple of 3 or 5", () => {
      expect(sumMultiples ([3])).toBe(3);
      expect(sumMultiples ([5])).toBe(5);
      expect(sumMultiples ([6])).toBe(6);
      expect(sumMultiples ([8])).toBe(0);
      expect(sumMultiples ([10, 1 , 2 , 3])).toBe(13);

      expect(sumMultiples ([1, 2, 4, 7, 8])).toBe(0);
    });
  
//     test("if the number is not found in the array, returns null", () => {
//       expect(findNextNumber([5, 3, 7, 8, 1, 10], 55)).toBe(null);
//     });
  
//     test("if the number is found more than once, returns the number after the first instance", () => {
//       expect(findNextNumber([5, 3, 7, 8, 1, 3, 10], 3)).toBe(7);
//     });
  
//     test("if the number is found in the final index position of the array, returns null", () => {
//       expect(findNextNumber([5, 3, 7, 8, 1, 3, 10], 10)).toBe(null);
//     });
});
  