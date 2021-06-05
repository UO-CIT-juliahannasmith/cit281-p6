/*
    CIT 281 Project 6
    Name: Julia Smith
*/

class Shape {
  constructor(sides = []) {
    this.sides = sides;
  }

  perimeter = () => {
    return this.sides.length > 0
      ? this.sides.reduce((perimeter, side) => perimeter + side)
      : "0";
  };
}

// console.log(new Shape([5, 10]).perimeter()); // 15
// console.log(new Shape([1, 2, 3, 4, 5]).perimeter()); // 15
// console.log(new Shape().perimeter()); // 0

class Rectangle extends Shape {
  constructor(length = 0, width = 0) {
    super([length, width, length, width]);
    this.length = length;
    this.width = width;
  }

  area = () => {
    return this.length * this.width;
  };
}

// console.log(new Rectangle(4, 4).perimeter());  // 16
// console.log(new Rectangle(4, 4).area());  // 16
// console.log(new Rectangle(5, 5).perimeter()); // 20
// console.log(new Rectangle(5, 5).area()); // 25
// console.log(new Rectangle().perimeter()); // 0
// console.log(new Rectangle().area()); // 0

class Triangle extends Shape {
  constructor(sideA = 0, sideB = 0, sideC = 0) {
    super([sideA, sideB, sideC]);
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

  area = () => {
    let s = (this.sideA + this.sideB + this.sideC) / 2;
    return Math.sqrt(s*(s - this.sideA)*(s - this.sideB)*(s - this.sideC));
  };
}

// console.log(new Triangle(3, 4, 5).perimeter()); // 12
// console.log(new Triangle(3, 4, 5).area()); // 6
// console.log(new Triangle().perimeter()); // 0
// console.log(new Triangle().area()); // 0

// Array of sides arrays
const data = [ [3, 4], [5, 5], [3, 4, 5], [10], [] ];

for (const sideArray of data){
    let shape = null;

    if (sideArray.length === 0){

        console.log("Shape with 0 sides unsupported");

    }else if(sideArray.length === 1){

        console.log("Shape with 1 side unsupported");

    }else if(sideArray.length === 2){
        let length = sideArray[0];
        let width = sideArray[1];
        let shapeName = ""

        if(length === width){
            shapeName = "Square"
        }else{
            shapeName = "Rectangle"
        }

        shape = new Rectangle(length, width)
        console.log(`${shapeName} with sides ${sideArray.toString()} has a perimeter of ${shape.perimeter()} and area of ${shape.area()}` )


    }else if(sideArray.length === 3){
        let sideA = sideArray[0];
        let sideB = sideArray[1];
        let sideC = sideArray[2];
    
        shape = new Triangle(sideA, sideB, sideC)
        console.log(`Triangle with sides ${sideArray.toString()} has a perimeter of ${shape.perimeter()} and area of ${shape.area()} `)
    }

}