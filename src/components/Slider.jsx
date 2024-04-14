import React from "react";
import Slider from "react-slick";
import slideImage from "../assets/images/hero-section.jpg";
import appleImage from "../assets/images/Apple.png";
import googleImage from "../assets/images/Google.png";
import sliderImage2 from "../assets/images/slider-img2.jpg";
import sliderImage3 from "../assets/images/slider-img3.jpg";
import img1 from "../assets/images/round-img1.png";
import img2 from "../assets/images/slider-img3.jpg";
import img3 from "../assets/images/slider-img3.jpg";
import { Link } from "react-router-dom";

function Fade() {
  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    fade: true,
    infinite: true,
    autoplaySpeed: 6000,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };
  return (
    <div className="slider-container relative overflow-hidden">
      <Slider {...settings}>
        <div className="slide-wrap">
          <div className="slide-img">
            <img src={slideImage} />
          </div>
          <div className="s-caption">
            <strong>
              <span>Experience</span> the Future of Female Commerce with <span>Cnex</span>
            </strong>
            <small>
              Order, Preorder, and Book - Your Ultimate Destination for Female
              Products and Services
            </small>
            <div className="pay-mod">
              <div className="img-wrap">
                <img src={appleImage} alt="apple store logo" />
              </div>
              <div className="img-wrap">
                <img src={googleImage} alt="google play logo" />
              </div>
            </div>
          </div>
        </div>
        <div className="slide-wrap">
          <div className="slide-img">
            <img src={sliderImage2} />
          </div>
          <div className="s-caption">
            <strong>
              Where <span>Fashion</span> meets feminity 
            </strong>
            <small>
             Celebrate the essence of womanhood in every styling detail.
            </small>
            <div className="pay-mod">
              <div className="img-wrap">
                <img src={appleImage} alt="apple store logo" />
              </div>
              <div className="img-wrap">
                <img src={googleImage} alt="google play logo" />
              </div>
            </div>
          </div>
        </div>
        <div className="slide-wrap">
          <div className="slide-img">
            <img src={sliderImage3} />
          </div>
          <div className="s-caption">
            <strong>
              Radiate <span>Confidence</span> Radiate Style
            </strong>
            <small>
             Look and Feel best in every moment with Fashion pieces.
            </small>
            <div className="pay-mod">
              <div className="img-wrap">
                <img src={appleImage} alt="apple store logo" />
              </div>
              <div className="img-wrap">
                <img src={googleImage} alt="google play logo" />
              </div>
            </div>
          </div>
        </div>
      </Slider>
      <div className="slide-round">
        <span className="img1"><img src={img1} alt="" /></span>
        <span className="img2"><img src={img1} alt="" /></span>
        <span className="img3"><img src={img1} alt="" /></span>
      </div>
    </div>
  );
}

export default Fade;
