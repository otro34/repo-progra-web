import Carousel from 'react-bootstrap/Carousel';

const Carrousel = () => {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-80"
          src="img/01.jpg"
          alt="First slide"
          height="900"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-80"
          src="img/02.jpg"
          alt="Second slide"
          height="900"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-80"
          src="img/03.jpg"
          alt="Third slide"
          height="900"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrousel;