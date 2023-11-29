import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Iniziative = () => {
    return (
        <Container>
            <Row className="my-5">
                <Col>
                    <h2>Iniziative</h2>
                    <p>
                        Ecco alcune delle iniziative chiave che ho promosso e supportato:
                    </p>
                    <Row>
                        {/* Iniziativa per l'Educazione e la Digitalizzazione */}
                        <Col md={4} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src="/educazione.jpg" />
                                <Card.Body>
                                    <Card.Title>Educazione e Digitalizzazione</Card.Title>
                                    <Card.Text>
                                        Promuovere l'innovazione e la digitalizzazione nell'istruzione, equipaggiando le aule con tecnologie avanzate per preparare gli studenti al futuro.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Iniziativa Ambientale */}
                        <Col md={4} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src="/green.jpg" />
                                <Card.Body>
                                    <Card.Title>Ambiente e Sostenibilità</Card.Title>
                                    <Card.Text>
                                        Impegnarsi per la tutela dell'ambiente, promuovere energie rinnovabili e politiche per la riduzione dell'inquinamento per un futuro più verde.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Iniziativa per lo Sviluppo Economico e il Supporto alle PMI */}
                        <Col md={4} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src="/sviluppo.jpg" />
                                <Card.Body>
                                    <Card.Title>Sviluppo Economico e PMI</Card.Title>
                                    <Card.Text>
                                        Sostenere le piccole e medie imprese attraverso incentivi e formazione, incoraggiando la crescita economica e l'innovazione.
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

export default Iniziative;