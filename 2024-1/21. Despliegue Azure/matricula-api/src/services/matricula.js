import Matricula from '../models/matricula.js'
import Alumno from '../models/alumno.js'
import CursoMatricula from '../models/cursoMatricula.js'
import Curso from '../models/curso.js'

import RepositoryBase from '../repositories/base.js'

const matriculaRepository = new RepositoryBase(Matricula)
const cursoMatriculaRepository = new RepositoryBase(CursoMatricula)

const findAllComplete = async () => {
    
    const matriculas = await Matricula.findAll({
        include: [Alumno, { model: CursoMatricula, required: true, include: [Curso]}]
    })

    return matriculas
}

const create = async (payload) => {

    const { cursos } = payload;

    if (!cursos) return null;

    const result = await matriculaRepository.create(payload)

    result.cursos = []

    if (result) {

        cursos.forEach(async curso => {
            const objCursoMatri = { idCurso: curso.idCurso, idMatricula: result.id }
            const resultcursoMatri = await cursoMatriculaRepository.create(objCursoMatri);

            if (resultcursoMatri)
                result.cursos.push(resultcursoMatri);

        });
    }
    
    return result
}

 const service = { create, findAllComplete }

 export default service