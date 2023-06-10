let docentes = [
    {id: 1, name: "Juan", lastname: "Perez"},
    {id: 2, name: "Sandra", lastname: "Burga"}
];

const findAll = () => {
    return docentes;
}

const create = (docente) => {
    docentes.push(docente);
}

const findOne = (id) => {
    return docentes.find(x => x.id === id);
}

const update = (docente) => {

}

const remove = (id) => {

}


const DocentesRepository = { findAll, create, findOne,update, remove };

export default DocentesRepository;
