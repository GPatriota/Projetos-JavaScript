// Create a program that asks for the price of gasoline, the distance between two places in kilometers,
// and how many kilometers the person's car can travel per liter.
// Calculate and display how much should be spent on gasoline for this trip.

const price = 5;
const distance = 100;
const kmPerLitter = 11;

const littersNecessary = distance / kmPerLitter;
const necessaryValue = littersNecessary * price;

console.log(necessaryValue.toFixed(2));