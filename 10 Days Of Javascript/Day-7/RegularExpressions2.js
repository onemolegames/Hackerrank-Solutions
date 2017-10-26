/**
 * Regular Expressions Example 2
 */
function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.',
     * followed by one or more letters.
     */

    let re=new RegExp('^[Mr,Ms,Mrs,Dr,Er]+(\.|\.\.\.)[a-zA-Z]$');

    return re;
}

//The following steps contains just test cases

let s="Mr.X";
console.log(!!s.match(regexVar()));