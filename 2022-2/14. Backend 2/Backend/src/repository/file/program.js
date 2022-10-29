import { Program } from '../../model/index.js'

import data from '../../data/programs.js'

const getAll = () => {
    return data.map( item => {
        return new Program({
            id:item.id,
            name: item.name,
            facultyId: item.facultyId
        })
    })
}

const ProgramFileRepository = { getAll }

export default ProgramFileRepository