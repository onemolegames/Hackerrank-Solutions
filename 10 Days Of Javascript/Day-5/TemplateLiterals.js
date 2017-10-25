/**
 * Template Literals
 */

function sides(literals,...expressions) {
    let result;
    let s=Math.sqrt(Math.pow(expressions[1],2) -16*expressions[0])
    let s1=(expressions[1] + s) /4;
    let s2=(expressions[1] - s) /4;
    result=[s1,s2];
    return result.sort();
}

//The following steps contains just test cases

let s1 = 10;
let s2 = 14;
const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;
console.log((s1 === x) ? s1 : -1);
console.log((s2 === y) ? s2 : -1);