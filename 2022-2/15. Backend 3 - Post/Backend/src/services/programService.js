import { ProgramRepository } from '../repository/index.js'

const getAll = () => {
    return ProgramRepository.getAll();
}

const ProgramService = { getAll }

export default ProgramService;