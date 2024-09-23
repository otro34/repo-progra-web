import React, { useState } from "react";

import CursosMatriculados from "./CursosMatriculados";

import api from "../../api/matricula.js";
import apiCursos from "../../api/curso.js";

const MatriculaForm = ({ cursos, alumnos, reload}) => { 

    const [ alumnoId, setAlumnoId ] = useState(0)
    const [ cursoId, setCursoId ] = useState(0)

    const [ cursosMatriculados, setCursosMatriculados ] = useState([])

    const handleGuardar = async () => { 

        const payloadMatricula = {
            fechaMatricula: new Date(),
            idAlumno: alumnoId,
            cursos: cursosMatriculados
        }
        
        const result = await api.create(payloadMatricula)

        if (result) {
            alert('Matrícula guardada correctamente.')
            reload();
        }
    }

    const handleAgregar = async () => {
        const curso = await apiCursos.findOne(cursoId)
        setCursosMatriculados([...cursosMatriculados, { idCurso: cursoId, curso }])	
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
            <button onClick={handleAgregar}>Agregar</button>
            <br />
            <br />
            <CursosMatriculados cursos={cursosMatriculados}/>
            <br />
            <br />
            <button onClick={handleGuardar}>Matricular</button>
        </>
    );
}

export default MatriculaForm