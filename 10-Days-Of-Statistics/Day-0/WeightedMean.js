/**
 * Weighted Mean
 */
function processData(input) {
    let count = input.split("\n")[0];
    let array1 = input.split("\n")[1].split(" ").map((item) => parseInt(item));
    let array2 = input.split("\n")[2].split(" ").map((item) => parseInt(item));
    let results = [];
    for (var i = 0; i < count; i++) {
        results.push(array1[i] * array2[i]);
    }
    let array2Sum = array2.reduce((acc, curr) => acc + curr);
    let resultsSum = results.reduce((acc, curr) => acc + curr);
    let weightedMean = (resultsSum / array2Sum).toFixed(1);


    console.log(weightedMean);
}
processData("5\n10 40 30 50 20\n1 2 3 4 5");
