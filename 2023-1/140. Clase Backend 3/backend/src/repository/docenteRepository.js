let docentes = [
    {id: 1, name: "Juan", lastname: "Perez"},
    {id: 2, name: "Sandra", lastname: "Burga"}
];

const findAll = () => {
    return docentes;
}

const create = (docente) => {
    docentes.push(docente);

    return docente;
}

const findOne = (id) => {
    const result = docentes.find(x => x.id == id);
    return result;
}

const update = (docente) => {
    const index = docentes.findIndex(item => item.id === docente.id);
    
    if (index > -1)
        docentes[index] = docente;

    return docente;
}

const remove = (id) => {
    const index = docentes.findIndex(item => item.id == id)
    
    if (index > -1) {
        docentes.splice(index, 1)
        return true;
    } else
    return false;
        
}


const DocentesRepository = { findAll, create, findOne,update, remove };

export default DocentesRepository; 
