/**
 * Loop
 */

const vowel = ["a", "e", "i", "o", "u"];

function vowelsAndConsonants(s) {
    let vowelArray = [];
    let consonantsArray = [];

    for (let i = 0; i < s.length; i++) {
        if (vowel.indexOf(s[i]) > -1) {
            vowelArray.push(s[i]);
        }
        else {
            consonantsArray.push(s[i]);
        }
    }
    for (let i = 0; i < vowelArray.length; i++) {
        console.log(vowelArray[i]);
    }
    for (let i = 0; i < consonantsArray.length; i++) {
        console.log(consonantsArray[i]);
    }
}
vowelsAndConsonants("javascriptloops");