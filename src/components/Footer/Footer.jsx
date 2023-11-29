import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-light text-center text-lg-start">
            <Container>
                <Row>
                    <Col lg={12} className="py-3">
                        {/* Icone dei Social Media */}
                        <a href="https://www.instagram.com" className="me-4 text-reset">
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                        <a href="https://www.facebook.com" className="me-4 text-reset">
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>
                        <a href="https://www.linkedin.com" className="me-4 text-reset">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
