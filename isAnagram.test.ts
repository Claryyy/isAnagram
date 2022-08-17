const isAnagram = require("./isAnagram");

describe("Anagram detector tests", () => {
  describe("error handling tests", () => {
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
  });

  describe("isAnagram functionality tests", () => {
    test("that it is not case sensitive", () => {
      const input1 = "a";
      const input2 = "A";

      const expectedResult = true;

      const result = isAnagram(input1, input2);

      expect(result).toBe(expectedResult);
    });

    test("that the two inputs have the same number of characters", () => {
      const input1 = "foo";
      const input2 = "foobar";

      const expectedResult = false;

      const result = isAnagram(input1, input2);

      expect(result).toBe(expectedResult);
    });
  });
});
