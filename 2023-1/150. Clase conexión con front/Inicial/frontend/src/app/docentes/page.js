'use client';

import Button from 'react-bootstrap/Button'

const Docentes = () => {

    return (
        <div>
            <h2>
            Mantenimiento de Docentes
            </h2>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr>
                                <th scope="row" >1</th>
                                <td>Juan</td>
                                <td>Lopez</td>
                                <td>
                                    <button>Modificar</button> 
                                    <button >Eliminar</button>
                                </td>
                            </tr>
                    </tbody>
                    </table>
                    
            </div>
            <div>
                <Button variant="primary" 
                    style={{ marginBottom: '10px', marginLeft: '10px'}}>+ Agregar nuevo docente</Button>
            </div>
            <div>

            </div>
        </div>
    )
} 

export default Docentes