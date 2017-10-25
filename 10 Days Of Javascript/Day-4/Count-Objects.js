/**
 * Count Objects
 */
//ES5 syntax
function getCountES5(objects) {
    let newArray=[];
    for (let item in objects) {
        if (objects[item].x === objects[item].y) {
            newArray.push(item);
        }
    }
    return newArray.length;
};

//ES6 syntax
const getCountES6 = (objects) => {
    let filteredData = objects.filter((item) => item.x === item.y);
    return filteredData.length;
};

//The following steps contains just test cases
let input = [
    {x: 1, y: 1},
    {x: 2, y: 3},
    {x: 3, y: 3},
    {x: 3, y: 4},
    {x: 4, y: 5}];
console.log(getCountES5(input));
console.log(getCountES6(input));
