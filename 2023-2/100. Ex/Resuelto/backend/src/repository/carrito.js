let carrito = {
    items: [{
        id: 1,
        titulo: "Thriller",
        año: 1982,
        precio: 10.99,
        pais: "Estados Unidos",
        autor: "Michael Jackson",
        canciones: ["Wanna Be Startin' Somethin'", "Baby Be Mine", "The Girl Is Mine", "Thriller", "Beat It", "Billie Jean", "Human Nature", "P.Y.T. (Pretty Young Thing)", "The Lady in My Life"],
        cover: "https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png"
    },
    {
        id: 2,
        titulo: "The Dark Side of the Moon",
        año: 1973,
        precio: 12.99,
        pais: "Reino Unido",
        autor: "Pink Floyd",
        canciones: ["Speak to Me", "Breathe", "On the Run", "Time", "The Great Gig in the Sky", "Money", "Us and Them", "Any Colour You Like", "Brain Damage", "Eclipse"],
        cover: "https://upload.wikimedia.org/wikipedia/commons/c/c7/The_Dark_Side_of_the_Moon_Cover.svg"
    }],
    subtotal: 0
}

const find = () => {
    return carrito;
}

const addItem = (object) => {
    carrito.items.push(object)
    return object;
}

const remove = (id) => {
    const index = carrito.items.findIndex(item => item.id == id);

    if (index > -1) {
        carrito.items.splice(index,1);
        return true;
    } else  
        return false;

}

const removeAllItems = () => {
    carrito.items = [];
    return true;
}

const repository = { find, remove,addItem, removeAllItems }

export default repository;