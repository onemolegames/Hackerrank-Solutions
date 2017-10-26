/**
 * Regular Expressions Example 3
 */
function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */


    /*
     * Do not remove the return statement
     */
    var re = /\d+/g;
    return re;
}

//The following steps contains just test cases

let test = "102.23";
let result = test.match(regexVar());

for (const e of result) {
    console.log(e);
}
//Output should be :
// 102
// 23