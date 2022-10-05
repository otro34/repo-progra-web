import BsButton from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components'
import StyledCardImg from './styles'

const StyledButton = styled(BsButton)`
    color: black;
    background-color: #d1e7dd; 
    --bs-btn-border-color: none;
`

const ProductCard = (props) => {
    const { srcimg, title, text } = props;
    return (
        <Card style={{ width: '18rem', 'margin-left': '2rem' }}>
        <StyledCardImg variant="top" src={ srcimg } />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {text}
          </Card.Text>
          <StyledButton>Go somewhere</StyledButton>
        </Card.Body>
      </Card>
    )
}

export default ProductCard