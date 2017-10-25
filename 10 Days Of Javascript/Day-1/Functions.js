/**
 * Functions
 */

// ES5 syntax
function factorialES5(n) {
    if (n < 1) {
        return 1;
    }
    return n * factorialES5(n - 1);
}
console.log(factorialES5(4)); // Output should be 24

//ES6 syntax (Arrow function is used)
const factorialES6 = (n) => (n - 1) > 0 ? n * factorialES6(n - 1) : 1;

console.log(factorialES6(4)); // Output should be 24