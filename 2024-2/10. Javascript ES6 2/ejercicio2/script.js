init = () => {

    const car = { brand: 'Peugeot', model: '206', year: 2004, price: 200000 };
    const car2 = { brand: 'Honda', model: 'Titan', year: 2018, price: 60000 };

    car.country = 'Argentina';
    car2.country = 'Japan';

    const cars = [car, car2]

    document.getElementById('listaDeAutos').innerHTML = cars.map(car => `<li>${car.brand} - ${car.model} - ${car.country}</li>`).join('');
}

init();