import MarcaRepository from "../repository/marca.js";

const findAll = (req, res) => {
    const result = MarcaRepository.findAll();

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'Ha ocurrido un error'})
}

const MarcaController = { findAll }

export default MarcaController