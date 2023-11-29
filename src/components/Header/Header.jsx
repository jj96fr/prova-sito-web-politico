import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <Container>
                {/* Inserisci il logo qui */}
                <Navbar.Brand href="#home">
                <img
        src="/logo767.png" // Assicurati che questo sia il percorso corretto
        height="50"
        className="d-inline-block align-top"
        alt="Logo del Partito"
        style={{ backgroundColor: 'transparent' }} // Assicura trasparenza
    />
                    {' '}Nome del Partito
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#chi-sono">Chi Sono</Nav.Link>
                        <Nav.Link href="#il-mio-programma">Il Mio Programma</Nav.Link>
                        <Nav.Link href="#iniziative">Iniziative</Nav.Link>
                        <Nav.Link href="#notizie">Notizie</Nav.Link>
                        <Nav.Link href="#contatti">Contatti</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
