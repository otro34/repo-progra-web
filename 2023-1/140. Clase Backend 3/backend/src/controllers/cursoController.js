import DocentesRepository from "../repository/docenteRepository.js";
import CursosRepository from "../repository/cursoRepository.js";

const findAll = (req, res) => {
    const result = CursosRepository.findAll();

    return sendResponse(result, res);
}

const findOne = (req, res) => {
    const id = req.params.id;
    const result = CursosRepository.findOne(id);

    return sendResponse(result, res);
}

const create = (req, res) => {

    const idDocente = req.body.idDocente;

    const docente = DocentesRepository.findOne(idDocente) ?? null;

    let result = null;

    if (docente)
        result = CursosRepository.create(req.body);

    return sendResponse(result, res);
}

const update = (req,res) => {
    const result = CursosRepository.update(req.body)

    return sendResponse(result, res);
}

const remove = (req, res) => {

    const id = req.params.id;

    const result = CursosRepository.remove(id)

    return sendResponse(result, res);
}

const sendResponse = (result, res) => {
    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Ha ocurrido un error'})
} 

const CursoController = { findAll, create, findOne, update, remove }

export default CursoController;