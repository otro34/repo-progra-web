import model from '../models/docente.js'

let docentes = [...model];

const findAll = () => {
    return docentes;
}

const create = (docente) => {
    docentes.push(docente);

    return docente;
}

const findOne = (id) => {
    const result = docentes.find(x => x.id === parseInt(id));

    return result;
}

const remove = (id) => {
    const index = docentes.findIndex(item => item.id == id);

    if (index > -1) {
        docentes.splice(index,1);
        return true;
    } else return false;
}

const update = (docente) => {
    const index = docentes.findIndex(item => item.id == docente.id);

    if (index > -1) {
        docentes[index] = docente;
        return docente;
    }
    else
        return null;
}

const repository = { findAll, create, findOne, remove, update }

export default repository;