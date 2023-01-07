import React, { Component } from "react";
import Slider from "react-slick";

import './main.css'
import corusel from '../../assets/unsplash_11SgH7U6TmI.png'
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
        <main className="main">
        <div className="container">
        <Slider {...settings}>
          <div className="wid">
            <img src={corusel} alt="" />
          </div>
          <div>
            <img src={corusel} alt="" />
          </div>
          <div>
            <img src={corusel} alt="" />
          </div>
          <div>
            <img src={corusel} alt="" />
          </div>
        </Slider>
      </div>
    </main>
    );
  }
}