/**
 * Throw
 */
function UserException(message) {
    this.message = message;
}
function isPositive(a) {
    if (a > 0) {
        return "YES";
    } else if (a === 0) {
        throw new UserException("Zero Error");
    } else {
        throw new UserException("Negative Error");
    }
}

/*This following block only test cases.It does not need to add*/

let testCase0="1,2,3";
let testCase1="2,0,6";
let testCase2="-1,20";
let testCase0Array=testCase0.split(",");
let testCase1Array=testCase1.split(",");
let testCase2Array=testCase2.split(",");
for (let i = 0; i < testCase0Array.length; i++) {
    const a = +testCase0Array[i];

    try {
        console.log(isPositive(a));
    } catch (e) {
        console.log(e.message);
    }
}
/*
Output should be
YES
YES
YES
*/for (let i = 0; i < testCase1Array.length; i++) {
    const a = +testCase1Array[i];

    try {
        console.log(isPositive(a));
    } catch (e) {
        console.log(e.message);
    }
}
/*
Output should be
YES
Zero Error
YES
*/for (let i = 0; i < testCase2Array.length; i++) {
    const a = +testCase2Array[i];

    try {
        console.log(isPositive(a));
    } catch (e) {
        console.log(e.message);
    }
}
/*
Output should be
Negative Error
YES
*/