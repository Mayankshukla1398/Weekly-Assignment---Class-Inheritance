// import using require
import React, { Component } from 'react';
import Shape from './shape'
class Circle extends Shape {
  constructor() {
    super();
  }
  calculateArea() {
    console.log("Area of cirle");
  }
};
 export default Circle;
