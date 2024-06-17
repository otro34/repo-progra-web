import repository from '../repositories/docente.js'

const findAll = (req, res) => {

    const docentes = repository.findAll();

    return sendResult(docentes, res);
}

const create = (req, res) => {
    const docente = req.body;
    console.log(docente)
    const docenteCreated = repository.create(docente);

    return sendResult(docenteCreated, res);
}

const findOne = (req, res) => {

    const id = req.params.id;

    const result = repository.findOne(id);

    return sendResult(result, res);
}

const remove = (req, res) => {
    const id = req.params.id;

    const result = repository.remove(id);

    return sendResult(result, res);
}

const update = (req, res) => {
    const docente = req.body;

    const result = repository.update(docente);

    return sendResult(result, res);
}

const sendResult = (result, res) => {
    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Docente no encontrado.'});
}

const controller = { findAll, create, findOne, remove, update }

export default controller;
