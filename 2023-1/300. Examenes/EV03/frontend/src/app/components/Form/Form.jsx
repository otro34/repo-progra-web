const { Container, Row, Col, Form, Button } = require("react-bootstrap")
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'
import marcasApi from '../../api/marcas.js'
import modelosApi from '../../api/modelos.js'
import placasApi from '../../api/placas.js'

const RegistroForm = ({id, placa}) => {

    const [ marcas, setMarcas ] = useState([])
    const [ modelos, setModelos ] = useState([])
    const [ datosPlaca, setDatosPlaca ] = useState(placa)

    const router = useRouter()

    const handleCargarPlaca = async () => {
        if (id !== 0 ) {
            const result = await placasApi.findOne(id)
            const rawPlaca = result.data;
            setDatosPlaca({...rawPlaca})
        }
    }

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
        handleFiltrarModelos()
    },[datosPlaca])

    useEffect(() => {
        handleCargarPlaca()
    },[id])

    const handleOnClick = async () => {
        let result = []
        
        if (id === 0)
            result = await placasApi.create(datosPlaca)
        else
            result = await placasApi.update(datosPlaca)
        
        if (result) {
            alert("Datos guardados exitosamente!")
            router.push("/")
        }
        else
            alert("Ha ocurrido un error!")  
            
    } 

    return (
        <>
            <Container>
                <Row style={{marginBottom: '10px'}}>
                    <Col xs={6}>
                        <Form.Control type="text" placeholder="Id" disabled 
                            value={id} ></Form.Control>
                    </Col>
                </Row>
                <Row style={{marginBottom: '10px'}}>
                    <Col xs={6}>
                        <Form.Control type="text" placeholder="Nombre" 
                            value={datosPlaca.nombre} onChange={e => setDatosPlaca({...datosPlaca, nombre: e.target.value})}></Form.Control>
                    </Col>
                    <Col xs={6}>
                        <Form.Control type="text" placeholder="Apellido"
                        value={datosPlaca.apellido} onChange={e => setDatosPlaca({...datosPlaca, apellido: e.target.value})} ></Form.Control>
                    </Col>
                </Row>
                <Row style={{marginBottom: '10px'}}>
                    <Col xs={6}>
                        <Form.Control type="text" placeholder="DNI" 
                        value={datosPlaca.dni} onChange={e => setDatosPlaca({...datosPlaca, dni: e.target.value})}></Form.Control>
                    </Col>
                    <Col xs={6}>
                        <Form.Control type="text" placeholder="Placa" 
                        value={datosPlaca.placa} onChange={e => setDatosPlaca({...datosPlaca, placa: e.target.value})}></Form.Control>
                    </Col>
                </Row>
                <Row style={{marginBottom: '10px'}}>
                    <Col xs={6}>
                        <Form.Select 
                            aria-label="Default select example"
                            value={datosPlaca.marcaId}
                            onChange={e => setDatosPlaca({...datosPlaca, marcaId: (e.target.value * 1) , marcaNombre: e.target[e.target.selectedIndex].text})}>
                            <option value={0} >Marca</option>
                            { marcas?.map ( item => (
                                <option value={item.id} key={item.id}>{item.nombre}</option>
                            ))
                            }
                        </Form.Select>
                    </Col>
                    <Col xs={6}>
                        <Form.Select aria-label="Default select example"
                        value={datosPlaca.modeloId}
                        onChange={e => setDatosPlaca({...datosPlaca, modeloId: (e.target.value * 1), modeloNombre: e.target[e.target.selectedIndex].text})}>
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
                        <Form.Select aria-label="Default select example"
                        value={datosPlaca.activo}
                        onChange={e => setDatosPlaca({...datosPlaca, activo: (e.target.value)})}>
                            <option>Estado</option>
                            <option value={true}>Activo</option>
                            <option value={false}>Inactivo</option>
                        </Form.Select>
                    </Col>
                    
                </Row>
                <Row>
                    <Col>
                        <Button variant="primary" onClick={() => handleOnClick()}>
                            Guardar
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default RegistroForm