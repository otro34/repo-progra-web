import { useState } from 'react'

import styles from './alumnos.module.css'
import Formulario from './Formulario/Formulario.jsx'
const Alumnos = () => {

    const [showFormulario, setShowFormulario ] = useState(false);

    const handleShowFormulario = () => {
        setShowFormulario(!showFormulario);
    }

    const alumnos = [
        {
            id: 1,
            nombre: "Juan",
            apellido: "Perez",
            carrera: "Sistemas"
        },
        {
            id: 2,
            nombre: "Gabriel",
            apellido: "Sanchez",
            carrera: "Derecho"
        }
    ]

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
                        return (<tr>
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
                showFormulario && <Formulario />
            }
            
        </>
    )
}

export default Alumnos