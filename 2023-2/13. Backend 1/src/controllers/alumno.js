import alumnoRepository from "../repository/alumno.js";

const findAll = (req,res) => {

    const alumnos = alumnoRepository.findAll();

    return res.status(200).json(alumnos);

}

const create = (req,res) => {
    const result = alumnoRepository.create(req.body);

    return res.status(200).json(result);
}

const findOne = (req,res) => {
    const id = req.params.id;
    const result = alumnoRepository.findOne(id);

    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'No encontrado.'})

}

const update = (req,res) => {
    const result = alumnoRepository.update(req.body);

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'No encontrado.'})
}

const remove = (req,res) => {
    const id = req.params.id;
    
    const result = alumnoRepository.remove(id);

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'No encontrado.'})
}

const alumnoController = { findAll, create, findOne, update, remove }

export default alumnoController;