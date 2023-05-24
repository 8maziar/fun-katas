const getTweetData = require("../get-tweet-data");

describe(" returns an object containing data from a given tweet.", () => {
  test("return nums of chars in a str", () => {
    expect(getTweetData("My awesome tweet")).toEqual({ tags: [], mentions: [], tagCount: 0, mentionCount: 0, length: 16 });
  });

  test("return nums of chars in a str and nums of mentions", () => {
    expect(getTweetData("My awesome tweet to @northcoders")).toEqual({ tags: [], mentions: ["@northcoders"], tagCount: 0, mentionCount: 1, length: 32 });
  });

  test("return nums of chars in a str and nums of tags", () => {
    expect(getTweetData("My awesome tweet about #coding")).toEqual({ tags: ["#coding"], mentions: [], tagCount: 1, mentionCount: 0, length: 30 });
  });

  test("return nums of chars in a str and nums of tags and mentions", () => {
    expect(getTweetData("My awesome tweet about #coding to @northcoders")).toEqual({ tags: ["#coding"], mentions: ["@northcoders"], tagCount: 1, mentionCount: 1, length: 46 });
  });

  test("return nums of chars in a str and nums of tags and mentions just one if there are two or more", () => {
    expect(getTweetData("I am #coding with @northcoders I love #coding and @northcoders")).toEqual({ tags: ["#coding"], mentions: ["@northcoders"], tagCount: 1, mentionCount: 1, length: 62 });
  });
});
