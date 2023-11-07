import carritoRepository from '../repository/carrito.js'

const find = () => {

    let carrito = carritoRepository.find();

    let suma = 0;

    carrito.items.forEach(element => {
        suma += element.precio;
    });

    carrito.subtotal = suma;

    return carrito;
}

export default { find }