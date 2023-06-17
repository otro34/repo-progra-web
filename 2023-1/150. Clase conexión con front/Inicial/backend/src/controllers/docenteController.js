import DocentesRepository from "../repository/docenteRepository.js";

const findAll = (req, res) => {
    const result = DocentesRepository.findAll();

    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Ha ocurrido un error'})
}

const findOne = (req, res) => {
    const id = req.params.id;
    const result = DocentesRepository.findOne(id);

    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Ha ocurrido un error'})
}

const create = (req, res) => {
    
    const result = DocentesRepository.create(req.body);

    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Ha ocurrido un error'})
}

const update = (req,res) => {
    DocentesRepository.update(req.body)

    return res.status(200).json(req.body);
}

const remove = (req, res) => {

    const id = req.params.id;

    const result = DocentesRepository.remove(id)

    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Ha ocurrido un error'})
}

const DocenteController = { findAll, create, findOne, update, remove }

export default DocenteController;