class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    getCarData() {
        return `Marca: ${this.brand} // Modelo: ${this.model} // A&ntilde;o: ${this.year}`;
    }
}

function init() {
    console.log('hola, estoy aqui!');
    const cars = [
        new Car('Peugeot', '206', 2004), 
        new Car('Honda', 'Titan', 2018), 
        new Car('Peugeot', '208', 0), 
        new Car('Yamaha', 'YBR', 2015)];

    console.log(cars);

    document.getElementById('listaDeAutos').innerHTML = cars.map(car => `<li>${car.getCarData()}</li>`).join('');
}

init();