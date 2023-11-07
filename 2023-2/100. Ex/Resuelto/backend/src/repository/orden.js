let arr = [{
    id: 1,
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
    }]
}]

const findAll = () => {
    return arr;
}

const create = (object) => {
    arr.push(object)
    return object;
}

const findOne = (id) => {
    const result = arr.find(x => x.id == id);
    return result;
}

const update = (object) => {
    const index = arr
        .findIndex(item => item.id === object.id);

    if (index > -1) {
        arr[index] = object;
        return object;
    } else {
        return null;
    }
    
}

const remove = (id) => {
    const index = arr.findIndex(item => item.id == id);

    if (index > -1) {
        arr.splice(index,1);
        return true;
    } else  
        return false;

}

const repository = { findAll, create, findOne, update,remove }

export default repository;