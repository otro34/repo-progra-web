import model from '../models/especialidad.js'
import doctorRepository from './doctor.js';

let especialidades = [...model];
let nroEspecialidades = especialidades.length;

const findAll = () => {
    const newEspecialidades = especialidades.map(item => {
        return { ...item, 
            doctores: doctorRepository.findAll().filter(doctor => doctor.especialidadId == item.id),
        } } )

    return newEspecialidades;
}

const create = (payload) => {
    nroEspecialidades++;
    payload.id = nroEspecialidades;
    especialidades.push(payload);

    return payload;
}

const findOne = (id) => {
    const result = especialidades.find(x => x.id === parseInt(id));

    return result;
}

const remove = (id) => {
    const index = especialidades.findIndex(item => item.id == id);

    if (index > -1) {
        especialidades.splice(index,1);
        return true;
    } else return false;
}

const update = (payload) => {
    const index = especialidades.findIndex(item => item.id == payload.id);

    if (index > -1) {
        especialidades[index] = payload;
        return payload;
    }
    else
        return null;
}

const repository = { findAll, create, findOne, remove, update }

export default repository;