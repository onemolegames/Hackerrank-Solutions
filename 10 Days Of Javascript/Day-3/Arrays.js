/**
 * Arrays
 */
// Prototype based
Array.prototype.maxSecondNumber = function () {
    const maxValue = Math.max.apply(null, this);
    const filteredMaxValue = this.filter((item) => item !== maxValue);
    return Math.max.apply(null, filteredMaxValue);
};
function getSecondLargestPrototype(nums) {
    // Complete the function
    return nums.maxSecondNumber();
}

// ES5 syntax
function getSecondLargestES5(nums) {
    // Complete the function
    let maxNumber = Math.max.apply(null, nums);
    let secondLargestNumber;
    let removeFirstLargestValue = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== maxNumber) {
            removeFirstLargestValue.push(nums[i]);
        }
    }
    secondLargestNumber = Math.max.apply(null, removeFirstLargestValue);
    return secondLargestNumber;
}

// ES6 syntax
function getSecondLargestES6(nums) {
    // Complete the function
    let maxNumber = Math.max.apply(null, nums);
    let secondLargestNumber;
    let removeFirstLargestValue = nums.filter((item) => item !== maxNumber);
    secondLargestNumber = Math.max.apply(null, removeFirstLargestValue);
    return secondLargestNumber;
}

console.log(getSecondLargestPrototype([2, 3, 6, 6, 5])); //Output should be 5
console.log(getSecondLargestES5([2, 3, 6, 6, 5])); //Output should be 5
console.log(getSecondLargestES6([2, 3, 6, 6, 5])); //Output shoıld be 5