// RUN SPECIFIC PUZZLE - node index.js 1-1 (day - part)
const fs = require('fs');
const day1 = require('./1/solution.js');
const day2 = require('./2/solution.js');
const day3 = require('./3/solution.js');

// File mapping
const runner = {
    1: {
        1: day1.part1,
        2: day1.part2
    },
    2: {
        1: day2.part1,
        2: day2.part2
    },
    3: {
        1: day3.part1,
        2: day3.part2
    }
};

const [day, part] = process.argv[2].split('-');

console.log(`Running day ${day} part ${part}`);
fs.readFile(`${day}/input.txt`, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
    }

    // Run
    const result = runner[day][part](data);
    console.log('Result: ', result);
});