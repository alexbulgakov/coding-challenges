const fs = require('fs');
const inputLines = fs.readFileSync('input.txt', 'utf-8').split('\n');

function evaluateFunction(x, a, b, c) {
    return a * x * x + b * x + c;
}

function solve(inputLines) {
    const [a, x, b, c] = readArray(inputLines);

    return `${evaluateFunction(x, a, b, c)}`;
}

function readArray(inputLines) {
    const arr = inputLines[0].trim(' ').split(' ').map(num => Number(num));
    
    return arr;
}

const output = solve(inputLines);
fs.writeFileSync('output.txt', output);
