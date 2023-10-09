import {
  isValidDNA,
  sumMultiples,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered,
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
    }).toThrow("Valid DNA string is required");

    expect(() => {
      isValidDNA(10);
    }).toThrow("Valid DNA string is required");

    expect(() => {
      isValidDNA(false);
    }).toThrow("Valid DNA string is required");
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
});

describe("getComplementaryDNA", () => {
  test("Error is thrown for invalid input", () => {
    expect(() => {
      getComplementaryDNA();
    }).toThrow("Valid DNA string is required");

    expect(() => {
      getComplementaryDNA("abc");
    }).toThrow("Valid DNA string is required");

    expect(() => {
      getComplementaryDNA(10);
    }).toThrow("Valid DNA string is required");
  });

  test("Valid DNA string ACGT to give TGCA, upper and lower case", () => {
    expect(getComplementaryDNA("ACGT")).toBe("TGCA");

    expect(getComplementaryDNA("acgt")).toBe("TGCA");

    expect(getComplementaryDNA("AcgT")).toBe("TGCA");
  });

  test("Valid DNA character gives valid complementary character", () => {
    expect(getComplementaryDNA("A")).toBe("T");
    expect(getComplementaryDNA("c")).toBe("G");
    expect(getComplementaryDNA("G")).toBe("C");
    expect(getComplementaryDNA("t")).toBe("A");
  });
});

describe("isItPrime", () => {
  test("Error is thrown for invalid input", () => {
    expect(() => {
      isItPrime();
    }).toThrow("Number greater than 1 required");

    expect(() => {
      isItPrime("abc");
    }).toThrow("Number greater than 1 required");

    expect(() => {
      isItPrime(-10);
    }).toThrow("Number greater than 1 required");

    expect(() => {
      isItPrime(1);
    }).toThrow("Number greater than 1 required");
  });

  test("Test fractional number returns false", () => {
    expect(isItPrime(2.5)).toBe(false);
    expect(isItPrime(11.01)).toBe(false);
    expect(isItPrime(7.9)).toBe(false);
    expect(isItPrime(2.99)).toBe(false);
  });

  test("Test returns true for valid prime number", () => {
    expect(isItPrime(2)).toBe(true);
    expect(isItPrime(3)).toBe(true);
    expect(isItPrime(5)).toBe(true);
    expect(isItPrime(7)).toBe(true);
    expect(isItPrime(13037)).toBe(true);
    expect(isItPrime(81349)).toBe(true);
    expect(isItPrime(1000003)).toBe(true);
  });

  test("Test returns false for invalid prime number", () => {
    expect(isItPrime(4)).toBe(false);
    expect(isItPrime(6)).toBe(false);
    expect(isItPrime(9)).toBe(false);
    expect(isItPrime(81350)).toBe(false);
    expect(isItPrime(1000002)).toBe(false);
  });
});

describe("createMatrix", () => {
  test("Error is thrown for invalid input", () => {
    expect(() => {
      createMatrix();
    }).toThrow("Requires number > 0 and fill parameter");

    expect(() => {
      createMatrix("abc");
    }).toThrow("Requires number > 0 and fill parameter");

    expect(() => {
      createMatrix(0, "foof");
    }).toThrow("Requires number > 0 and fill parameter");

    expect(() => {
      createMatrix(3);
    }).toThrow("Requires number > 0 and fill parameter");

    expect(() => {
      createMatrix("foof", 3);
    }).toThrow("Requires number > 0 and fill parameter");
  });

  test("Value of 1 creates array of size 1x1", () => {
    const expectedNumber = [[0]];
    expect(createMatrix(1, 0)).toEqual(expectedNumber);

    const expectedString = [["foo"]];
    expect(createMatrix(1, "foo")).toEqual(expectedString);

    const user = { name: "Test", value: 20.4 };
    const expectedObj = [[user]];
    expect(createMatrix(1, user)).toEqual(expectedObj);
  });

  test("Value of 2 creates array of size 2x2", () => {
    const expectedNumber = [
      [0, 0],
      [0, 0],
    ];
    expect(createMatrix(2, 0)).toEqual(expectedNumber);

    const str = "foo";
    const expectedString = [
      [str, str],
      [str, str],
    ];
    expect(createMatrix(2, str)).toEqual(expectedString);

    const user = { name: "2x2", value: "ABC" };
    const expectedObj = [
      [user, user],
      [user, user],
    ];
    expect(createMatrix(2, user)).toEqual(expectedObj);
  });

  test("Value of 3 creates array of size 3x3", () => {
    const expectedNumber = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    expect(createMatrix(3, 0)).toEqual(expectedNumber);

    const str = "foo";
    const expectedString = [
      [str, str, str],
      [str, str, str],
      [str, str, str],
    ];
    expect(createMatrix(3, str)).toEqual(expectedString);

    const user = { name: "3x3", value: "ABC" };
    const expectedObj = [
      [user, user, user],
      [user, user, user],
      [user, user, user],
    ];
    expect(createMatrix(3, user)).toEqual(expectedObj);
  });

  test("Value of 3, fill as array creates 3 x 3 arrays", () => {
    const arr = ["one", 2, false];

    const expectedArr = [
      [arr, arr, arr],
      [arr, arr, arr],
      [arr, arr, arr],
    ];
    expect(createMatrix(3, arr)).toEqual(expectedArr);
  });
});

/**
 * tests for areWeCovered:
 * 1. Staff must be an array, so validate this with false cases or nulls
 * 2. dayOfWeek must be one of the days of the week, so validate this with negative and positive cases
 * 3. Both elements must be present, - validate  when staff or dayOfWeek are missing
 * 4. Use lower case
 * 5. Build an object with key values for dayOfWeek
 * 6. Loop through staff array and increment each dayOfWeek found
 * 7 Test cases: Not enough staff, Enough staff but not enough days, enough staff and enough days
 *
 */

describe("areWeCovered", () => {
  test("Error is thrown for invalid parameter count", () => {
    expect(() => {
      areWeCovered();
    }).toThrow("Requires staff Array and weekday");

    expect(() => {
      areWeCovered("abc");
    }).toThrow("Requires staff Array and weekday");

    expect(() => {
      areWeCovered(3);
    }).toThrow("Requires staff Array and weekday");
  });

  test("Error is thrown for invalid staff parameter", () => {
    expect(() => {
      areWeCovered(0, "Monday");
    }).toThrow("Requires staff Array and weekday");

    expect(() => {
      areWeCovered("abc", "Monday");
    }).toThrow("Requires staff Array and weekday");

    expect(() => {
      areWeCovered(false, "Monday");
    }).toThrow("Requires staff Array and weekday");
  });

  test("Error is thrown for invalid dayOfWeek parameter", () => {
    const staff = [
      { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
      { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
    ];

    expect(() => {
      areWeCovered(staff, "Mnday");
    }).toThrow("Requires staff Array and weekday");

    expect(() => {
      areWeCovered(staff, 0);
    }).toThrow("Requires staff Array and weekday");

    expect(() => {
      areWeCovered(staff, false);
    }).toThrow("Requires staff Array and weekday");
  });

  // test("Value of 1 creates array of size 1x1", () => {
  //   const expectedNumber = [[0]];
  //   expect(createMatrix(1, 0)).toEqual(expectedNumber);

  //   const expectedString = [["foo"]];
  //   expect(createMatrix(1, "foo")).toEqual(expectedString);

  //   const user = { name: "Test", value: 20.4 };
  //   const expectedObj = [[user]];
  //   expect(createMatrix(1, user)).toEqual(expectedObj);
  // });
});
