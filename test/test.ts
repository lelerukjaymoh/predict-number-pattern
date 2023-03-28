import { createInterface } from "readline";
import { createWriteStream } from "fs"

const combinations: number[][] = [
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

let rd = createInterface({
    input: process.stdin,
    output: process.stdout,
});


const possibleCombinations: number[][] = [];

function checkCombination(input: number[]): void {
    let found = false;
    for (let i = 0; i < possibleCombinations.length; i++) {
        if (JSON.stringify(input) === JSON.stringify(possibleCombinations[i])) {
            console.log(`\nMatch found at line ${i + 1}`);
            found = true;
            break;
        }
    }

    if (!found) {
        console.log("\nNo match found.");
    }
}

const arrayExists = (target: number[]) => {
    for (let i = 0; i < possibleCombinations.length; i++) {
        const array = possibleCombinations[i];
        if (array.length === target.length && array.every((value, index) => value === target[index])) {
            return true;
        }
    }
    return false;
}

const main = () => {

    var file = createWriteStream('array.txt');
    file.on('error', function (error) { console.log("Error reading file ", error) });

    for (let i = 0; i < combinations.length; i++) {
        for (let j = 0; j < combinations.length; j++) {
            for (let k = 0; k < combinations.length; k++) {
                const a = combinations[i][0]
                const b = combinations[j][1]
                const c = combinations[k][2]

                if (!arrayExists([a, b, c])) {
                    possibleCombinations.push([
                        a, b, c
                    ]);

                    file.write(`${a}, ${b}, ${c} \n`);
                }
            }
        }
    }

    file.end();

    console.log(`\nNumber of possible unique combinations: ${possibleCombinations.length}`);

    const ask = () => rd.question("\n\nEnter a series of number to check if it already exists : ", (input) => {
        const arrayInput = input.split(",").map((item) => Number(item))
        checkCombination(arrayInput);

        ask()
    })

    ask()
}

main()