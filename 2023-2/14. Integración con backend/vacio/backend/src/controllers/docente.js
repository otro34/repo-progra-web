import docenteRepository from "../repository/docente.js";

const findAll = (req,res) => {

    const docentes = docenteRepository.findAll();

    return res.status(200).json(docentes);

}

const create = (req,res) => {
    const result = docenteRepository.create(req.body);

    return res.status(200).json(result);
}

const findOne = (req,res) => {
    const id = req.params.id;
    const result = docenteRepository.findOne(id);

    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'No encontrado.'})

}

const update = (req,res) => {
    const result = docenteRepository.update(req.body);

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'No encotrado.'})
}

const remove = (req,res) => {
    const id = req.params.id;
    
    const result = docenteRepository.remove(id);

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'No encotrado.'})
}

const docenteController = { findAll, create, findOne, update, remove }

export default docenteController;