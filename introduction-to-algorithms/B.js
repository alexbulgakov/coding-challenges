const fs = require("fs");
const inputLines = fs.readFileSync("input.txt", "utf-8").split("\n");
const output = solve(inputLines);

fs.writeFileSync("output.txt", output);

function readArray(inputLines) {
  const arr = inputLines[0]
    .trim()
    .split(" ")
    .map((num) => Number(num));
  return arr;
}

function isEven(num) {
  return num % 2 === 0;
}

function checkIfPlayerWon(a, b, c) {
  if (
    (isEven(a) && isEven(b) && isEven(c)) ||
    (!isEven(a) && !isEven(b) && !isEven(c))
  ) {
    return "WIN";
  } else {
    return "FAIL";
  }
}

function solve(inputLines) {
  const [a, b, c] = readArray(inputLines);
  return checkIfPlayerWon(a, b, c);
}
