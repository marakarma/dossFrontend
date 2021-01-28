import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card, Tab, Nav, Button,  } from 'react-bootstrap'

export default class ProductSingleComponent extends Component {

   


    render() {


        return (
            <Fragment>
                <Container fluid className="mb-3">
                    <Row>
                        <Col md={6}>

                            <Tab.Container id="" defaultActiveKey="first">
                          
                                <Row className="mb-3 shadow">
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <Card.Img src="https://placeimg.com/600/600/tech"/>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <Card.Img src="https://placeimg.com/600/600/nature"/>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Row>

                                <Row >
                                
                                    <Nav variant="pills" >
                                        <Nav.Item>
                                            <Nav.Link className="nav-picture" eventKey="first">
                                                <Card.Img className="shadow" src="https://placeimg.com/100/100/tech" />
                                            </Nav.Link>
                                        </Nav.Item>

                                        <Nav.Item>
                                            <Nav.Link eventKey="second">
                                                <Card.Img className="shadow" src="https://placeimg.com/100/100/nature"/>
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    
                                </Row>

                        
                            </Tab.Container>


                        </Col>
                        
                        <Col md={6}>
                            <Card className="shadow">
                                <Col md={12}>
                                    <h5 className="">Sony Alpha A7R III Mirroles Digital Camera Body With Accsessories</h5>
                                    
                                        <Col md={12}>
                                            <Row className="mb-3">
                                                <h3 className="judul-title">IDR 12.000.000</h3>
                                                <p className="orange mx-1"> (30 OFF)</p>
                                                <p className="discount mx-1"> IDR 10.000.000</p>
                                            </Row>
                                            <Row className="mb-3">
                                                <Card className="stock">
                                                    <Card.Body className="stock-body">
                                                         Stock: 1
                                                    </Card.Body>
                                                </Card>
                                            </Row>
                                            <Row className="mb-3">

                                                <div className="col-12">

                                                    <div className="d-flex justify-content-center">

                                                        <div className="col-md-4">
                                                            <div className="quantity">
                                                                <button type="submit" className="btn btn-default border">-</button>
                                                                    <input type="text" className="form-control" />
                                                                <button type="submit" className="btn btn-default border">+</button>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-8">
                                                            <div className="d-flex align-items-center">

                                                                <div className="form-group">
                                                                    <button> Add to Cart</button>
                                                                </div>
                                                            
                                                                <div className="form-group">
                                                                    <button> Chat to Whatsapp</button>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>



                                            </Row>
                                        </Col>

                                    
                                </Col>
                            </Card>
                        </Col>

                    </Row>
                </Container>
            </Fragment>
        )
    }
}
