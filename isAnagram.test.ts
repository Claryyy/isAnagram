const isAnagram = require("./isAnagram");

describe("Anagram detector tests", () => {
  test("will throw an error if not passed two inputs", () => {
    expect(() => {
      const isItAnAnagram = isAnagram("a");
    }).toThrow("isAnagram requires a second input");
  });

  test("will throw an error if not passed two string inputs", () => {
    expect(() => {
      const isItAnAnagram = isAnagram(1, "b");
    }).toThrow("isAnagram requires an initial input");
  });

  test("that it accepts two string inputs", () => {
    const input1 = "a";
    const input2 = "b";

    expect(() => {
      const isItAnAnagram = isAnagram(input1, input2);
    }).not.toThrow();
  });

  test.skip("that it is not case sensitive", () => {
    const input1 = "a";
    const input2 = "b";
  });
});
