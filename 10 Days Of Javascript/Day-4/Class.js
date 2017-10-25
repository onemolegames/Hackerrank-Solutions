/**
 * Class
 */
//ES5 syntax
function Polygon(arg) {
    this.arg = arg;
    this.perimeter = function () {
        let perimeter = 0;
        for (let i = 0; i < this.arg.length; i++) {
            perimeter += this.arg[i];
        }
        return perimeter;
    }
}

//ES6 syntax
class PolygonES6 {
    constructor(args) {
        this.args = args
    }

    perimeter() {
        let perimeter = 0;
        for (let i = 0; i < this.args.length; i++) {
            perimeter += this.args[i];
        }
        return perimeter;
    };
}

//The following steps contains just test cases
const rectangle = new Polygon([10, 20, 10, 20]);
const rectangleES6 = new PolygonES6([10, 20, 10, 20]);
console.log(rectangle.perimeter());
console.log(rectangleES6.perimeter());