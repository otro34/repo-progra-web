import { FacultyFileRepository } from "./file/index.js";

const getAll = () => {
    return FacultyFileRepository.getAll();
}

const FacultyRepository = { getAll }

export default FacultyRepository;