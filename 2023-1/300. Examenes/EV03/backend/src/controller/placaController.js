import PlacaRepository from "../repository/placa.js";

const findAll = (req, res) => {
    const result = PlacaRepository.findAll();

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'Ha ocurrido un error'})
}

const findOne = (req, res) => {
    const id = req.params.id;
    const result = PlacaRepository.findOne(id);

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'Ha ocurrido un error'})

}

const create = (req, res) => {
    const result = PlacaRepository.create(req.body)

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'Ha ocurrido un error'})
}

const update = (req, res) => {
    const result = PlacaRepository.update(req.body)

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'Ha ocurrido un error'})
}

const PlacaController = { findAll, findOne, create, update }

export default PlacaController