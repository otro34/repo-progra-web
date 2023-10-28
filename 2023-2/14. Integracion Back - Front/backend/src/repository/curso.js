let arr = [{
    id: 1,
    nombre: "Programación Web",
    creditos: 5,
    carrera : { id: 1} //sistemas
},{
    id: 2,
    nombre: "Arquitectura de Software",
    creditos: 5,
    carrera : { id: 1} //sistemas
},{
    id: 3,
    nombre: "Derecho Ambiental",
    creditos: 5,
    carrera : { id: 2} //derecho
},{
    id: 4,
    nombre: "Derecho Administrativo",
    creditos: 5,
    carrera : { id: 2} //derecho
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