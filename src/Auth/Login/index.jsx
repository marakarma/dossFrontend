import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card, CardGroup, Form} from 'react-bootstrap';

export default class Login extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col>
                            <Row className="justify-content-center mt-3">
                                <Col md={6}>
                                    <Card>
                                        <Card.Body className="shadow">
                                            <h2>Form Login</h2>
                                            
                                            <div className="" action="" method="post">

                                                <div className="form-group row">
                                                    <label className="col-4">Username</label>
                                                    <div className="col-8">
                                                        <input type="email" className="form-control" name="" id="" />
                                                    </div>
                                                </div>

                                                <div className="form-group row">
                                                    <label className="col-4">Password</label>
                                                    <div className="col-8">
                                                        <input type="password" className="form-control" name="" id="" />
                                                    </div>
                                                </div>

                                            </div>

                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}


