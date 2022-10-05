import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from './Alert'
import ProductCard from './ProductCard'

const Home = () => {

const data = [{
    title: "Assassin's Creed",
    srcimg: "img/game01.JPG",
    text: "Assassin's is a long game!!"
},
{
    title: "Mario Galaxy",
    srcimg: "img/game02.jpg",
    text: "This is an awesome game!!"
},
{
    title: "Elden Ring",
    srcimg: "img/game03.jpg",
    text: "This is a hard game!"
}]

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
        <Row>
            <ProductCard {...data[0]}/>
            <ProductCard title={data[1].title} srcimg={data[1].srcimg} text={data[1].text}/>
            <ProductCard {...data[2]}/>
        </Row>
    </Container>
)
}

export default Home;