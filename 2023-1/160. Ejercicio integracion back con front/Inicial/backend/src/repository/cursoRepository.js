let cursos = [
    {id: 1, nombre: "POO", nivel: 4, carrera: "Sistemas", idDocente: 2},
    {id: 2, nombre: "Progra Web", nivel: 7, carrera: "Sistemas", idDocente: 1},
    {id: 3, nombre: "Arquitectura de Software", nivel: 10, carrera: "Sistemas", idDocente: 2}
];

let counter = 3;

const findAll = () => {
    return cursos;
}

const create = (curso) => {
    counter++;
    const newCurso = {...curso, id: counter}
    cursos.push(newCurso);

    return curso;
}

const findOne = (id) => {
    const result = cursos.find(x => x.id == id);
    return result;
}

const update = (curso) => {
    const index = cursos.findIndex(item => item.id === curso.id);
    
    if (index > -1) {
        cursos[index] = curso;
        return true;
    }

    return false;
}

const remove = (id) => {
    const index = cursos.findIndex(item => item.id == id)
    
    if (index > -1) {
        cursos.splice(index, 1)
        return true;
    } else
    return false;
        
}


const CursosRepository = { findAll, create, findOne,update, remove };

export default CursosRepository; 
