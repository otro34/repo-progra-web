'use client';

import Button from 'react-bootstrap/Button'
import Alert from '../components/shared/Alert/Alert.jsx';

import DocentesApi from '../api/docentes.js'
import { useState, useEffect } from 'react'

import DocenteFormulario from '../components/Docente/DocenteFormulario/index.jsx'

const Docentes = () => {
    
    const docenteDefault = { id: 0, name: '', lastname: ''}

    const [ docentes, setDocentes ] = useState([])
    const [ docente, setDocente ] = useState(docenteDefault);
    const [ isFormVisible, setIsFormVisible ] = useState(false)
    const [ isNew, setIsNew ] = useState(false)

    const [alertData, setAlertData ] = useState({ isVisible: false, message: '', variant: 'success'})
    
    const handleOnLoad = async () => {
        const result = await DocentesApi.findAll();
        setDocentes(result.data);
        console.log(result.data);
    }

    const handleGuardarDocente = async (docente) => {
        if (isNew)
            await DocentesApi.create(docente);
        else
            await DocentesApi.update(docente);

        setAlertData({...alertData, isVisible: true, message: 'Datos guardados exitosamente.', variant:'success'});
        handleCancelarFormulario();
        handleOnLoad();
    }

    const handleAgregarNuevoDocente = () => {
        setIsNew(true);
        setIsFormVisible(true);
    }

    const handleCancelarFormulario = () => {
        setIsFormVisible(false);
        setDocente(docenteDefault);
    }

    const handleModificar = (item) => {
        setDocente(item);
        setIsNew(false)
        setIsFormVisible(true);
    }

    const handleEliminar = async (item) => {
        await DocentesApi.remove(item.id);
        setAlertData({...alertData, isVisible: true, message: 'Se ha eliminado al docente.', variant: 'warning'});
        handleOnLoad();
    }

    const setIsVisible = () => {
        setAlertData({...alertData, isVisible: false })
    }

    useEffect(() => {
        handleOnLoad();
    }, [])
    
    return (
        <div>
            <h2>
            Mantenimiento de Docentes
            </h2>
            <div>
                <Alert isVisible={alertData.isVisible}
                    setIsVisible={setIsVisible}
                    message={alertData.message}
                    variant={alertData.variant} />
            </div>
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
                    { docentes ? 
                    <tbody>
                        { docentes.map( item => (
                            <tr key={item.id}>
                                <th scope="row" >{ item.id }</th>
                                <td>{ item.name }</td>
                                <td>{ item.lastname }</td>
                                <td>
                                    <button 
                                        style={{ marginLeft: '10px'}}
                                        onClick={() => handleModificar(item)}>Modificar</button> 
                                    <button style={{ marginLeft: '10px'}}
                                        onClick={() => handleEliminar(item) }>Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    : <tbody>
                    </tbody>
                    }
                    </table>
                    
            </div>
            <div>
                <Button variant="primary" 
                    style={{ marginBottom: '10px', marginLeft: '10px'}}
                    onClick={() => handleAgregarNuevoDocente() }>+ Agregar nuevo docente</Button>
            </div>
            <div>
                    { isFormVisible ? <DocenteFormulario
                        docente={docente}
                        isNew={isNew}
                        onClick={handleGuardarDocente}
                        onCancelar={handleCancelarFormulario}
                         ></DocenteFormulario> : <></>}
            </div>
        </div>
    )
} 

export default Docentes