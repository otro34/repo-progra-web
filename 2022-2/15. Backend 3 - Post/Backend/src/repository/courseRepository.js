import { CourseFileRepository } from "./file/index.js";

const getAll = () => {
    return CourseFileRepository.getAll();
}

const CourseRepository = { getAll }

export default CourseRepository;