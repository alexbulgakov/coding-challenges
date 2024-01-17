const fs = require("fs");
const inputLines = fs.readFileSync("input.txt", "utf-8").split("\n");

function solve() {
  const firstStr = inputLines[0].trim().split("").sort();
  const secondStr = inputLines[1].trim().split("").sort();

  for (let i = 0; i < firstStr.length; i++) {
    if (firstStr[i] !== secondStr[i]) {
      if (secondStr[i + 1] === firstStr[i]) return secondStr[i];
      return firstStr[i];
    }
    if (firstStr[i] === firstStr[i + 1] && secondStr[i] !== secondStr[i + 1])
      return firstStr[i];
    if (secondStr[i] === secondStr[i + 1] && firstStr[i] !== firstStr[i + 1])
      secondStr[i];
  }

  return secondStr[secondStr.length - 1];
}

fs.writeFileSync("output.txt", solve());
