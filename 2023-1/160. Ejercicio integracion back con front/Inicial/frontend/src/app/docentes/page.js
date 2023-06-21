'use client';
import DocentesApi from '../api/docentes.js'

import Button from 'react-bootstrap/Button'
import { useEffect, useState } from 'react';

import Alert from '../../components/Alert/Alert.jsx'

import FormularioDocente from '../components/Docente/FormularioDocente/FormularioDocente.jsx';

const Docentes = () => {

    const docenteDefault = {id: 0, name: '', lastname: ''}

    const [docentes, setDocentes ] = useState([])
    const [ docente, setDocente ] = useState(docenteDefault)
    const [isFormVisible, setIsFormVisible ] = useState(false)

    const [ isNew, setIsNew ] = useState(true)

    const [ alertData, setAlertData ] = useState({ isVisible: false, message: '', variant: 'success'})

    const handleOnLoad = async () => {
        const result = await DocentesApi.findAll();
        setDocentes(result.data);
    }

    const handleGuardarDocente = async (docente) => {
        if (isNew)
            await DocentesApi.create(docente);
        else
            await DocentesApi.update(docente);
        
        handleOnLoad();
        setAlertData({...alertData, isVisible: true, message:'Datos guardados exitosamente.'})
        handleCancelarFormulario();
    }

    const handleAgregarDocente = () => {
        setIsNew(true);
        setIsFormVisible(true);
        setDocente(docenteDefault);
    }

    const handleCancelarFormulario = () => {
        setIsFormVisible(false);
    }

    const handleModificar = (item) => {
        setDocente(item);
        setIsNew(false);
        setIsFormVisible(true);
    }

    const handleEliminar = async (item) => {
        await DocentesApi.remove(item.id);
        setAlertData({...alertData, isVisible: true, message:'Docente eliminado.', variant:'warning'})
        handleOnLoad();
    }

    useEffect(()=> {
        handleOnLoad();
    },[])

    return (
        <div>
            <h2>
            Mantenimiento de Docentes
            </h2>
            <div>
                <Alert 
                    isVisible={alertData.isVisible}
                    message={alertData.message}
                    variant={alertData.variant}
                />
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
                    <tbody>
                        { docentes.map(item => (
                            <tr>
                                <th scope="row" >{item.id}</th>
                                <td>{item.name}</td>
                                <td>{item.lastname}</td>
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
                    onClick={() => handleAgregarDocente() }>+ Agregar nuevo docente</Button>
            </div>
            {isFormVisible && 
                <FormularioDocente
                    docente={docente}
                    onClick={handleGuardarDocente}
                    onCancelar={handleCancelarFormulario}
                />}     
        </div>
    )
} 

export default Docentes