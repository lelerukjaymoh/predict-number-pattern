
// Sample data, this data will be read from a csv file
const data: number[][] = [
    [1, 2, 0],
    [0, 2, 1],
    [2, 1, 0],
    [2, 0, 1],
    [1, 0, 2],
    [0, 1, 2],
    [1, 2, 0],
    [0, 2, 1],
    [2, 1, 0],
    [2, 0, 1],
    [1, 0, 2],
    [0, 1, 2],
    [1, 2, 0],
    [0, 2, 1],
    [2, 1, 0],
    [2, 0, 1],
    [1, 0, 2],
    [0, 1, 2],
    [1, 2, 0],
    [0, 2, 1]
];

const outcomes: number[][] = [];

// Generate all possible outcomes
for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length; j++) {
        for (let k = 0; k < data.length; k++) {
            outcomes.push([data[i][0], data[j][1], data[k][2]]);
        }
    }
}

console.log(outcomes.length);