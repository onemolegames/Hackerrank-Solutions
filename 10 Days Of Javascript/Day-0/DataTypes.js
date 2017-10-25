/**
 * Data Types
 */
function performOperation(secondInteger, secondDecimal, secondString) {
    // Declare a variable named 'firstInteger' and initialize with integer value 4.
    const firstInteger = 4;

    // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    const firstDecimal = 4.0;

    // Declare a variable named 'firstString' and initialize with the string "HackerRank".
    const firstString = 'HackerRank ';

    // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.
    const sumInteger = firstInteger + parseInt(secondInteger);
    console.log(sumInteger);

    // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.
    const sumDecimal = firstDecimal + parseFloat(secondDecimal);
    console.log(sumDecimal);

    // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.
    const sumString = firstString + secondString;
    console.log(sumString);

}
performOperation(12, 4.32, "is the best place to learn and practice coding!");