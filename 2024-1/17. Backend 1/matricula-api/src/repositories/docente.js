import model from '../models/docente.js'

let docentes = [...model];

const findAll = () => {
    return docentes;
}

const create = (docente) => {
    docentes.push(docente);

    return docente;
}

const repository = { findAll, create }

export default repository;