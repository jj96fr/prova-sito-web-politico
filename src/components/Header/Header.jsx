import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';

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
                    <Link to="chi-sono" smooth={true} duration={500} className="nav-link">Chi Sono</Link>
                        <Link to="il-mio-programma" smooth={true} duration={500} className="nav-link">Il Mio Programma</Link>
                        <Link to="iniziative" smooth={true} duration={500} className="nav-link">Iniziative</Link>
                        <Link to="notizie" smooth={true} duration={500} className="nav-link">Notizie</Link>
                        <Link to="contatti" smooth={true} duration={500} className="nav-link">Contatti</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
