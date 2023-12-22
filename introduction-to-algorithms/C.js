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
    const m = readInt();
    const matrix = [];

    for (let i = 0; i < n; i++) {
        const row = readArray();
        matrix.push(row);
    }

    const x = readInt();
    const y = readInt();

    return [n, m, matrix, x, y];
}

function isDiagonal(x, y, isSquareMatrix) {
    return x === y && isSquareMatrix;
}

function solve() {
    const [n, m, matrix, x, y] = readData();
    const neighbors = [];
    const isSquareMatrix = n === m;

    if (y + 1 < m && !isDiagonal(x, y + 1, isSquareMatrix)) neighbors.push(matrix[x][y + 1]);
    if (y - 1 >= 0 && !isDiagonal(x, y - 1, isSquareMatrix)) neighbors.push(matrix[x][y - 1]);
    if (x + 1 < n && !isDiagonal(x + 1, y, isSquareMatrix)) neighbors.push(matrix[x + 1][y]);
    if (x - 1 >= 0 && !isDiagonal(x - 1, y, isSquareMatrix)) neighbors.push(matrix[x - 1][y]);

    neighbors.sort((a, b) => a - b);

    return neighbors.join(' ');
}

fs.writeFileSync('output.txt', solve());