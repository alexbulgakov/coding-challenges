const fs = require('fs');
const inputLines = fs.readFileSync('input.txt', 'utf-8').split('\n');

function readInt() {
    const n = Number(inputLines[0]);
    return n;
}

function solve() {
    let decimalNumber = readInt();

    if (decimalNumber === 0) return '0';

    let binaryNumber = '';
    const binaryArr = [];
    const BINARY_BASE = 2;

    while (decimalNumber > 0) {
        binaryArr.push(decimalNumber % BINARY_BASE);
        decimalNumber = Math.trunc(decimalNumber / BINARY_BASE);
    }

    for (let i = binaryArr.length - 1; i >= 0; i--) {
        binaryNumber += binaryArr[i];
    }

    return binaryNumber;
}

fs.writeFileSync('output.txt', solve());