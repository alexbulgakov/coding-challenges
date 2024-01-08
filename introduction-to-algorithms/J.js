const fs = require("fs");
const inputLines = fs.readFileSync("input.txt", "utf-8").split("\n");

function readInt() {
  const n = Number(inputLines[0]);
  return n;
}

function factorize(n) {
  const factors = [];

  for (let i = 2; i * i <= n; i++) {
    while (n % i === 0) {
      n /= i;
      factors.push(i);
    }
  }

  if (n > 1) {
    factors.push(n);
  }

  return factors;
}

function solve() {
  const number = readInt();
  return factorize(number);
}

fs.writeFileSync("output.txt", solve().join(" "));
