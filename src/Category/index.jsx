import React, {Fragment, useEffect, useState} from 'react'
import { Container, Row, Col, Card, Accordion, Collapse, Nav } from 'react-bootstrap'
import axios from "axios"
import './category.css';
import NavbarComponent from'../Components/NavbarComponent';
import Footer from'../Components/Footer';
import { faBandAid } from '@fortawesome/free-solid-svg-icons';
import NumberFormat from 'react-number-format';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronDown
} from "@fortawesome/free-solid-svg-icons";

const Category = () => {

    
    const [allCategory, setAllCategory] = useState(undefined)
    const [category, setCategory] = useState(undefined)
    const [products, setProducts] = useState(undefined)
    const [view, setView] = useState(false)


    const getData = async () => {
        try {
            const res = await axios.get("https://api.altoshift.com/v1/categories?token=c471208bd81e9b15621be1a3b214c996")

            const parent = res.data.categories.filter(
                (value) => value.parentCatId == 0, 
            );
            
            setAllCategory(res.data.categories)

            setCategory(parent)
            const res2 = await axios.get("https://api.mobile.doss.co.id/api/v1/product?sort=3&q=canon")
            setProducts(res2.data.data)
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData()    
    }, [])

    return category == undefined || products == undefined || allCategory == undefined ? <div /> : (
        <div>
            <NavbarComponent/>
            
            <Container className="mb-3">
                <Row className="mt-3">

                    <Col md={4} >
                        <Accordion defaultActiveKey="0">
                            <Card className="shadow">
                                <Accordion.Toggle as={Card.Header} eventKey="0" className="mb-1">
                                    Categories
                                </Accordion.Toggle>

                                {
                                    category.map((kategori,index) => {
                                        return(
                                            <Accordion.Collapse key={index} eventKey="0" style={{marginLeft:"1rem"}}>
                                                
                                                <div className="input-group">

                                                        <div className="input-group row ">
                                                            <div className="col-12">
                                                                <div className="">


                                                                    <Accordion defaultActiveKey="0">
                                                                        <Card style={{border:"0"}}>
                                                                            <Accordion.Toggle as={Card.Header} eventKey="0" >
                                                                                <div className="d-flex justify-content-between">
                                                                                    <label className="col-form-label">{kategori.name}</label>
                                                                                    <span>
                                                                                        <FontAwesomeIcon icon={faChevronDown} />
                                                                                    </span>
                                                                                </div>

                                                                            </Accordion.Toggle>

                                                                            {
                                                                                allCategory.filter((value) => {
                                                                                    if (value.parentCatId == kategori.catId) {
                                                                                        return value
                                                                                    }
                                                                                })
                                                                                .map((val) => (

                                                                                    <Accordion.Collapse eventKey="0">
                                                                                        <Card.Body style={{padding:"0rem"}}>
                                                                                            <div className="sub-kategori">
                                                                                                <input type="checkbox" className="mx-1" />
                                                                                                <label className="col-form-label">{val.name}</label>
                                                                                            </div>

                                                                                        </Card.Body>
                                                                                    </Accordion.Collapse>
                                                                                ))
                                                                            }

                                                                        </Card>
                                                                    </Accordion>





                                                                </div>
                                                            </div>
                                                        </div>
                                                    
                                                </div>
                                                
                                            </Accordion.Collapse>
                                        )
                                    })
                                }

                            </Card>
                        </Accordion>
                    </Col>

                    <Col md={8}>

                        <Card>
                            <Card.Header>
                                <Col md={12}>
                                    <div className="d-flex justify-content-end">
                                        <button className="btn btn-primary mx-1" onClick={()=> setView(false)}>Grid</button>
                                        <button className="btn btn-primary mx-1" onClick={()=> setView(true)}>List</button>
                                    </div>
                                </Col>
                            </Card.Header>

                            <Card.Body className="shadow grid-view" style={{display:view && "none"}}>
                                <div className="row">
                                    {
                                        products.map((product,index) => {
                                            return (

                                                <div className="col-4 mb-3" key={index}>
                                                    <div className="card">
                                                        <div className="card-body shadow">
                                                            <img src={product.featured_image} alt="" className="img-fluid"/>
                                                            <p className="product-category-name">{product.name}</p>
                                                            <p className="harga-1">
                                                                    <NumberFormat value={product.regular_price} displayType={'text'} 
                                                                    thousandSeparator="." 
                                                                    decimalSeparator="," 
                                                                    prefix={'IDR '} />   
                                                            </p>
                                                            <p className="harga-2">
                                                                    <NumberFormat value={product.price} displayType={'text'} 
                                                                    thousandSeparator="." 
                                                                    decimalSeparator="," 
                                                                    prefix={'IDR '} />   
                                                            </p>
                                                            <p className="mb-0 mt-4 text-center">
                                                                <button className="btn btn-primary">Add to Cart</button>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </Card.Body>

                            <Card.Body className="shadow list-view" style={{display:!view && "none"}}>
                                <div className="row">
                                    {
                                        products.map((product,index) => {
                                            return (

                                                <div className="col-12 mb-3 " key={index}>
                                                    <div className="card">
                                                        <div className="card-body shadow">
                                                            <div className="row">
                                                                <div className="col-2 produk-img">
                                                                    <img src={product.featured_image} alt="" className="gambar-produk"/>
                                                                </div>
                                                                <div className="col-6 alertdeskrisi-produk">
                                                                    <p className="nama-produk mb-0">{product.name}</p>
                                                                    <p className="harga-coret mb-0">
                                                                        <NumberFormat value={product.regular_price} displayType={'text'} 
                                                                        thousandSeparator="." 
                                                                        decimalSeparator="," 
                                                                        prefix={'IDR '} />                                                                        
                                                                    </p>
                                                                    <p className="harga-pass mb-0">
                                                                        <NumberFormat value={product.price} displayType={'text'} 
                                                                        thousandSeparator="." 
                                                                        decimalSeparator="," 
                                                                        prefix={'IDR '} />
                                                                    </p>
                                                                </div>
                                                                <div className="col-4 button-list">
                                                                    <div className="">
                                                                        <button className="btn btn-primary shadow mb-1">Add to Cart</button>
                                                                        <button className="btn btn-light shadow mb-1">Add to Wishlist</button>
                                                                        <button className="btn btn-light shadow mb-1">View Detail</button>
                                                                    </div>
                                                                </div>
                                                             </div>   


                                                        </div>
                                                     </div>   
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </Card.Body>

                        </Card>

                    
                    </Col>
                </Row>
            </Container>
            
            <Footer/>
        </div>
    )
}

export default Category
