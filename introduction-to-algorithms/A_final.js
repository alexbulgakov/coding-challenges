const fs = require('fs');
const inputLines = fs.readFileSync('input.txt', 'utf-8').split('\n');

function readInt() {
    const n = Number(inputLines[0]);
    return n;
}

function readArray() {
    const arr = inputLines[1].trim().split(' ').map(num => Number(num));
    return arr;
}

function solve() {
    const n = readInt();
    const arr = readArray();
    const result = new Array(n);

    let lastEmpty = -Infinity;
    for (let i = 0; i < n; i++) {
        if (arr[i] === 0) {
            lastEmpty = i;
        }
        result[i] = i - lastEmpty;
    }

    lastEmpty = Infinity;
    for (let i = n - 1; i >= 0; i--) {
        if (arr[i] === 0) {
            lastEmpty = i;
        }
        result[i] = Math.min(result[i], lastEmpty - i);
    }

    return result;
}

fs.writeFileSync('output.txt', solve().join(' '));
