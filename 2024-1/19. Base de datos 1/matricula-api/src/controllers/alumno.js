import repository from '../repositories/alumno.js'

const findAll = async (req, res) => {

    const result = await repository.findAll();

    return sendResult(result, res);
}

const create = (req, res) => {
    const payload = req.body;

    const result = repository.create(payload);

    return sendResult(result, res);
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
        return res.status(500).json({ message: 'No encontrado.'});
}

const controller = { findAll, create, findOne, remove, update }

export default controller;
