/**
 * JS Classes -> uses obj.prototypes
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes
 *
 * class
 * extends
 * constructor
 * super
 * get
 * set
 * static
 */

import { sum, multiply } from "./calculate.js";

class Vehicle {
  constructor(_wheels) {
    this.numWheels = _wheels;
  }

  get wheels() {
    //return obj wheels
    return this.numWheels;
  }
  set wheels(_wheels) {
    //set obj wheels
    this.numWheels = _wheels;
  }
  static accelerate() {
    console.log("go faster");
  }
  static decelerate() {
    console.log("go slower");
  }
}

//inherit from vehicle
class Car extends Vehicle {
  constructor(_wheels, _make, _model, _year) {
    super(_wheels);
    this.make = _make;
    this.model = _model;
    this.year = _year;
  }

  info() {
    console.log(
      "The",
      this.make,
      this.model,
      "was made in",
      this.year,
      "and has",
      this.wheels,
      "wheels "
    );
  }
}

export { Vehicle, Car };

/** Example usage */
// let car = new Vehicle(4);
// let car2 = new Vehicle(8);
// let car3 = new Vehicle(6);
// car.wheels = 7;
// Vehicle.accelerate();
// console.log(car.wheels)

// let ferrari = new Car(4, "Ferrari", "Testarossa", 1985);
// ferrari.info();
// Car.accelerate();
// console.log(multiply(2, 3));
