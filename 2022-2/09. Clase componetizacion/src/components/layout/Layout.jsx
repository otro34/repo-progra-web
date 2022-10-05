import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Header from './Header'

const Layout = (props) => {

    return (<Container fluid className="w-80">
        <Row xs={1} className="justify-content-md-center w-80">
            <Col >
                <Header></Header>
            </Col>
        </Row>
        <Row className="justify-content-md-center w-80">
            <Col >
                {props.main}
            </Col>
        </Row>
    </Container>)
}

export default Layout