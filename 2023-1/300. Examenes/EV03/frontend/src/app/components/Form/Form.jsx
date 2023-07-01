const { Container, Row, Col, Form, Button } = require("react-bootstrap")

const RegistroForm = (props) => {

    const id = props.id || 0;

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
                        <Form.Select aria-label="Default select example">
                            <option>Marca</option>
                            <option value="1">Chevrolet</option>
                            <option value="2">Ford</option>
                            <option value="3">Dodge</option>
                        </Form.Select>
                    </Col>
                    <Col xs={6}>
                        <Form.Select aria-label="Default select example">
                            <option>Modelo</option>
                            <option value="1">Camaro</option>
                            <option value="2">Ford</option>
                            <option value="3">Dodge</option>
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