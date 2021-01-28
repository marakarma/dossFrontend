import React, { Component, Fragment } from "react";
import { Carousel } from "react-bootstrap";
import axios from "axios";

class SliderCarousel extends Component {
  state = {
    post: [],
  };

  componentDidMount() {
    axios.get("https://api.mobile.doss.co.id/api/v1/banner/1")
      .then((result) => {
        this.setState({
          post: result.data.data.items
        });
      });
  }

  render() {
    return (
      <Fragment>
        <Carousel className="mb-3 shadow">
          {this.state.post.map(post => {
            return (
              <Carousel.Item key={post.id}>
                <img
                  className="d-block w-100"
                  src={post.image}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>{post.title}</h3>
                  <p>
                    {post.activity_param.productName}
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Fragment>
    );
  }
}

export default SliderCarousel;
