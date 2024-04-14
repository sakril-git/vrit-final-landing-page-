import React, { useRef} from "react";
import Slider from "react-slick";
import testipic1 from "../assets/images/testi-img1.jpg";
import testipic2 from "../assets/images/testi-img2.jpg";
import userimg from "../assets/images/user-img.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Testimonials = () => {
  const sliderRef = useRef(null);
  const settingss = {
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    infinite: true,
    speed: 4000,
    slidesToShow: 2,
    slidesToScroll: 1,
    waitForAnimate: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };
  
  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };

  console.log(sliderRef.current);

  return (
    <section className="testimonials">
      <div className="container mx-auto">
        <div className="head-wrap">
          <div className="headings">
            <small>testimonials</small>
            <h2>
              What our <span>Customers say</span>
            </h2>
          </div>
          <div className="custom-butttons">
            <button className="my-prev" onClick={handlePrevClick}>
              <FaArrowLeft />
            </button>
            <button className="my-next" onClick={handleNextClick}>
              <FaArrowRight />
            </button>
          </div>
        </div>
        <Slider {...settingss} className="slider-two" ref={sliderRef}>
          <div className="testi-card">
            <div className="img-wrap">
              <img src={testipic1} alt="" />
            </div>
            <div className="testi-dtls">
              <div className="user-img">
                <img src={userimg} alt="" />
              </div>
              <div className="testi-des">
                <strong>“They did an amazing work for our home”</strong>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum efficitur justo vitae sapien
                </p>
                <small>john carter, new york</small>
              </div>
            </div>
          </div>
          <div className="testi-card">
            <div className="img-wrap">
              <img src={testipic2} alt="" />
            </div>
            <div className="testi-dtls">
              <div className="user-img">
                <img src={userimg} alt="" />
              </div>
              <div className="testi-des">
                <strong>“They did an amazing work for our home”</strong>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum efficitur justo vitae sapien
                </p>
                <small>john carter, new york</small>
              </div>
            </div>
          </div>
          <div className="testi-card">
            <div className="img-wrap">
              <img src={testipic1} alt="" />
            </div>
            <div className="testi-dtls">
              <div className="user-img">
                <img src={userimg} alt="" />
              </div>
              <div className="testi-des">
                <strong>“They did an amazing work for our home”</strong>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum efficitur justo vitae sapien
                </p>
                <small>john carter, new york</small>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
