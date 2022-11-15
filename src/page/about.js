import React from 'react'
import { Container, Card, Button } from 'react-bootstrap'
import profilimg from '../assets/PROFIL.png';
function About() {
    return (
        <Container className='mt-5'>
            <Card style={{ width: '100%' }}>
                <Card.Img className="d-block w-100" variant="top" src={profilimg}/>
                <Card.Body>
                    <Card.Title className='text-center p-3'><b>HAYA-FOOD</b></Card.Title>
                    <Card.Text className='text-center p-3'>
                        Sebuah website untuk memesan makanan ala rumahan yang disajikan dengan menarik
                        <br />
                        dan tentunya ramah dikantong. rasa yang lezat dan berkualitas
                        <br />
                        menyediakan berbagai macam makanan dan bisa didapatkan dengan mudah.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default About
