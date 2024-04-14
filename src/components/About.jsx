import React from "react";
import aboutimg1 from "../assets/images/about-img1.jpg";
import aboutimg2 from "../assets/images/about-img2.jpg";
import aboutimg3 from "../assets/images/about-img3.jpg";
import aboutimg4 from "../assets/images/about-img4.jpg";
import aboutimg5 from "../assets/images/about-img5.jpg";
import aboutimg6 from "../assets/images/about-img6.jpg";
import aboutimg7 from "../assets/images/about-img7.jpg";
import aboutimg8 from "../assets/images/about-img8.jpg";
import storyimg from "../assets/images/story-img.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section className="about">
        <div className="container mx-auto">
          <div className="headings">
            <small>About us</small>
            <h2>
              <span>Pioneering Female</span>-Centric Solutions for the Modern
              Woman
            </h2>
          </div>
          <div className="grid grid-cols-2  lg:grid-cols-4 gap-6">
            <div className="about-img grid order-1 grid-cols-1 gap-6">
              <div className="img-wrap">
                <figure>
                  <img src={aboutimg1} alt="" />
                </figure>
              </div>
              <div className="img-wrap">
                <figure>
                  <img src={aboutimg2} alt="" />
                </figure>
              </div>
            </div>
            <div className="about-img order-3 col-span-2 grid grid-cols-2 gap-6 lg:order-2">
              <div className="img-wrap">
                <figure>
                  <img src={aboutimg3} alt="" />
                </figure>
              </div>
              <div className="img-wrap">
                <figure>
                  <img src={aboutimg4} alt="" />
                </figure>
              </div>
              <div className="img-wrap col-span-2">
                <figure>
                  <img src={aboutimg5} alt="" />
                </figure>
              </div>
            </div>
            <div className="about-img order-2 grid grid-cols-1 gap-6 lg:order-3">
              <div className="img-wrap">
                <figure>
                  <img src={aboutimg6} alt="" />
                </figure>
              </div>
              <div className="img-wrap">
                <figure>
                  <img src={aboutimg7} alt="" />
                </figure>
              </div>
              <div className="img-wrap">
                <figure>
                  <img src={aboutimg8} alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="story">
        <div className="container mx-auto">
          <div className="headings">
            <h2>
              Our <span>Story</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="img-wrap col-start-1 col-end-6 hidden lg:block">
              <img src={storyimg} alt="" />
            </div>
            <div className="story-wrap lg:col-start-6 lg:col-end-13">
              <p className="mb-5">
                At the beginning, it was just the two of them, working out of a
                small office space. They were determined to provide personalized
                service to their clients and build lasting relationships. They
                worked tirelessly, often working long hours and weekends to
                ensure that their clients' needs were met.
              </p>
              <p>
                Their hard work paid off, and soon their business began to grow.
                They hired additional staff members and expanded their service
                offerings to include property management and real estate
                investments
              </p>
              <p>
                Over the years, their business has continued to grow, and they
                have helped countless clients buy, sell, and manage their real
                estate investments. Today, their business is a respected name in
                the real estate industry, known for its exceptional service and
                commitment to its clients.
              </p>
              <p>
                As they look to the future, John and Jane remain dedicated to
                their clients and to providing the best possible service in the
                real estate industry. They are excited to continue to grow and
                evolve their business, and to help even more clients achieve
                their real estate goals.
              </p>
              <Link to={"/"} className="site-btn mt-5">get in touch</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
