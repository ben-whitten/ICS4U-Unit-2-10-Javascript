/*
 * The Bike program is an extension from the Vehicle program.
 *
 * @author  Ben Whitten
 * @version 1.0
 * @since   2021-1-5
 */

///////////////////////////////////////////////////////////////////////////////

// Defining require and process
/*eslint no-undef: "error"*/
/*global require module*/
// Defining prompt for getting user input.

// Importing the vehicle class from another file
const Vehicle = require("./Vehicle.js");

class Bike extends Vehicle {

  constructor() {
    super();
    this.cadence = 1;
    this.numberOfTires = 2;
  }

  getTires() {
    return this.numberOfTires;
  }

  ringBell() {
    return this.cadence;
  }
}
// Exporting the subclass
module.exports = Bike;

///////////////////////////////////////////////////////////////////////////////
