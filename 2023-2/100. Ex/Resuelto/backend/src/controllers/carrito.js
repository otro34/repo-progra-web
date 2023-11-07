import repository from "../repository/carrito.js";
import service from '../service/carrito.js'

const findAll = (req,res) => {

    const results = service.find();

    return res.status(200).json(results);

}

const addItem = (req,res) => {
    const result = repository.addItem(req.body);

    return res.status(200).json(result);
}

const remove = (req,res) => {
    const id = req.params.id;
    
    const result = repository.remove(id);

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'No encontrado.'})
}

const removeAll = (req,res) => {
    const result = repository.removeAllItems();

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'No encontrado.'})
}



const controller = { findAll, remove, addItem, removeAll }

export default controller;