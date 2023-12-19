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
