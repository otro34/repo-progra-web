import { useState, useEffect } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button'

import carreraApi from '../../api/carrera.js';
import alumnoApi from '../../api/alumno.js'
import cursoApi from '../../api/curso.js'
import matriculaApi from '../../api/matricula.js'

const Matricula = () => {

    const [carreras, setCarreras] = useState([]);
    const [alumnos, setAlumnos] = useState([]);
    const [cursos, setCursos] = useState([])
    const [carreraId, setCarreraId] = useState(1);
    const [alumnoId, setAlumnoId] = useState(1);
    const [cursoId, setCursoId] = useState(1)
    const [cursosMatriculados, setCursosMatriculados] = useState([])
    

    const handleOnLoad = async () => {
        const rawCarreras = await carreraApi.findAll();
        const rawAlumnos = await alumnoApi.findAll();
        const rawCursos = await cursoApi.findAll();

        setCarreras(rawCarreras.data);
        setAlumnos(rawAlumnos.data);
        setCursos(rawCursos.data);
    }

    const handleAgregarCurso = () => {
        setCursosMatriculados([...cursosMatriculados,{ id: cursoId }]) 
    }

    const handleGuardar = async () => {
        const matricula = {
            id: 2,
            fechaMatricula: new Date(),
            alumno: { id: alumnoId },
            carrera: { id: carreraId},
            cursos: cursosMatriculados
        }

        const resp = await matriculaApi.create(matricula);

        if (resp)
            alert("Datos guardados!");
        else
            alert("Ha habido un error!");
    }

    useEffect(() => {
        handleOnLoad();
    }, [])

    return (
        <>
        <h1>Registro de Matrícula</h1>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Carrera</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={carreraId}
            label="Carrera"
            onChange={e => setCarreraId(e.target.value)}
            >
                {carreras.map(item => {
                    return (<MenuItem value={item.id}>{item.nombre}</MenuItem>)
                })}
            
            </Select>
      </FormControl>
      <br/><br/>
      <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Alumno</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={alumnoId}
            label="Carrera"
            onChange={e => setAlumnoId(e.target.value)}
            >
                {alumnos.map(item => {
                    return (<MenuItem value={item.id}>{item.nombre + " " + item.apellido}</MenuItem>)
                })}
            
            </Select>
      </FormControl>
      <br/><br/>
      <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Curso</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={cursoId}
            label="Curso"
            onChange={e => setCursoId(e.target.value)}
            >
                {cursos.map(item => {
                    return (<MenuItem value={item.id}>{item.nombre}</MenuItem>)
                })}
            
            </Select>
      </FormControl>
      <Button onClick={handleAgregarCurso}>Agregar Curso</Button>
      <br /><br />
      <table>
        <thead>
            <tr>
                <th>ID</th>
            </tr>
        </thead>
        <tbody>
            {cursosMatriculados.map( item => {
                return (
                    <tr>
                        <td>{item.id}</td>
                    </tr>
                )
            })}
        </tbody>
      </table>
      <br /><br />
      <Button onClick={handleGuardar}>Guardar Matricula</Button>
    </>
    
    )
}

export default Matricula;