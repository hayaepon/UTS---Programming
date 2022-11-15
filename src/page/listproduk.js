import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../page/stylelist.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Form from '../page/form';
import Button from 'react-bootstrap/Button';
import slide1 from '../assets/1.png';
import slide2 from '../assets/2.png';
import slide3 from '../assets/3.png';
import slide4 from '../assets/4.png';
import slide5 from '../assets/5.png';
function Listproduk() {
  return (
    
    <div clasName='wrapper'>
        
        <Row>
        <Col>
          <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={slide1} />
                <Card.Body>
                    <Card.Title><b>NASI GORENG</b></Card.Title>
                    <Card.Text>Berbagai varian rasa 
                                 manis dan pedas
                                Harga Rp. 10.000</Card.Text>
                    <Link as={Link} to={"/Form"} className ="btn btn-primary">pesan</Link>
                </Card.Body>
            </Card>
            </Col>
            </Row>
            <Row>
            <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={slide2} />
                <Card.Body>
                    <Card.Title><b>BURGER</b></Card.Title>
                    <Card.Text>Extra daging dengan 
                                lelehan keju 
                                Harga Rp. 10.000</Card.Text>
                    <Link as={Link} to={"/Form"} className ="btn btn-primary">pesan</Link>
                </Card.Body>
            </Card>
            </Col>
            </Row>
            <Row>
                <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={slide3} />
                <Card.Body>
                    <Card.Title><b>TELOR CEPLOK</b></Card.Title>
                    <Card.Text>Rasa yang sehat 
                                menambah cita rasa
                                Harga Rp. 10.000</Card.Text>
                    <Link as={Link} to={"/Form"} className ="btn btn-primary">pesan</Link>
                </Card.Body>
            </Card>
            </Col>
            </Row>
            <Row>
                <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="left" src={slide4} />
                <Card.Body>
                    <Card.Title><b>SATE</b></Card.Title>
                    <Card.Text>Berbagai varian rasa 
                                 manis dan pedas
                                Harga Rp. 10.000</Card.Text>
                    <Link as={Link} to={"/Form"} className ="btn btn-primary">pesan</Link>
                </Card.Body>
            </Card>
            </Col>
            </Row>
            <Row>
                <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={slide5} />
                <Card.Body>
                    <Card.Title><b>TEMPE OREG</b></Card.Title>
                    <Card.Text>Berbagai varian rasa 
                                 manis dan pedas
                                Harga Rp. 10.000</Card.Text>
                    <Link as={Link} to={"/Form"} className ="btn btn-primary">pesan</Link>
                </Card.Body>
            </Card>
            </Col>
            </Row>
        
      </div>
  )}
  

export default Listproduk;