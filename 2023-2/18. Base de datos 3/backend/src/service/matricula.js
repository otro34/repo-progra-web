import matriculaRepository from '../repository/matricula.js'
import alumnoRepository from '../repository/alumno.js'
import carreraRepository from '../repository/carrera.js'
import cursoRepository from '../repository/curso.js';

const findAllComplete = () => {
    const matriculas = matriculaRepository.findAll();
    const alumnos = alumnoRepository.findAll();
    const carrera = carreraRepository.findAll();
    const allCursos = cursoRepository.findAll();

    const newMatriculas = matriculas.map(item => {
        return {...item, alumno: alumnos.filter(x => x.id === item.alumno?.id)[0],
        carrera: carrera.filter(x => x.id === item.carrera?.id)[0],
        cursos: item.cursos?.map(cur => {
            return allCursos.filter(x => x.id === cur.id)[0];
        })
    }
    })

    return newMatriculas;
}

const service = { findAllComplete }

export default service