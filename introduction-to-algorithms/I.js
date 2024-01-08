const fs = require('fs');
const inputLines = fs.readFileSync('input.txt', 'utf-8').split('\n');

function readInt() {
    const n = Number(inputLines[0]);
    return n;
}

function solve() {
    const number = readInt();
    const FOUR_NUMBER = 4;

    const logValue = Math.log(number) / Math.log(FOUR_NUMBER);

    return Number.isInteger(logValue) ? 'True' : 'False';
}

fs.writeFileSync('output.txt', solve());