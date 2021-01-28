import React, { Component, Fragment } from "react";
import { Card, ListGroup, ListGroupItem, Col, Row, Container, Button } from "react-bootstrap";
import axios from 'axios';
import { Link } from "react-router-dom";
import NumberFormat from 'react-number-format';
import {useHistory} from'react-router-dom';

export default class HomeNewProduct extends Component {

  state = {
    product: []
  };

  componentDidMount() {
    axios.get("https://api.mobile.doss.co.id/api/v1/product/lists/latestproduct?page=1")
      .then((result) => {
        this.setState({
          product: result.data.data
        });
      });
  }
  
  

  
  toDetail(id){
  };

  render() {
    return (
      <Fragment>
        <Container>
          <h3 className="judul-title">New Product</h3>
          <Card className="shadow mb-3">
            <Col md={12}>
              <Row>

                {
                  this.state.product.map(product =>{
                    return(
                      <Col md={3} key={product.id} className="mb-3">
                      <Card className="product shadow" style={{border:"0"}}>
                        <Card.Img className="product-image"
                          variant="top"
                          src={product.images[0]}
                        />
                        <Card.Body>
                          <p className="product-name">{product.name}</p>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                        
                          <div className="pruduct-price2">
                            <NumberFormat value={product.regular_price} displayType={'text'} 
                                          thousandSeparator="." 
                                          decimalSeparator="," 
                                          prefix={'IDR '} />
                          </div>
                          <div className="pruduct-price1">
                            <NumberFormat value={product.price} displayType={'text'} 
                                          thousandSeparator="." 
                                          decimalSeparator="," 
                                          prefix={'IDR '} />
                          </div>

                        </ListGroup>
                        <Card.Body className="d-flex justify-content-center">
                          <Link className="btn btn-primary" to="/product-single"> Add to Cart</Link>
                        </Card.Body>

                          {/* <Card.Text>
                            {product.description}
                          </Card.Text> */}
                      </Card>
                    </Col>

                    )
                  })
                }


              
              </Row>
            </Col>
          </Card>
        </Container>
      </Fragment>
    );
  }
}
