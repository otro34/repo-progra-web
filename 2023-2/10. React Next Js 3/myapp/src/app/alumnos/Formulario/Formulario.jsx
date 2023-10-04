import { useState, useEffect } from 'react'

import styles from './formulario.module.css'

const Formulario = ({ onEnviar }) => {

    const alumnoInicial = {
            id: 0,
            nombre: "",
            apellido: "",
            carrera: ""
    }

    const [alumno, setAlumno] = useState(alumnoInicial)

    const handleEnviar = () => {
        onEnviar(alumno)
    }

    const arr = [1,2,3,5]

    return (
        <>
            <label className={styles.label}>ID</label>
            <input type="text" onChange={event => setAlumno({...alumno, id: event.target.value})} value={alumno.id}></input>
            <br/>
            <label className={styles.label}>Nombre:</label>
            <input type="text" onChange={event => setAlumno({...alumno, nombre: event.target.value})} value={alumno.nombre}></input>
            <br/>
            <label className={styles.label}>Apellido:</label>
            <input type="text" onChange={event => setAlumno({...alumno, apellido: event.target.value})} value={alumno.apellido}></input>
            <br/>
            <label className={styles.label}>Carrera:</label>
            <input type="text" onChange={event => setAlumno({...alumno, carrera: event.target.value})} value={alumno.carrera}></input>
            <label className={styles.label}>Nivel:</label>
            <select>
                {
                   arr.map(item => {
                    return (
                        <option key={item}>{item}</option>
                    )
                   }) 
                }
            </select>
            <br />
            <br />
            <button onClick={handleEnviar}>ENVIAR</button>
        </>
    )
}

export default Formulario