import model from '../models/alumno.js'

let alumnos = [...model];

const findAll = () => {
    return alumnos;
}

const create = (payload) => {
    alumnos.push(payload);

    return payload;
}

const findOne = (id) => {
    const result = alumnos.find(x => x.id === parseInt(id));

    return result;
}

const remove = (id) => {
    const index = alumnos.findIndex(item => item.id == id);

    if (index > -1) {
        alumnos.splice(index,1);
        return true;
    } else return false;
}

const update = (payload) => {
    const index = alumnos.findIndex(item => item.id == payload.id);

    if (index > -1) {
        alumnos[index] = payload;
        return payload;
    }
    else
        return null;
}

const repository = { findAll, create, findOne, remove, update }

export default repository;