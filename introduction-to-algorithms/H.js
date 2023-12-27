const fs = require('fs');
const inputLines = fs.readFileSync('input.txt', 'utf-8').split('\n');
let curLine = 0;

function readString() {
    const str = inputLines[curLine].trim();
    curLine++;
    return str;
}

function add(arr) {
    switch (arr.join(',')) {
        case '0,0,0':
            return [0, 0];
        case '0,1,0':
        case '1,0,0':
            return [1, 0];
        case '1,1,0':
            return [0, 1];
        case '0,0,1':
            return [1, 0];
        case '0,1,1':
        case '1,0,1':
            return [0, 1];
        case '1,1,1':
            return [1, 1];
    }
}

function solve() {
    let firstNumber = readString();
    let secondNumber = readString();
    let sum = '';
    let carryNumber = 0;

    if (firstNumber.length > secondNumber.length) {
        let diff = firstNumber.length - secondNumber.length;
        for (let i = 0; i < diff; i++) {
            secondNumber = '0' + secondNumber;
        }
    }
    if (firstNumber.length < secondNumber.length) {
        let diff = secondNumber.length - firstNumber.length;
        for (let i = 0; i < diff; i++) {
            firstNumber = '0' + firstNumber;
        }
    }

    for (let i = firstNumber.length - 1; i >= 0; i--) {
        const result = add([firstNumber[i], secondNumber[i], carryNumber]);
        sum = result[0] + sum;
        carryNumber = result[1];
    }
    if (carryNumber !== 0) sum = '1' + sum;

    return sum;
}

fs.writeFileSync('output.txt', solve());
