// //Key-value based Object
// const rectangle = {
//     width: 2,
//     height: 4,
//     color: "Red"
// }

// function area() {
//     return rectangle.width * rectangle.height;
// }

// const rect1 = area()
// console.log(rect1);



//Class based Object

class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color; //this is gives access to current variable inside fun or class
    }

    area() {
        const area = this.width * this.height
        return area;
    }

    paint() {
        const colors = this.color;
        console.log(`Color of rectangle is ${this.color}`);
        return;
    }
}

const rect = new Rectangle(2, 3, "red") //instance/object of Rectangle class
//new : initializing the new instance of a class
const area = rect.area();
console.log(area);

const colors = rect.paint();
console.log(colors);
