/* 
TL: 1s.
ML: 64Mb.
=========
The goal of the task: testing input and output in JS.
Write a function that calculates y = ax^2 + bx + c. 
Write a program that, given the coefficients a, b, c,
and the number x, outputs the value of the function at point x.
=========
Example 1:
Input: -8 -5 -2 7
Output: -183

Example 2:
Input: 8 2 9 -10
Output: 40
*/

const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

const _inputLines = [];
let _curLine = 0;

_reader.on('line', line => {
    _inputLines.push(line)
});

process.stdin.on('end', solve);

function evaluateFunction(x, a, b, c) {
    return a * x * x + b * x + c;
}

function solve() {
    const [a, x, b, c] = readArray();
    process.stdout.write(`${evaluateFunction(x, a, b, c)}`);
}

function readArray() {
    const arr = _inputLines[_curLine].trim(' ').split(' ').map(num => Number(num));
    _curLine++;
    return arr;
}