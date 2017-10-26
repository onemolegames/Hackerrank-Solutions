/**
 * Arrow Functions
 */
function modifyArray(nums) {
    return nums.map((item) => item % 2 === 0 ? item * 2 : item * 3);
}

//The following steps contains just test cases
let a = [1, 2, 3, 4, 5];
console.log(modifyArray(a).toString().split(",").join(" "));