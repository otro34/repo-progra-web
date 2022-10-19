import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Weather = (props) => {

    const { title, text, onClick, unit} = props;

    return(<>
    <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>EL CLIMA EN { title }</Card.Title>
            <Card.Text>
                { text } {unit}°
            </Card.Text>
            <Button variant="primary" onClick={() => onClick()}>Cambiar a {unit === 'C'?'F':'C'}°</Button>
        </Card.Body>
    </Card>
    </>)
}

export default Weather