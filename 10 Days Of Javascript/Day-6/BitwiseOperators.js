/**
 * Bitwise Operators
 */
function getMaxLessThanK(n, k) {
    let S = [];
    for (let a = 1; a < k; a++) {
        for (let b = a + 1; b <= n; b++) {
            if ((a < b) && ((a & b) < k)) {
                S.push(a & b);
            }
        }
    }
    return Math.max.apply(undefined, S);
}


//The following steps contains just test cases

console.log(getMaxLessThanK(519, 177));
