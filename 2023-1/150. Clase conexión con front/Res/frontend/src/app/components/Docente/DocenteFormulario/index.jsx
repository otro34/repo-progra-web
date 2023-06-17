import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useState } from 'react'

const DocenteFormulario = ({ docente, isNew, onClick, onCancelar }) => {
    
    const [ datosDocente, setDatosDocente ] = useState(docente)
    const [isLoading, setLoading] = useState(false);

    const handleOnClick = async () => {
        setLoading(true);
        await onClick(datosDocente);
        setLoading(false);
    }

    const handleCancelar = () => {
        setDatosDocente(docente);
        onCancelar(true)
    }

    return (
        <>
            {
                isNew ?
                <h2>Agregar Docente</h2>
                :
                <h2>Modificar Docente</h2>
            }
            <br />
            <Form.Control 
                size="lg" 
                type="text" 
                placeholder="Nombre" 
                value={datosDocente.name}
                onChange={e => setDatosDocente({...datosDocente, name: e.target.value})}
                />
            <br />
            <Form.Control 
                size="lg" 
                type="text" 
                placeholder="Apellidos"
                value={datosDocente.lastname}
                onChange={e => setDatosDocente({...datosDocente, lastname: e.target.value})} />
            <br />
            <Button variant="primary"
                    disabled={isLoading}
                    onClick={!isLoading ? () => handleOnClick() : null}
                    style={{ marginRight: '10px'}}>Guardar</Button>
            <Button variant="secondary"
                    disabled={isLoading}
                    onClick={!isLoading ? () => handleCancelar() : null}>Cancelar</Button>

        </>
    )
}

export default DocenteFormulario