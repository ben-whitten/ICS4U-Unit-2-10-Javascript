/*
 * The Main program implements an application that
 * creates a vehicle.
 *
 * @author  Ben Whitten
 * @version 1.0
 * @since   2021-1-5
 */

///////////////////////////////////////////////////////////////////////////////

// Defining require and process
/*eslint no-undef: "error"*/
/*global require*/
// Defining prompt for getting user input.

// Importing the bike subclass and truck subclass from another file
const Truck = require("./Truck.js");
const Bike = require("./Bike.js");

// Creating Truck.
let someTruck = new Truck();

// Setting the properties.
console.log("- Created Truck -");
someTruck.licenseplateNumber = "CAJA 723";
console.log("Set license plate to: "
                       + someTruck.licenseplateNumber);
someTruck.colour = "White";
console.log("Set colour to: " + someTruck.colour);
console.log("Current Speed: " + someTruck.getSpeed() + "kph");
console.log("Number of tires: " + someTruck.getTires());
console.log("");
    
// Creating Bike.
let someBike = new Bike();

// Setting the properties.
console.log("- Created Bike -");
someBike.cadence = 1;
console.log("Set cadence to: " + someBike.cadence);
someBike.colour = "Red";
console.log("Set colour to: " + someBike.colour);
console.log("Current Speed: " + someBike.getSpeed() + "kph");
console.log("Number of tires: " + someBike.getTires());
console.log("");

someTruck.accelerate();
console.log("Truck accelerated to: " + someTruck.getSpeed()
                   + "kph");
someTruck.accelerate();
console.log("Truck accelerated to: " + someTruck.getSpeed()
                   + "kph");
someTruck.brake();
console.log("Truck slowed to: " + someTruck.getSpeed()
                   + "kph");
someTruck.provideAir();
console.log("Truck added air and accelerated to: "
                   + someTruck.getSpeed() + "kph");
console.log("");

someBike.accelerate();
console.log("Bike accelerated to: " + someBike.getSpeed()
                   + "kph");
someBike.accelerate();
console.log("Bike accelerated to: " + someBike.getSpeed()
                   + "kph");
someBike.brake();
console.log("Bike slowed to: " + someBike.getSpeed()
                   + "kph");
console.log("Bike rang the bell at a candence of: "
                   + someBike.ringBell());

///////////////////////////////////////////////////////////////////////////
