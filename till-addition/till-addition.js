// Please do not change the name of this function
function tillAddition(cash) {
  const arrOfNum = Object.entries(cash).map((x) => {
    if (x[0].includes("£")) {
      x.push(100);
      x[0] = x[0].replace(/[\D]/g, "");
      return x;
    } else {
      x[0] = x[0].replace(/[\D]/g, "");
      return x;
    }
  });
  const arrOfSums = [];
  for (let i of arrOfNum) {
    arrOfSums.push(i.reduce((a, b) => a * b, 1));
  }
  return "£" + arrOfSums.reduce((p, c) => p + c) / 100;
}

module.exports = tillAddition;
