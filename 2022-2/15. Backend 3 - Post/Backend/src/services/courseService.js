import { CourseRepository } from '../repository/index.js'

const getAll = () => {
    return CourseRepository.getAll();
}

const CourseService = { getAll }

export default CourseService;