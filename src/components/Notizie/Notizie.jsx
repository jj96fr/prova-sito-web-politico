import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Notizie = () => {
    return (
        <Container>
            <Row className="my-5">
                <Col>
                    <h2>Ultime Notizie</h2>
                    <p>
                        Resta aggiornato con le ultime novità e gli eventi:
                    </p>
                    <Row>
                        {/* Notizia 1: Evento Comunitario di Successo */}
                        <Col md={4} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src="/evento-comunitario.jpg" />
                                <Card.Body>
                                    <Card.Title>Evento Comunitario di Successo</Card.Title>
                                    <Card.Text>
                                        Una grande partecipazione ha caratterizzato il nostro recente evento comunitario nel parco cittadino, con attività che hanno rafforzato il senso di comunità.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Notizia 2: Annuncio di una Nuova Iniziativa Politica */}
                        <Col md={4} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src="/annuncio-politico.jpg" />
                                <Card.Body>
                                    <Card.Title>Annuncio di Nuova Iniziativa</Card.Title>
                                    <Card.Text>
                                        L'annuncio di una nuova iniziativa politica mirata al miglioramento dell'istruzione e della sostenibilità ambientale.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Notizia 3: Leader Politico in un'Attività di Servizio alla Comunità */}
                        <Col md={4} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src="/servizio-comunitario.jpg" />
                                <Card.Body>
                                    <Card.Title>Impegno nella Comunità</Card.Title>
                                    <Card.Text>
                                        Il nostro leader partecipa attivamente al miglioramento del quartiere, dimostrando un forte impegno nel servizio comunitario.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Notizie;
