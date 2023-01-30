import React, { useState,useEffect  } from "react";
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar';
import home from '../Imgs/home.png';
import book from '../Imgs/book.png';
import cake from '../Imgs/cake.png';


import Confetti from "react-confetti";



const Home = () => {

const [showConfetti, setShowConfetti] = useState(false);

//Usando UseEffect para que duracion de animacion confetti no se infinita, duracion de 5 segundos //
useEffect(() => {
    if (showConfetti) {
      const timeoutId = setTimeout(() => setShowConfetti(false), 5000);
      return () => clearTimeout(timeoutId);
    }
  }, [showConfetti]);

    return (
        <Navbar bg="danger" variant="dark">
            <Container>
                <Link to="/" className="text-white ms-3 text-decoration-none">
                    <img src={home} alt="Home icon" /> Home
                </Link>
                <Link to="/contacto" className="text-white ms-3 text-decoration-none">
                    <img src={book} alt="Book icon" /> Contacto
                </Link>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text onClick={() => setShowConfetti(true)} style={{ cursor: "pointer" }}>
                        Happy Cake <img src={cake} alt="Cake icon" />
                        {showConfetti && <Confetti />}
                    </Navbar.Text>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Home