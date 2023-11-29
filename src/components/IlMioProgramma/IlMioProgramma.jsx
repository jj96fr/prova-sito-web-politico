import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

const IlMioProgramma = () => {
    return (
        <Container>
            <Row className="my-5">
                <Col>
                    <h2>Il Mio Programma</h2>
                    <p>
                        Il mio impegno è per una società più giusta, sostenibile e innovativa. Ecco i pilastri principali del mio programma:
                    </p>
                    <ListGroup>
                        <ListGroup.Item>
                            <strong>Salute e Assistenza Sociale:</strong> Rafforzare il sistema sanitario nazionale, garantire l'accesso universale ai servizi sanitari e promuovere programmi di prevenzione.
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <strong>Educazione e Innovazione:</strong> Investire nell'istruzione, dalla scuola dell'infanzia all'università, e sostenere la ricerca e lo sviluppo tecnologico.
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <strong>Economia e Lavoro:</strong> Creare opportunità di lavoro, supportare le imprese, in particolare le PMI, e promuovere la formazione professionale.
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <strong>Ambiente e Sostenibilità:</strong> Impegnarsi per la tutela dell'ambiente, promuovere energie rinnovabili e politiche per la riduzione dell'inquinamento.
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <strong>Cultura e Turismo:</strong> Valorizzare il patrimonio culturale e artistico, promuovere il turismo sostenibile e supportare le industrie creative.
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <strong>Giustizia e Sicurezza:</strong> Garantire la sicurezza dei cittadini, promuovere la giustizia equa e lotta alla corruzione.
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
};

export default IlMioProgramma;
