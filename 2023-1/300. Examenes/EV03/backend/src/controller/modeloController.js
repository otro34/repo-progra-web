import ModeloRepository from "../repository/modelo.js";

const findAll = (req, res) => {
    const result = ModeloRepository.findAll();

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'Ha ocurrido un error'})
}

const ModeloController = { findAll }

export default ModeloController