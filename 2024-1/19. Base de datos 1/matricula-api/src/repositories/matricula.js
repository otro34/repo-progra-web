import model from '../models/matricula.js'
import alumnoRepository from './alumno.js';
import cursoRepository from './curso.js';

let matriculas = [...model];
let nroMatriculas = matriculas.length;

const findAll = () => {
    const newMatriculas = matriculas.map(item => {
        return { ...item, 
            alumno: alumnoRepository.findOne(item.idAlumno),
            cursos: item.cursos?.map(curso => cursoRepository.findOne(curso?.id || 0))
        } } )

    return newMatriculas;
}

const create = (payload) => {
    nroMatriculas++;
    payload.id = nroMatriculas;
    matriculas.push(payload);

    return payload;
}

const findOne = (id) => {
    const result = matriculas.find(x => x.id === parseInt(id));

    return result;
}

const remove = (id) => {
    const index = matriculas.findIndex(item => item.id == id);

    if (index > -1) {
        matriculas.splice(index,1);
        return true;
    } else return false;
}

const update = (payload) => {
    const index = matriculas.findIndex(item => item.id == payload.id);

    if (index > -1) {
        matriculas[index] = payload;
        return payload;
    }
    else
        return null;
}

const repository = { findAll, create, findOne, remove, update }

export default repository;