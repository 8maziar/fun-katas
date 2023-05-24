// Please do not change the name of this function
function dnaPairs(dna) {
  if (!dna) return "";
  return [...dna].map((char) => {
    return char === "G" ? ["G", "C"] : char === "A" ? ["A", "T"] : char === "T" ? ["T", "A"] : ["C", "G"];
  });
}

module.exports = dnaPairs;
