const sum = require("../sum.js");

describe("Testing with Jest", () => {
  test("addition", () => {
    const sumtest = 2 + 3;
    const expectedResult = 5;
    expect(sumtest).toEqual(expectedResult);
  });

  test.each([
    [1, 1, 2],
    [-1, 1, 0],
    [3, 2, 5],
    [4, 4, 8],
  ])("Does %i + %i equals %i", (a, b, expectedResult) => {
    expect(sum(a, b)).toBe(expectedResult);
  });
});
