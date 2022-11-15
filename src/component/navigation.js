import { React } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Home from '../page/home';
import About from '../page/about';
import Listproduk from '../page/listproduk';
import Form from '../page/form';
import Contact from '../page/contact';
const Navigation = () => {
    return (
        <Router>
            <div>
                <Navbar bg="black" variant="dark">
                    <Container>
                        <Navbar.Brand as={Link} to={"/Home"}> HAYA-FOOD</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to={"/Home"} >Home</Nav.Link>
                            <Nav.Link as={Link} to={"/Listproduk"}>List produk</Nav.Link>
                            <Nav.Link as={Link} to={"/About"}>About</Nav.Link>
                            <Nav.Link as={Link} to={"/Form"}>Form</Nav.Link>
                            <Nav.Link as={Link} to={"/Contact"}>Contact</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>

            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Listproduk" element={<Listproduk />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Form" element={<Form />} />
                <Route path="/Contact" element={<Contact />} />


            </Routes>
        </Router>
    )
}

export default Navigation
