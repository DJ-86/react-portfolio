import Carousel from 'react-bootstrap/Carousel';
import image1 from '../images/readme-generator.jpg';
import image2 from '../images/weather.jpg';
import image3 from '../images/global-gazette.jpg';

function IndividualIntervalsExample() {
  return (
    <Carousel variant="dark">
      <Carousel.Item interval={1000}>
        <img
          className="d-block carousel-images"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>README generator</h3>
          <p>A tool for writing README.md files</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block carousel-images"
          src={image2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block carousel-images"
          src={image3}
          alt="Third slide"
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

export default IndividualIntervalsExample;