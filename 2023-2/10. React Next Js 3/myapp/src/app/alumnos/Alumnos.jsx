'use client'

import { useState, useEffect } from 'react'

import styles from './alumnos.module.css'
import Formulario from './Formulario/Formulario.jsx'
const Alumnos = () => {

    const [showFormulario, setShowFormulario ] = useState(false);
    const [alumnos, setAlumnos] = useState([]);

    useEffect(() => {
        let alumnosInicial = JSON.parse(localStorage.getItem("alumnos"));
        setAlumnos(alumnosInicial)
    }, [])

    useEffect(() => {
        localStorage.setItem("alumnos", JSON.stringify(alumnos))
    },[alumnos])

    const handleShowFormulario = () => {
        setShowFormulario(!showFormulario);
    }

    const handleAgregar = (alumno) => {
        setAlumnos([...alumnos, alumno])
    }

    return (
        <>
            <h1>Lista de Alumnos</h1>

            <table className={styles.tabla}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Carrera</th>
                    </tr>
                </thead>
                <tbody>
                    {alumnos.map(item => {
                        return (<tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.nombre}</td>
                            <td>{item.apellido}</td>
                            <td>{item.carrera}</td>
                        </tr>)
                    })
                    }
                </tbody>
            </table>
            <br />
            <button onClick={handleShowFormulario}>AGREGAR</button>
            <br/>
            {
                showFormulario && <Formulario onEnviar={handleAgregar}/>
            }
            
        </>
    )
}

export default Alumnos