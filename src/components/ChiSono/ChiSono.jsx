import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const ChiSono = () => {
    return (
        <Container>
            <Row className="align-items-center my-5">
                <Col md={6}>
                    <Image src="/politico.jpg" alt="Immagine del Politico" fluid roundedCircle />
                </Col>
                <Col md={6}>
                    <h2>Nome Politico</h2>
                    <p>
                        Nome Politico, nato a Città, Anno, è un politico italiano noto per il suo impegno 
                        nel settore dell'educazione e dell'innovazione tecnologica. Laureato in Scienze Politiche 
                        presso l'Università di XYZ, ha iniziato la sua carriera politica come consigliere comunale 
                        a Città. Nel corso degli anni, è diventato una figura di spicco nel partito ABC, 
                        promuovendo riforme per modernizzare l'istruzione e sostenere l'avanzamento tecnologico.
                    </p>
                    <p>
                        Il suo approccio pragmatico e la sua capacità di connettersi con i giovani elettori 
                        hanno portato a diverse iniziative di successo. Attualmente, Nome Politico si concentra 
                        sul miglioramento dell'accesso all'istruzione digitale e sul sostegno alle startup tecnologiche.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default ChiSono;