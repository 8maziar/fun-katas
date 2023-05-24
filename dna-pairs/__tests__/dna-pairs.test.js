const dnaPairs = require("../dna-pairs.js");

describe("takes a string of DNA and matches each base with its pair, returning a nested array", () => {
  test("return an empty str given an empty str", () => {
    expect(dnaPairs("")).toBe("");
  });
  test("return [ ['G', 'C'] ] str given 'G'", () => {
    expect(dnaPairs("G")).toEqual([["G", "C"]]);
  });
  test("return [ ['A', 'T'], ['G', 'C'] ] str given 'AG'", () => {
    expect(dnaPairs("AG")).toEqual([
      ["A", "T"],
      ["G", "C"],
    ]);
  });
  test("return [ ['A', 'T'], ['T', 'A'], ['A', 'T'], ['G', 'C'] ] str given 'ATAG'", () => {
    expect(dnaPairs("ATAG")).toEqual([
      ["A", "T"],
      ["T", "A"],
      ["A", "T"],
      ["G", "C"],
    ]);
  });
});
