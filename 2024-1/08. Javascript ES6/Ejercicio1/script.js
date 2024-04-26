class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    printCar() {
        return `Car: ${this.brand} ${this.model} ${this.year} ${this.otroValor}`;
    }
}

const car1 = new Car('Ford', 'Fiesta', 2019);

console.log(car1.printCar()); // Car: Ford Fiesta 2019