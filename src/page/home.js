import React from 'react'
import { Carousel } from 'react-bootstrap';
import Service from './listproduk';
import About from './about';
import Form from './form';
import Button from 'react-bootstrap/Button'
import slide1 from '../assets/slide1.png';
import slide2 from '../assets/slide2.png';
import slide3 from '../assets/slide3.png';
function Home() {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>FOOD IS GOOD</h3>
                        <Button href="form" variant="primary">Beli</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>FOOD IS GOOD</h3>
                        <Button href="form" variant="primary">Beli</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>FOOD IS GOOD</h3>
                        <Button href="form" variant="primary">Beli</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Service />
            <About />
        </>
    )
}

export default Home

