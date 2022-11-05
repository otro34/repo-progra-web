import { EnrollmentRepository } from '../repository/index.js'

const getAll = () => {
    return EnrollmentRepository.getAll();
}

const insert = (enrollment) => {
    return EnrollmentRepository.insert(enrollment)
}

const findOne = (id) => {
    return EnrollmentRepository.findOne(id);
}

const EnrollmentService = { getAll, insert, findOne }

export default EnrollmentService;