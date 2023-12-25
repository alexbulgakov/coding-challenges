const fs = require('fs');
const inputLines = fs.readFileSync('input.txt', 'utf-8').split('\n');
let curLine = 0;

function readInt() {
    const n = Number(inputLines[curLine]);
    curLine++;
    return n;
}

function readArray() {
    const arr = inputLines[curLine].trim().split(' ');
    curLine++;
    return arr;
}

function readData() {
    const L = readInt();
    const text = readArray();

    return [L, text];
}

function solve() {
    const [L, text] = readData();

    text.sort((a, b) => b.length - a.length);

    return `${text[0]}\n${text[0].length}`;
}

fs.writeFileSync('output.txt', solve());