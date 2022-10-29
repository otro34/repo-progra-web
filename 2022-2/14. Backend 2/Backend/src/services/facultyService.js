import { FacultyRepository } from '../repository/index.js'

const getAll = () => {
    return FacultyRepository.getAll();
}

const FacultyService = { getAll }

export default FacultyService;