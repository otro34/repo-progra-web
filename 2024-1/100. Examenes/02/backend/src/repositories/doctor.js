import model from '../models/doctor.js'
import citaRepository from './cita.js';
import especialidadRepository from './especialidad.js';

let doctors = [...model];
let numberOfDoctors = doctors.length;

const findAll = () => {
    const newCitas = doctors.map(item => {
        return { ...item, 
            citas: citaRepository.findAll().filter(cita => cita.doctorId == item.id),
            especialidad: especialidadRepository.findOne(item.especialidadId),
        } } )

    return newCitas;
}

const create = (payload) => {
    numberOfDoctors++;
    payload.id = numberOfDoctors;
    doctors.push(payload);

    return payload;
}

const findOne = (id) => {
    const result = doctors.find(x => x.id === parseInt(id));

    return result;
}

const remove = (id) => {
    const index = doctors.findIndex(item => item.id == id);

    if (index > -1) {
        doctors.splice(index,1);
        return true;
    } else return false;
}

const update = (payload) => {
    const index = doctors.findIndex(item => item.id == payload.id);

    if (index > -1) {
        doctors[index] = payload;
        return payload;
    }
    else
        return null;
}

const repository = { findAll, create, findOne, remove, update }

export default repository;