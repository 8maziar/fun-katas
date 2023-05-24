const updateRemoteStudents = require("../till-addition");

describe("implement a function which cashes up a till at the end of the day. The function should always return a string.", () => {
  test("return total amount by adding till cash", () => {
    expect(updateRemoteStudents({ "1p": 1, "2p": 1 })).toBe("£0.03");
  });

  test("return total amount by adding till cash", () => {
    expect(updateRemoteStudents({ "5p": 1, "10p": 1, "20p": 1, "50p": 1, "£1": 1 })).toBe("£1.85");
  });
});
