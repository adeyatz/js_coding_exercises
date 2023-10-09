import {
  isValidDNA,
  sumMultiples,
  getComplementaryDNA,
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
    expect(sumMultiples([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(33);
    expect(sumMultiples([11, 12, 13, 14, 15, 19])).toBe(27);
  });
});

/**
 * Tests for isValidDNA:
 *
 * 1. undefined str,
 * 2. empty str,
 * 3. str contains valid DNA,
 * 4. string contains no DNA,
 * 5. string contains mix of valid and invalid DNA chars
 *
 * other types passed in: number, boolean, array, obj?
 *
 */

describe("isValidDNA", () => {
  test("Error is thrown if nothing is passed in", () => {
    expect(() => {
      isValidDNA();
    }).toThrow("String is required");

    expect(() => {
      isValidDNA(10);
    }).toThrow("String is required");

    expect(() => {
      isValidDNA(false);
    }).toThrow("String is required");
  });

  test("Empty string passed in returns false", () => {
    expect(isValidDNA("")).toBe(false);
  });

  test("Valid DNA letter returns true", () => {
    expect(isValidDNA("C")).toBe(true);

    expect(isValidDNA("G")).toBe(true);

    expect(isValidDNA("T")).toBe(true);

    expect(isValidDNA("A")).toBe(true);
  });

  test("Valid DNA letter sequence returns true", () => {
    expect(isValidDNA("Cc")).toBe(true);

    expect(isValidDNA("ACGT")).toBe(true);

    expect(isValidDNA("TTACGCGATTTTTAAAAGGGCCCCacgt")).toBe(true);
  });

  test("Invalid DNA letter returns false", () => {
    expect(isValidDNA("B")).toBe(false);

    expect(isValidDNA("Z")).toBe(false);

    expect(isValidDNA("1")).toBe(false);

    expect(isValidDNA("DEFH")).toBe(false);
  });

  test("Mix of Valid and Invalid DNA letter returns false", () => {
    expect(isValidDNA("ABCDEFGHIJKLMNOPQRSTUVWXYZ")).toBe(false);

    expect(isValidDNA("ACGTQ")).toBe(false);

    expect(isValidDNA("AB")).toBe(false);

    expect(isValidDNA("T1")).toBe(false);
  });

  describe("getComplementaryDNA", () => {
    test("Expect ACGT to give TGCA, upper and lower case", () => {
      expect(getComplementaryDNA("ACGT")).toBe("TGCA");

      expect(getComplementaryDNA("acgt")).toBe("TGCA");

      expect(getComplementaryDNA("AcTg")).toBe("TGCA");
    });
  });
});
