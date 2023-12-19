/* 
TL: 1s.
ML: 64Mb.
=========
Imagine an online game for a subway ride: the player presses a button, 
and three random numbers appear on the screen. If all three numbers turn 
out to be of the same parity, the player wins.
Write a program that determines whether the player has won based on three numbers.
=========
Example 1:
Input: 1 2 -3
Output: FAIL

Example 2:
Input: 7 11 7
Output: WIN

Example 3:
Input: 6 -2 0
Output: WIN
*/

const fs = require('fs');
const inputLines = fs.readFileSync('input.txt', 'utf-8').split('\n');
const output = solve(inputLines);

fs.writeFileSync('output.txt', output);

function readArray(inputLines) {
    const arr = inputLines[0].trim(' ').split(' ').map(num => Number(num));
    return arr;
}

function isEven(num) {
    return num % 2 === 0;
}

function checkIfPlayerWon(a, b, c) {
    if (isEven(a) && isEven(b) && isEven(c) || !isEven(a) && !isEven(b) && !isEven(c)) {
        return 'WIN';
    } else {
        return 'FAIL';
    }
}

function solve(inputLines) {
    const [a, b, c] = readArray(inputLines);
    return checkIfPlayerWon(a, b, c);
}

