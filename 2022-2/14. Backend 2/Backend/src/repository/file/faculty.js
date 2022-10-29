import { Faculty } from '../../model/index.js'

import data from '../../data/faculty.js'

const getAll = () => {
    return data.map( item => {
        return new Faculty({
            id:item.id,
            name: item.name
        })
    })
}

const FacultyFileRepository = { getAll }

export default FacultyFileRepository