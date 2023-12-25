const fs = require('fs');
const inputLines = fs.readFileSync('input.txt', 'utf-8').split('\n');
let curLine = 0;

function readInt() {
    const n = Number(inputLines[curLine]);
    curLine++;
    return n;
}

function readArray() {
    const arr = inputLines[curLine].trim(' ').split(' ').map(num => Number(num));
    curLine++;
    return arr;
}

function readData() {
    const n = readInt();
    const tempByDay = readArray();

    return [n, tempByDay];
}

function solve() {
    const [n, tempByDay] = readData();
    let randomness = 0;

    if (n === 1) return 1;

    if (tempByDay[0] > tempByDay[1]) randomness++;
    if (tempByDay[n - 1] > tempByDay[n - 2]) randomness++;

    for (let day = 1; day <= n - 2; day++) {
        if (tempByDay[day] > tempByDay[day - 1] && tempByDay[day] > tempByDay[day + 1]) randomness++;
    }

    return randomness;
}

fs.writeFileSync('output.txt', solve().toString());