const fs = require("fs");
const inputLines = fs.readFileSync("input.txt", "utf-8").split("\n");
let curLine = 0;

function readInt() {
  const n = Number(inputLines[curLine]);
  curLine++;
  return n;
}

function readStr() {
  const str = inputLines[curLine].trim();
  curLine++;
  return str;
}

function add(arr) {
  const a = Number(arr[0]);
  const b = Number(arr[1]);
  const carry = Number(arr[2]);

  if (carry) {
    if (a + b + carry < 10) {
      return [(a + b + carry).toString(), 0];
    } else {
      sumAsStr = (a + b + carry).toString();
      return [sumAsStr[1], 1];
    }
  } else {
    if (a + b < 10) {
      return [(a + b).toString(), 0];
    } else {
      sumAsStr = (a + b).toString();
      return [sumAsStr[1], 1];
    }
  }
}

function solve() {
  const xLength = readInt();
  let x = readStr().replace(/ /g, "");
  let k = readStr();
  let sum = "";
  let carryNumber = 0;

  if (xLength > k.length) {
    let diff = xLength - k.length;
    for (let i = 0; i < diff; i++) {
      k = "0" + k;
    }
  }
  if (xLength < k.length) {
    let diff = k.length - xLength;
    for (let i = 0; i < diff; i++) {
      x = "0" + x;
    }
  }

  for (let i = k.length - 1; i >= 0; i--) {
    const result = add([x[i], k[i], carryNumber]);
    sum = result[0] + sum;
    carryNumber = result[1];
  }
  if (carryNumber !== 0) sum = "1" + sum;

  return sum;
}

fs.writeFileSync("output.txt", solve().split("").join(" "));
