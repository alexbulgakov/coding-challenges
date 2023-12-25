const fs = require('fs');
const inputLines = fs.readFileSync('input.txt', 'utf-8').split('\n');

function solve() {
    const phrase = inputLines[0];
    const cleanPhrase = phrase.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

    for (let i = 0; i < cleanPhrase.length; i++) {
        if (cleanPhrase[i] !== cleanPhrase[cleanPhrase.length - 1 - i]) return 'False';
    }

    return 'True';
}

fs.writeFileSync('output.txt', solve());