import DocentesRepository from "../repository/docenteRepository.js";

const findAll = (req, res) => {
    const result = DocentesRepository.findAll();

    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Ha ocurrido un error'})
}

const DocenteController = { findAll }

export default DocenteController;