/**
 * Interquartile Range
 */

function findMedian(count, sortedNumbers) {
    let median = count % 2 === 0 ? ((sortedNumbers[((count / 2) - 1)] + sortedNumbers[(((count / 2) + 1) - 1)]) / 2) : sortedNumbers[(((count + 1) / 2) - 1)];
    return median;
}
function processData(input) {
    let count = input.split("\n")[0];
    let firstBlock;
    let secondBlock;
    let QInputs1 = input.split("\n")[1].split(" ").map((item) => parseInt(item));
    let QInputs3 = input.split("\n")[2].split(" ").map((item) => parseInt(item));
    let S = [];
    for (let i = 0; i < count; i++) {
        for (let j = 0; j < QInputs3[i]; j++) {
            S.push(QInputs1[i])
        }
    }
    let sortedNumbers = S.sort((a, b) => a - b);
    if (sortedNumbers.length % 2 === 0) {
        let firstIndex = ((sortedNumbers.length / 2));
        firstBlock = sortedNumbers.splice(0, firstIndex);
        secondBlock = sortedNumbers;
    } else {
        let index = (sortedNumbers.length + 1) / 2;
        firstBlock = sortedNumbers.splice(0, index - 1);
        secondBlock = sortedNumbers;
        secondBlock.splice(0, 1);
    }
    let Q1 = findMedian(firstBlock.length, firstBlock);
    let Q3 = findMedian(secondBlock.length, secondBlock);
    console.log((Q3 - Q1).toFixed(1));
}
processData("10\n10 40 30 50 20 10 40 30 50 20\n1 2 3 4 5 6 7 8 9 10");