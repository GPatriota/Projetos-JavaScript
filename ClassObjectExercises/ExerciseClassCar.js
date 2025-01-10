// Create a class to represent cars.
// Cars have a brand, a color, and an average fuel consumption per kilometer.
// Create a method that, given the number of kilometers and the fuel price, gives us the value
// spent in reais to make this trip.

class Car {
    
    brand;
    color;
    averageConsumptionPerKm;

    
    constructor(brand, color, averageConsumptionPerKm) {
        this.brand = brand;
        this.color = color;
        this.averageConsumptionPerKm = averageConsumptionPerKm.toFixed(2);
    }

    calculatingCostTravel(distance, preco){
        return distance * preco * this.averageConsumptionPerKm;
    }
}

const corolla = new Car('Toyota', 'Branco', 1/30);
console.log(corolla);
console.log(corolla.calculatingCostTravel(100,6.5));