/**
 * Quartiles
 */
function findMedian(count, sortedNumbers) {
    let median = count % 2 === 0 ? ((sortedNumbers[((count / 2) - 1)] + sortedNumbers[(((count / 2) + 1) - 1)]) / 2) : sortedNumbers[(((count + 1) / 2) - 1)];
    return median;
}
function processData(input) {
    let count = input.split("\n")[0];
    let firstBlock;
    let secondBlock;
    count = parseInt(count);
    let numbers = input.split("\n")[1].split(" ").map((item) => parseInt(item));
    let sortedNumbers = numbers.sort((a, b) => a > b);
    let median = findMedian(count, sortedNumbers);
    if (count % 2 === 0) {
        let firstIndex = ((count / 2));
        firstBlock = sortedNumbers.splice(0, firstIndex);
        secondBlock = sortedNumbers;
    } else {
        firstBlock = sortedNumbers.splice(0, sortedNumbers.indexOf(median));
        secondBlock = sortedNumbers;
        secondBlock.splice(0, 1);
    }

    console.log(findMedian(firstBlock.length, firstBlock));
    console.log(median);
    console.log(findMedian(secondBlock.length, secondBlock));
}


processData("10\n3 7 8 5 12 14 21 15 18 14");