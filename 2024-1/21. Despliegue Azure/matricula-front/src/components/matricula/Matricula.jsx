import { useEffect, useState } from 'react';
import MatriculaForm from './MatriculaForm.jsx';

import matriculaApi from '../../api/matricula.js'
import cursoApi from '../../api/curso.js'
import alumnoApi from '../../api/alumno.js'

const Matricula = () => { 

    const [ matriculas, setMatriculas ] = useState([])
    const [ alumnos, setAlumnos ] = useState([])
    const [ cursos, setCursos ] = useState([])
    const [ isNewForm, setIsNewForm ] = useState(false)

    const handleOnLoad = async () => {
        const matriculasData = await matriculaApi.findAllComplete();
        setMatriculas(matriculasData)
        const alumnosData = await alumnoApi.findAll();
        setAlumnos(alumnosData)
        const cursosData = await cursoApi.findAll();
        setCursos(cursosData)
    }

    useEffect(() => {
        handleOnLoad();
    }, [])

return <>
    <h1>Matrícula</h1>
    <p>Listado de alumnos matriculados.</p>
    <table border="1">
        <thead>
            <tr>
                <th>ID</th>
                <th>Fecha</th>
                <th>Alumno</th>
                <th>Cursos</th>
            </tr>
        </thead>
        <tbody>
            {
                matriculas.map((matricula) => {
                    return <tr key={matricula.id}>
                        <td>{matricula.id}</td>
                        <td>{matricula.fechaMatricula}</td>
                        <td>{matricula.alumno?.nombre} {matricula.alumno?.apellido}</td>
                        <td>{matricula.cursomatriculas?.map(x => x.curso.name).join(', ')}</td>
                    </tr>
                })
            }
        </tbody>
    </table>
    <br /><br />
    <button onClick={() => setIsNewForm(!isNewForm)}>{isNewForm ? 'Cancelar' : 'Nueva Matrícula'}</button>
    { isNewForm && <MatriculaForm alumnos={alumnos} cursos={cursos} matriculas={matriculas} reload={handleOnLoad} /> }
    
</>
}

export default Matricula