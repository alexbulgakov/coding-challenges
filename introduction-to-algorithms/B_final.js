const fs = require("fs");
const inputLines = fs.readFileSync("input.txt", "utf-8").split("\n");

function readInt() {
  const n = Number(inputLines[0]);
  return n;
}

function readArray() {
  let arr = [];
  for (let i = 1; i <= 4; i++) {
    arr = arr.concat(
      inputLines[i]
        .trim()
        .split("")
        .reduce((currentArr, currentEl) => {
          if (currentEl !== ".") currentArr.push(Number(currentEl));
          return currentArr;
        }, [])
    );
  }

  return arr;
}

function solve() {
  const k = readInt();
  const arr = readArray();

  if (!arr.length) return 0;

  const maxNum = Math.max(...arr);
  const arrOfSum = new Array(maxNum + 1).fill(0);
  const NUMBER_OF_PLAYERS = 2;
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    arrOfSum[arr[i]] += 1;
  }

  for (let i = 1; i < arrOfSum.length; i++) {
    if (arrOfSum[i] <= k * NUMBER_OF_PLAYERS && arrOfSum[i] !== 0) result++;
  }

  return result;
}

fs.writeFileSync("output.txt", solve().toString());
