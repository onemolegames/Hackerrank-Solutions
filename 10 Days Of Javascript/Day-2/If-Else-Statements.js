/**
 * Conditional Statements
 */
function getGradeES5(score) {
    let grade;
    // Write your code here
    if (0 <= score && score <= 5) {
        grade = "F";
    } else if (5 <= score && score <= 10) {
        grade = "E";
    } else if (10 <= score && score <= 15) {
        grade = "D";
    } else if (15 <= score && score <= 20) {
        grade = "C";
    } else if (20 <= score && score <= 25) {
        grade = "B";
    } else if (25 <= score && score <= 30) {
        grade = "A";
    }
    return grade;
}

function getGradeES6(score) {

    return (0 <= score && score <= 5) ? "F"
        : (5 <= score && score <= 10) ? "E"
        : (10 <= score && score <= 15) ? "D"
        : (15 <= score && score <= 20) ? "C"
        : (20 <= score && score <= 25) ? "B"
        : (25 <= score && score <= 30) ? "A" : ""
}
console.log(getGradeES5(11)); //Output should be "D";
console.log(getGradeES6(11)); //Output should be "D";