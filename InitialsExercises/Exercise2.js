// Create a program to calculate the cost of a trip.

// You will have 5 variables. They are:

// 1 - Price of ethanol;
// 2 - Price of gasoline;
// 3 - The type of fuel in your car;
// 4 - Average fuel consumption of the car per KM;
// 5 - Distance in KM of the trip;

// Print to the console the total cost of the trip.

// = is for assignment
// == is for equality, but ignores the variable type
// === is for STRICT equality, without ignoring the variable type


const priceEthanol = 3;
const priceGasoline = 5;
const carFuel = "Etanol";
const distance = 99;
const kmPerLitter = 11;

const littersNecessary = distance / kmPerLitter;

let necessaryValue = 0;
if(carFuel === "Etanol"){
    necessaryValue = littersNecessary * priceEthanol;
} else{
    necessaryValue = littersNecessary * priceGasoline;
}


console.log(necessaryValue.toFixed(2));