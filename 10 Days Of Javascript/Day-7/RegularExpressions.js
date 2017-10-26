/**
 * Regular Expressions
 */
function regexVar() {
    /*
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     * Regex explanation here :

     '^' asserts position at start of the string
     '([a,e,i,o,u])' 1st Capturing Group
     '.*' matches any character (except newline) - between zero and unlimited times, as many times as possible, giving back as needed (greedy)
     '\1' matches the same text as most recently matched by the 1st capturing group
     '$' asserts position at the end of the string

     */
    let regex = /^([a,e,i,o,u])(.*)\1$/;
    return regex;
}

//The following steps contains just test cases

console.log(regexVar().test("bcd"));
console.log(regexVar().test("abcda"));
console.log(regexVar().test("ebcde"));