import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from './Alert'

const Home = () => {
return (
    <Container>
        <Row xs="auto">
            <Col>
                <Alert />
            </Col>
        </Row>
        <Row xs="auto">
            <Col>
            <h3>
                Disponible hoy!
            </h3>
            </Col>
        </Row>
    
            
        
    </Container>
)
}

export default Home;