import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Iframe from 'react-iframe';
class Footer extends Component {
    render() {
        return (
            <Fragment>
                    <Container fluid className="bg-dark">
                        <Row>
                        
                            <Col md={6}>
                                <p>col6</p>
                            </Col>
                            
                            <Col md={6}>
                            <p>col6</p>
                                <Iframe
                                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.676899787985!2d106.8097614141371!3d-6.173994162218303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f7957d45c379%3A0x7250ff3d72f5060b!2sDOSS%20Superstore!5e0!3m2!1sen!2sid!4v1611308437106!5m2!1sen!2sid">
                                </Iframe>

                            </Col>

                        </Row>
                    </Container>
            </Fragment>
        )
    }
}

export default Footer;