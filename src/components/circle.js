// import using require

// declare class
import { Shape } from "./shape";

// declare class
class Circle extends Shape {
  calculateArea() {
    console.log("cal in circle");
  }
}

// export class using module.exports
module.exports = Circle;


// export class using module.exports
