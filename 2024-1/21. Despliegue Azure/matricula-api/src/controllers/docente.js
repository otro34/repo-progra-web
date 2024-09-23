import model from '../models/docente.js'
import RepositoryBase from '../repositories/base.js';

const repository = new RepositoryBase(model);

const findAll = async (req, res) => {

    const docentes = await repository.findAll();

    return sendResult(docentes, res);
}

const create = async (req, res) => {
    const docente = req.body;
    console.log(docente)
    const docenteCreated = await repository.create(docente);

    return sendResult(docenteCreated, res);
}

const findOne = async (req, res) => {

    const id = req.params.id;

    const result = await repository.findOne(id);

    return sendResult(result, res);
}

const remove = async (req, res) => {
    const id = req.params.id;

    const result = await repository.remove(id);

    return sendResult(result, res);
}

const update = async (req, res) => {
    const docente = req.body;

    const result = await repository.update(docente);

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
