import repository from '../repositories/docente.js'

const findAll = (req, res) => {

    const docentes = repository.findAll();

    return res.status(200).json(docentes);
}

const create = (req, res) => {
    const docente = req.body;
    console.log(docente)
    const docenteCreated = repository.create(docente);

    return res.status(201).json(docenteCreated);
}



const controller = { findAll, create }

export default controller;
