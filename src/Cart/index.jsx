import React from 'react'
import { Card, Container, Row, Col} from 'react-bootstrap';
import NavbarComponent from '../Components/NavbarComponent';
import Footer from '../Components/Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTrash,
} from "@fortawesome/free-solid-svg-icons";
export const Cart = () => {
    return (
        <div>
            
            <NavbarComponent />

                <Container className="mt-3 mb-3">
                    <Row>
                        <Col md={12} className="mb-3">
                            <Card>
                                <Card.Body>
                                    <Row>
                                        <div className="col-8">
                                            <div className="d-flex justify-content-around">
                                                <div className="gambar">
                                                    <img src="https://placeimg.com/100/100/any" />
                                                </div>
                                                <div className="description">
                                                    <p className="mb-0">Nama Product</p> 
                                                    <p className="mb-0">Brand</p> 
                                                    <p className="mb-0">Category</p> 
                                                </div>
                                                <di className="harga">
                                                    <p>IDR 12.000.000</p>
                                                </di>
                                            </div>

                                        </div>

                                        <div className="col-4">
                                            <di className="d-flex justify-content-around">
                                                <div className="d-flex">
                                                    <button className="btn btn-light">-</button>
                                                    <input type="text" className="form-control" />
                                                    <button className="btn btn-light">+</button>
                                                </div>
                                                <div className="action-button">
                                                    <button className="btn btn-light"><FontAwesomeIcon icon={faTrash} /></button>
                                                </div>
                                            </di>
                                        </div>
                                    </Row>

                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>

                    <Row>
                        <Col md={12}>
                            <Card>
                                <Card.Body>
                                    Continue Shoping
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                    
            <Footer />

        </div>
    )
}

