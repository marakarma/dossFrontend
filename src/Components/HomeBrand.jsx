import React, { Component } from "react";
import { Container, Card } from "react-bootstrap";
import axios from 'axios';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class HomeBrand extends Component {

  state = {
    brand:[],
  };

  componentDidMount(){
    axios.get('https://api.mobile.doss.co.id/api/v1/brand')
    .then((result => {
        this.setState({
          brand: result.data.data
        })
    }))
  }

  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <Container className="mb-5">
        <h3 className="judul-title"> Brand </h3>
        <Slider {...settings}>

          {
            this.state.brand.map(brand =>{
              return(
                <div className="col">
                  <div className="card">
                    <div className="card-body">
                      <Card.Img className="homebrand-img" src={brand.image} />
                    </div>
                  </div>
                </div>
              )
            })
          }

        </Slider>
      </Container>
    );
  }
}