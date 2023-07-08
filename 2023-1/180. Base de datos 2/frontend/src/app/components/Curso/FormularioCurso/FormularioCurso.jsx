import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import { useEffect } from 'react'

const FormularioCurso = ({ curso, onClick, onCancelar, docentes }) => {

    const [datosCurso, setDatosCurso ] =  useState(curso)

    const handleOnClick = async () => {
        await onClick(datosCurso);
    }

    const handleOnCancelar = () => {
        onCancelar();
    }

    useEffect(()=> {
        console.log(docentes)
    })

    return (
        <>
            <h2>Agregar Curso</h2>
            <br />
            <Form.Control
                size="lg" type="text"
                placeholder="Nombre"
                value={datosCurso.nombre}
                onChange={e => setDatosCurso({...datosCurso, nombre: e.target.value})} 
            />
            <br />
            <Form.Control
                size="lg" type="text"
                placeholder="Nivel"
                value={datosCurso.nivel}
                onChange={e => setDatosCurso({...datosCurso, nivel: e.target.value})}  
            />
            <br />
            <Form.Control
                size="lg" type="text"
                placeholder="Carrera"
                value={datosCurso.carrera}
                onChange={e => setDatosCurso({...datosCurso, carrera: e.target.value})}  
            />
            <br />
                <Form.Select aria-label="Default select example"
                    value={datosCurso.idDocente}
                    onChange={e => setDatosCurso({...datosCurso, idDocente: e.target.value})}>
                    <option value="0">Docentes</option>
                    { docentes && docentes.map(item => (
                        <option value={item.id} key={item.id}>{item.name + " " + item.lastname}</option>                 
                    ))}
                </Form.Select>
            <br />
            <Button variant="primary"
                style={{ marginRight: '10px'}}
                onClick={() => handleOnClick() }>GUARDAR</Button>
            <Button variant="secondary"
                style={{ marginRight: '10px'}}
                onClick={() => handleOnCancelar() }>Cancelar</Button>
        </>
    )
}

export default FormularioCurso