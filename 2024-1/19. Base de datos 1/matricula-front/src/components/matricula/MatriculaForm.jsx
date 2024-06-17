import React, { useEffect, useState } from "react";

import CursosMatriculados from "./CursosMatriculados";

import api from "../../api/matricula.js";

const MatriculaForm = ({ cursos, alumnos, matriculas, reload}) => { 

    const [ alumnoId, setAlumnoId ] = useState(0)
    const [ cursoId, setCursoId ] = useState(0)

    const [ cursosMatriculados, setCursosMatriculados ] = useState([])

    useEffect(() => { 
        const filtro = matriculas.filter( m => m.idAlumno == alumnoId)[0];
        setCursosMatriculados(filtro?.cursos || [])
    }, [alumnoId])

    const handleGuardar = async () => { 

        let matricula = {}

        const busquedaMatricula = matriculas.find( m => m.idAlumno == alumnoId);

        console.log({busquedaMatricula})

        if (busquedaMatricula) {
            matricula = {
                ...busquedaMatricula,
                cursos: [...busquedaMatricula.cursos, { id: parseInt(cursoId) }]
            }

        } else {
            matricula = {
                id: 0,
                idAlumno: parseInt(alumnoId),
                fechaMatricula: new Date(),
                cursos: [{id: parseInt(cursoId) }]
            }
        }

        if (matricula.id == 0)
            await api.create(matricula)
        else
            await api.update(matricula)

        alert('Matrícula guardada con éxito.')

        reload();

        
    }


    return (
        <>
            <h3>Formulario de Matrícula</h3>
            <label>Alumno:</label>
            <br /> 
            <select onChange={e=> setAlumnoId(e.target.value)}>
                <option value="0">Seleccione Alumno</option>
                {
                    alumnos?.map((alumno) => {
                        return <option key={alumno.id} value={alumno.id}>{alumno.nombre} {alumno.apellido}</option>
                    })
                }
            </select>
            <br /> 
            <label>Curso:</label>
            <br /> 
            <select onChange={ e=> setCursoId(e.target.value)}>
                <option value="0">Seleccione Curso</option>
                {
                    cursos?.map((curso) => {
                        return <option key={curso.id} value={curso.id}>{curso.name}</option>
                    })
                }
            </select>
            <br />
            <br />
            <button onClick={handleGuardar}>Matricular</button>
            <br />
            <br />
            <CursosMatriculados cursos={cursosMatriculados}/>
        </>
    );
}

export default MatriculaForm