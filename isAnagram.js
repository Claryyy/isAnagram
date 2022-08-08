function isAnagram(input1, input2) {
  if (typeof input1 === "undefined" || typeof input1 !== "string") {
    throw new Error("isAnagram requires an initial input");
  }

  if (typeof input2 === "undefined" || typeof input2 !== "string") {
    throw new Error("isAnagram requires a second input");
  }
}

module.exports = isAnagram;
