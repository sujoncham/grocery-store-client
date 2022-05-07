import React from "react";
import { Carousel } from "react-bootstrap";


const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/gz0wyhN/delivery.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 className="text-warning">Fast Delivery</h1>
          <h4 className="text-warning">We have open a delivery customer service</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/h2D3k0p/service.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1 className="text-warning">Fast Service</h1>
          <h4 className="text-warning">We are delivering a fast customer service</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/wC6ZFqH/quality.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1 className="text-warning">Good Quality</h1>
          <h4 className="text-warning">We are delivering a good quality service</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/Lgsw9j7/customer.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1 className="text-warning">Customer Service</h1>
          <h4 className="text-warning">We have open a customer service</h4>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
