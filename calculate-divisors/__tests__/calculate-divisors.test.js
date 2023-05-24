const calculateDivisors = require("../calculate-divisors");

describe("function which adds all the multiples of three and five below a certain number", () => {
  test("return sum of all multiplies of 3 and 5", () => {
    expect(calculateDivisors(1)).toBe(0);
  });

  test("return sum of all multiplies of 3 and 5", () => {
    expect(calculateDivisors(5)).toBe(3);
  });

  test("return sum of all multiplies of 3 and 5", () => {
    expect(calculateDivisors(6)).toBe(8);
  });

  test("return sum of all multiplies of 3 and 5", () => {
    expect(calculateDivisors(10)).toBe(23);
  });

  test("return sum of all multiplies of 3 and 5", () => {
    expect(calculateDivisors(12)).toBe(33);
  });
});
