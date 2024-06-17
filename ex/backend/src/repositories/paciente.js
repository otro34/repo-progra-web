import model from '../models/paciente.js'
import citaRepository from './cita.js';

let pacientes = [...model];
let nroPacientes = pacientes.length;

const findAll = () => {
    const newPacientes = pacientes.map(item => {
        return { ...item, 
            citas: citaRepository.findAll().filter(cita => cita.pacienteId == item.id),
        } } )

    return newPacientes;
}

const create = (payload) => {
    nroPacientes++;
    payload.id = nroPacientes;
    pacientes.push(payload);

    return payload;
}

const findOne = (id) => {
    const result = pacientes.find(x => x.id === parseInt(id));

    return result;
}

const remove = (id) => {
    const index = pacientes.findIndex(item => item.id == id);

    if (index > -1) {
        pacientes.splice(index,1);
        return true;
    } else return false;
}

const update = (payload) => {
    const index = pacientes.findIndex(item => item.id == payload.id);

    if (index > -1) {
        pacientes[index] = payload;
        return payload;
    }
    else
        return null;
}

const repository = { findAll, create, findOne, remove, update }

export default repository;