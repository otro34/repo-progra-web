const { Container, Row, Col, Form, Button } = require("react-bootstrap")
import { useEffect } from 'react';
import { useState } from 'react';
import marcasApi from '../../api/marcas.js'
import modelosApi from '../../api/modelos.js'

const RegistroForm = ({placa}) => {

    const id = placa.id || 0;

    const [ marcas, setMarcas ] = useState([])
    const [ modelos, setModelos ] = useState([])
    const [ datosPlaca, setDatosPlaca ] = useState(placa)


    const handleOnLoad = async () => {
        const marcasRaw = await marcasApi.findAll()
        setMarcas(marcasRaw.data)
        await handleFiltrarModelos()
    }

    const handleFiltrarModelos = async () => {
        const modelosRaw = await modelosApi.findAll()
        const filtered = modelosRaw.data.filter(x => x.marcaId == datosPlaca.marcaId)
        setModelos(filtered)
    }

    useEffect(() => {
        handleOnLoad()
    },[])

    useEffect(() => {
        console.log('hola')
        handleFiltrarModelos()
    },[datosPlaca])

    return (
        <>
            <Container>
                <Row style={{marginBottom: '10px'}}>
                    <Col xs={6}>
                        <Form.Control type="text" placeholder="Id" disabled value={id} ></Form.Control>
                    </Col>
                </Row>
                <Row style={{marginBottom: '10px'}}>
                    <Col xs={6}>
                        <Form.Control type="text" placeholder="Nombre" ></Form.Control>
                    </Col>
                    <Col xs={6}>
                        <Form.Control type="text" placeholder="Apellido" ></Form.Control>
                    </Col>
                </Row>
                <Row style={{marginBottom: '10px'}}>
                    <Col xs={6}>
                        <Form.Control type="text" placeholder="DNI" ></Form.Control>
                    </Col>
                    <Col xs={6}>
                        <Form.Control type="text" placeholder="Placa" ></Form.Control>
                    </Col>
                </Row>
                <Row style={{marginBottom: '10px'}}>
                    <Col xs={6}>
                        <Form.Select 
                            aria-label="Default select example"
                            value={datosPlaca.marcaId}
                            onChange={e => setDatosPlaca({...datosPlaca, marcaId: e.target.value})}>
                            <option value={0} >Marca</option>
                            { marcas?.map ( item => (
                                <option value={item.id} key={item.id}>{item.nombre}</option>
                            ))
                            }
                        </Form.Select>
                    </Col>
                    <Col xs={6}>
                        <Form.Select aria-label="Default select example">
                            <option value={0}>Modelo</option>
                            { modelos?.map ( item => (
                                <option value={item.id} key={item.id}>{item.nombre}</option>
                            ))
                            }
                        </Form.Select>
                    </Col>
                    
                </Row>
                <Row style={{marginBottom: '10px'}}>
                    <Col xs={6}>
                        <Form.Select aria-label="Default select example">
                            <option>Estado</option>
                            <option value="1">Activo</option>
                            <option value="2">Inactivo</option>

                        </Form.Select>
                    </Col>
                    
                </Row>
                <Row>
                    <Col>
                        <Button variant="primary">
                            Guardar
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default RegistroForm