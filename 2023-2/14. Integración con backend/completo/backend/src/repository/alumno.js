let alumnos = [{
    id: 1,
    nombre: "Ignacio",
    apellido: "Lopez Tarso",
    carrera: "Ingeniería de Sistemas"
},{
    id: 2,
    nombre: "Ana Lucia",
    apellido: "Mendez",
    carrera: "Derecho"
}]

const findAll = () => {
    return alumnos;
}

const create = (alumno) => {
    alumnos.push(alumno)
    return alumno;
}

const findOne = (id) => {
    const result = alumnos.find(x => x.id == id);
    return result;
}

const update = (alumno) => {
    const index = alumnos
        .findIndex(item => item.id === alumno.id);

    if (index > -1) {
        alumnos[index] = alumno;
        return alumno;
    } else {
        return null;
    }
    
}

const remove = (id) => {
    const index = alumnos.findIndex(item => item.id == id);

    if (index > -1) {
        alumnos.splice(index,1);
        return true;
    } else  
        return false;

}

const alumnoRepository = { findAll, create, findOne, update,remove }

export default alumnoRepository;