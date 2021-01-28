import React, { Component, Fragment } from "react";
import FiturCategory from "../Components/FiturCategory";
import NavbarComponent from "../Components/NavbarComponent";
import SliderCarousel from "../Components/SliderCarousel";
import TitleMenuBar from "../Components/TitleMenuBar";
import HomeNewProduct from "../Components/HomeNewProduct";
import HomePromoProduct from "../Components/HomePromoProduct";
import HomeBestSellerProduct from "../Components/HomeBestSellerProduct";
import Footer from "../Components/Footer";
import './Home.css';
import HomeBrand from "../Components/HomeBrand";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <NavbarComponent />
        {/* <TitleMenuBar /> */}
        <SliderCarousel />
        {/* <FiturCategory /> */}
        <HomeNewProduct />
        {/* <HomePromoProduct /> */}
        {/* <HomeBestSellerProduct /> */}
        <HomeBrand />
        <Footer />
      </Fragment>
    );
  }
}

export default Home;
