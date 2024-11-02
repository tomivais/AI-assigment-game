// import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card'; // Tuodaan Card
import Button from 'react-bootstrap/Button'; // Tuodaan Buttonimport ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Row from 'react-bootstrap/Row'; // Tuodaan Row
import Col from 'react-bootstrap/Col'; // Tuodaan Row
import NavigationBar from './NavigationBar.jsx'; // Varmista, että polku on oikein
import Footer from './Footer.jsx';
import { useEffect } from "react";



const Home = () => {


const navigate = useNavigate();



useEffect(() => {
    sessionStorage.clear();
}, [])




const handleStart = () => {
    navigate('/Game');
   
};

return (
    <>
        <NavigationBar /> {/* Lisää NavigationBar-komponentti */}
        <div className="main-content" style={{ minHeight: '70vh', padding: '2rem 0' }}> {/* Lisätään padding ja minHeight */}
            <div className="d-flex justify-content-around">
                <Card style={{ width: '100%' }}>
                    <Card.Body>
                        <Card.Title className="card_custom-title">Welcome! </Card.Title> {/* Näytetään email */}
                        <Card.Text className='card_info'>
                            Start your try!
                        </Card.Text>
                        <div className="d-flex justify-content-center">  {/* Keskittää painikkeet */}
                            <ButtonGroup aria-label="Basic example">
                                <Button variant="success" onClick={handleStart} >Start</Button>
                                {/* <Button variant="warning" onClick={handlePause}disabled={isPauseDisabled}>Pause</Button> */}
                            </ButtonGroup>
                        </div>
    
                        <Row className="d-flex justify-content-center">
                            <Col xs={12} className="text-center">
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </div>
        </div >
        <Footer /> {/* Lisää NavigationBar-komponentti */}
    </>
);
};
export default Home;