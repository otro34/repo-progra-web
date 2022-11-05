import { Course } from '../../model/index.js'

import data from '../../data/courses.js'

const getAll = () => {
    return data.map( item => {
        return new Course({
            id: item.id,
            name: item.name,
            programId: item.programId
        }) 
    })
}

const CourseFileRepository = { getAll }

export default CourseFileRepository