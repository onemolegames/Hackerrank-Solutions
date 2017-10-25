/**
 * Objects
 */
//ES5 syntax
function RectangleES5(a, b) {
    this.length = a;
    this.width = b;
    this.perimeter = 2 * (a + b);
    this.area = a * b;
}

//ES6 syntax
class RectangleES6 {
    constructor(a, b) {
        this.length = a;
        this.width = b;
        this.perimeter = 2 * (a + b);
        this.area = a * b;
    };
}


//The following steps contains just test cases
let rectangleES5 = new RectangleES5(4, 5);
let rectangleES6 = new RectangleES6(4, 5);


console.log(rectangleES5.length);
console.log(rectangleES5.width);
console.log(rectangleES5.perimeter);
console.log(rectangleES5.area);

console.log(rectangleES6.length);
console.log(rectangleES6.width);
console.log(rectangleES6.perimeter);
console.log(rectangleES6.area);

