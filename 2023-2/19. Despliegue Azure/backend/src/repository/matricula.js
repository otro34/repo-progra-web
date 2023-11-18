import RepositoryBase from './base.js'
import matricula from '../model/matricula.js'
import cursoMatricula from '../model/cursoMatricula.js'
import curso from '../model/curso.js'
import alumno from '../model/alumno.js'

const matriculaRepository = new RepositoryBase(matricula);
const cursoMatriculaRepository = new RepositoryBase(cursoMatricula);

const create = async (objMatricula) => {
    try {
        const newMatricula = await matriculaRepository.create(objMatricula);

        if (newMatricula) {
            objMatricula.cursos.forEach( async (objCurso) => {
                const obj = {
                    idMatricula: newMatricula.id,
                    idCurso: objCurso.id
                }

                await cursoMatriculaRepository.create(obj);
                
            });
        }

        objMatricula.id = newMatricula.id;

        return objMatricula;
    } catch(err) {
        console.error(err);
        return null;
    }
    
}

const findOne = async (id) => await matriculaRepository.findOne(id);
const remove = async (id) => await matriculaRepository.remove(id);
const update = async (objMatricula) => await matriculaRepository.update(objMatricula);

const findAll = async() => {
    try {
        return await matricula.findAll(
            {include: [{
                    model: curso
                },
                {
                    model: cursoMatricula
                },
                {
                    model: alumno
                }] });

    } catch(err) {
        console.error(matricula)
        return null
    }
}
 
export default { create, findOne, remove, update, findAll }
