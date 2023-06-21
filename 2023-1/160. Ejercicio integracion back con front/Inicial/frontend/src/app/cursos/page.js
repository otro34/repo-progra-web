'use client';
import CursosApi from '../api/cursos.js'
import DocentesApi from '../api/docentes.js';
import Button from 'react-bootstrap/Button'
import { useEffect, useState } from "react"

import FormularioCurso from '../components/Curso/FormularioCurso/FormularioCurso.jsx'

const CursosPage = () => {

    const cursoDefault = { id: 0, nombre: '', nivel: 0, carrera: '', idDocente: 0}

    const [ cursos, setCursos ] = useState([])
    const [ curso, setCurso ] = useState(cursoDefault)
    const [ isNew, setIsNew ] = useState(true);
    const [ isFormVisible, setIsFormVisible ] = useState(false)
    const [ docentes, setDocentes ] = useState([])

    const handleOnLoad = async () => {
        const result = await CursosApi.findAll(cursoDefault);
        setCursos(result.data);
        const docentesResult = await DocentesApi.findAll();
        setDocentes(docentesResult.data);
    }

    const handleAgregarCurso = () => {
        setIsNew(true)
        setIsFormVisible(true)
        setCurso(cursoDefault)
    }

    const handleGuardarCurso = async (curso) => {
        if (isNew)
            await CursosApi.create(curso);
        else
            await CursosApi.update(curso);
        
        handleOnLoad();
        handleCancelarFormulario();
    }

    const handleCancelarFormulario = () => {
        setIsFormVisible(false);
    }

    const handleModificar = (item) => {
        setCurso(item);
        setIsNew(false);
        setIsFormVisible(true);
    }

    const handleEliminar = async (item) => {
        await CursosApi.remove(item.id);
        handleOnLoad();
    }

    useEffect(() => {
        handleOnLoad();
    }, [])


return (
    <>
    <h2>Mantenimiento de Cursos</h2>
    <div>
        <table className="table">
            <thead>
                <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Nivel</th>
                        <th scope="col">Carrera</th>
                        <th scope="col">IdDocente</th>
                </tr>
            </thead>
            <tbody>
                { cursos.map(item => (
                            <tr key={item.id}>
                                <th scope="row" >{item.id}</th>
                                <td>{item.nombre}</td>
                                <td>{item.nivel}</td>
                                <td>{item.carrera}</td>
                                <td>{item.idDocente}</td>
                                <td>
                                    <button
                                        onClick={() => handleModificar(item) }>Modificar</button> 
                                    <button
                                        onClick={() => handleEliminar(item)} >Eliminar</button>
                                </td>
                            </tr>
                        ))
                        }
            </tbody>
        </table>
    </div>
    <div>
        <Button variant="primary" 
                style={{ marginBottom: '10px', marginLeft: '10px'}}
                onClick={() => handleAgregarCurso() }>+ Agregar nuevo curso</Button>
    </div>
    {isFormVisible && <FormularioCurso
        curso={curso}
        docentes={docentes}
        onClick={handleGuardarCurso}
        onCancelar={handleCancelarFormulario}
     /> }
    </>

)
}

export default CursosPage