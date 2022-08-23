function isAnagram(input1, input2) {
  if (typeof input1 === "undefined" || typeof input1 !== "string") {
    throw new Error("isAnagram requires an initial input");
  }

  if (typeof input2 === "undefined" || typeof input2 !== "string") {
    throw new Error("isAnagram requires a second input");
  }

  if (input1.length !== input2.length) {
    return false;
  }

  input1 = input1.toLowerCase();
  input2 = input2.toLowerCase();

  const transformInput1ToArray = input1
    .split("")
    .sort()
    .join("")
    .replace(/[^a-z]/g, "");
  const transformInput2ToArray = input2
    .split("")
    .sort()
    .join("")
    .replace(/[^a-z]/g, "");

  if (transformInput1ToArray === transformInput2ToArray) {
    return true;
  } else {
    return false;
  }
}

module.exports = isAnagram;
