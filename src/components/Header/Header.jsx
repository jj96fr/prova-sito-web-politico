import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand href="#home">Nome Politico</Navbar.Brand>
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
