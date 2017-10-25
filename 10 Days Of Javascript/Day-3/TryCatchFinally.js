/**
 * Try , Catch and Finally
 */
function reverseString(s) {
    try {
        let inputArray = s.split("");
        inputArray.reverse();
        var reversedArray = inputArray.join("");
        console.log(reversedArray);
    } catch (exception) {
        console.log(exception.message);
        console.log(s);
    }

}
reverseString("1234");
reverseString(Number("1234"));
