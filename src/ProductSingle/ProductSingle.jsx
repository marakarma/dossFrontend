import React, { Component, Fragment } from 'react'
import {} from 'react-bootstrap';
import './ProductSingle.css';
import axios from 'axios';
import NavbarComponent from '../Components/NavbarComponent';
import Footer from '../Components/Footer';
import ProductSingleComponent from '../Components/ProductSingleComponent';
import ProductSingleDetail from '../Components/ProductSingleDetail';

export default class ProductSingle extends Component {
    render() {
        return (

            <Fragment>
                <NavbarComponent />
                <ProductSingleComponent />

                <Footer />
            </Fragment>
        )
    }
}
