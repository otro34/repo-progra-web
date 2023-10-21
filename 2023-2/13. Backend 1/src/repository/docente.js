let docentes = [{
    id: 1,
    nombre: "Juan",
    apellido: "Perez",
    curso: "Programación Web"
},{
    id: 2,
    nombre: "Sandra",
    apellido: "Sanchez",
    curso: "Derecho Penal"
}]

const findAll = () => {
    return docentes;
}

const create = (docente) => {
    docentes.push(docente)
    return docente;
}

const findOne = (id) => {
    const result = docentes.find(x => x.id == id);
    return result;
}

const update = (docente) => {
    const index = docentes
        .findIndex(item => item.id === docente.id);

    if (index > -1) {
        docentes[index] = docente;
        return docente;
    } else {
        return null;
    }
    
}

const remove = (id) => {
    const index = docentes.findIndex(item => item.id == id);

    if (index > -1) {
        docentes.splice(index,1);
        return true;
    } else  
        return false;

}

const docenteRepository = { findAll, create, findOne, update,remove }

export default docenteRepository;