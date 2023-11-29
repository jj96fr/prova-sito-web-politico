import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contatti = () => {
    return (
        <Container>
            <Row className="my-5">
                <Col md={6}>
                    <h2>Contattaci</h2>
                    <p>
                        Per qualsiasi domanda o informazione, non esitare a contattarci:
                    </p>
                    <ul>
                        <li>Email: politico@example.com</li>
                        <li>Telefono: +39 123 456 7890</li>
                    </ul>
                </Col>
                <Col md={6}>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Indirizzo Email</Form.Label>
                            <Form.Control type="email" placeholder="Inserisci email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicMessage">
                            <Form.Label>Messaggio</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Il tuo messaggio" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Invia
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Contatti;
