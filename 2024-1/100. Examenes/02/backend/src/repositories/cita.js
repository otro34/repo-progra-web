import model from '../models/cita.js'
import pacienteRepository from './paciente.js';
import doctorRepository from './doctor.js';
import especialidadRepository from './especialidad.js';

let citas = [...model];
let nroCitas = citas.length;

const findAll = () => {
    const newCitas = citas.map(item => {
        return { ...item, 
            paciente: pacienteRepository.findOne(item.pacienteId),
            doctor: doctorRepository.findOne(item.doctorId),
            especialidad: especialidadRepository.findOne(doctorRepository.findOne(item.doctorId).especialidadId)
        } } )

    return newCitas;
}

const create = (payload) => {
    nroCitas++;
    payload.id = nroCitas;
    citas.push(payload);

    return payload;
}

const findOne = (id) => {
    const result = citas.find(x => x.id === parseInt(id));

    return result;
}

const remove = (id) => {
    const index = citas.findIndex(item => item.id == id);

    if (index > -1) {
        citas.splice(index,1);
        return true;
    } else return false;
}

const update = (payload) => {
    const index = citas.findIndex(item => item.id == payload.id);

    if (index > -1) {
        citas[index] = payload;
        return payload;
    }
    else
        return null;
}

const repository = { findAll, create, findOne, remove, update }

export default repository;