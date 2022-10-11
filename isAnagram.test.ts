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
    test("will still detect an anagram regardless of case", () => {
      const input1 = "a";
      const input2 = "A";

      const expectedResult = true;

      const result = isAnagram(input1, input2);

      expect(result).toBe(expectedResult);
    });

    test("that the two inputs that don't have the same number of characters can't be an anagram", () => {
      const input1 = "foo";
      const input2 = "foobar";

      const expectedResult = false;

      const result = isAnagram(input1, input2);

      expect(result).toBe(expectedResult);
    });

    test("can detect an anagram for inputs of two characters", () => {
      const input1 = "ab";
      const input2 = "ba";

      const expectedResult = true;

      const result = isAnagram(input1, input2);

      expect(result).toBe(expectedResult);
    });

    test("can detect an anagram for inputs of five characters", () => {
      const input1 = "hello";
      const input2 = "loleh";

      const expectedResult = true;

      const result = isAnagram(input1, input2);

      expect(result).toBe(expectedResult);
    });

    test("can detect that two inputs of five characters are not an anagram of each other", () => {
      const input1 = "hello";
      const input2 = "lolah";

      const expectedResult = false;

      const result = isAnagram(input1, input2);

      expect(result).toBe(expectedResult);
    });

    test("can detect that inputs of two words are an anagram", () => {
      const input1 = "a gentleman";
      const input2 = "elegant man";

      const expectedResult = true;

      const result = isAnagram(input1, input2);

      expect(result).toBe(expectedResult);
    });

    test("can detect that a one word input is an anagram of a two word input", () => {
      const input1 = "dormitory";
      const input2 = "dirty room";

      const expectedResult = true;

      const result = isAnagram(input1, input2);

      expect(result).toBe(expectedResult);
    });
  });
});
