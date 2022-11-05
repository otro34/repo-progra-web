import { ProgramFileRepository } from "./file/index.js";

const getAll = () => {
    return ProgramFileRepository.getAll();
}

const ProgramRepository = { getAll }

export default ProgramRepository;