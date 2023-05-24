const updateRemoteStudents = require("../update-remote-students");

describe("implement a function that updates missing location info for students attending Northcoders.", () => {
  test("return array of objects with missing info", () => {
    expect(updateRemoteStudents([{ name: "Euler", age: 27 }])).toEqual([{ name: "Euler", age: 27, location: "remote" }]);
  });

  test("return array of objects with missing info", () => {
    expect(
      updateRemoteStudents([
        { name: "Hypatia", age: 31, location: "leeds" },
        { name: "Ramanujan", age: 22 },
        { name: "Tao", age: 47, location: "manchester" },
      ])
    ).toEqual([
      { name: "Hypatia", age: 31, location: "leeds" },
      { name: "Ramanujan", age: 22, location: "remote" },
      { name: "Tao", age: 47, location: "manchester" },
    ]);
  });
});
