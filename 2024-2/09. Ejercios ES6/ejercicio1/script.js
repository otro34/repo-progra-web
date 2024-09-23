class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    printCar() {
        return `Car: ${this.brand} ${this.model} ${this.year}`;
    }
}

const car = new Car('Chevrolet', 'Camaro', '2015');

console.log(car.printCar())