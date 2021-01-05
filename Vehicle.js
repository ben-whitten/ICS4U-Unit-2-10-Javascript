/*
 * The vehicle program implements an application that
 * creates an object.
 *
 * @author  Ben Whitten
 * @version 1.0
 * @since   2021-1-5
 */

///////////////////////////////////////////////////////////////////////////////

// Defining require and process
/*eslint no-undef: "error"*/
/*global module*/
// Defining prompt for getting user input.

class Vehicle {

  

  constructor() {
    if (this.constructor === Vehicle) {
      throw new TypeError('Abstract class "Vehicle" cannot be instantiated'
                          + ' directly.');
    }

    this.speed = 40;
    this.licenseplateNumber;
    this.colour;
    this.numberOfDoors = 4;
    this.maxSpeed = 100;
    this.speedIncreaseDecrease = 10;
  }

  getSpeed() {
    return this.speed;
  }

  accelerate() {
    this.speed += this.speedIncreaseDecrease;
    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed;
    }
  }

  brake() {
    this.speed -= this.speedIncreaseDecrease;
    if (this.speed < 0) {
      this.speed = 0;
    }
  }
}
// Exporting the class
module.exports = Vehicle;

///////////////////////////////////////////////////////////////////////////////
