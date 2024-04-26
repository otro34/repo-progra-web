const car = { 
    marca: 'Chevrolet', 
    modelo: 'Camaro', 
    anio: '2015',
    show: function(){
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.anio}`);
    },
    hello: () => {
        console.log('Hello World from the car!');
    }
}

console.log(car.marca);
console.log(car.modelo);
console.log(car.anio);
car.show();

const hello = () => {
    console.log('Hello World!');
}

hello();
car.hello();
