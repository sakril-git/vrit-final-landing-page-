import React from "react";
import logoWhite from "../assets/images/logologo-white.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import appleImage from "../assets/images/Apple.png";
import googleImage from "../assets/images/Google.png";
import vritlogo from "../assets/images/vrit-logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-10 lg:gap-y-0">
          <div className="logo-wrap">
            <Link to={"/"}>
              <img src={logoWhite} alt="Site Logo" />
            </Link>
          </div>
          <div className="footer-wrap">
            <h4>Contact Us</h4>
            <strong>Head office:</strong>
            <ul>
              <li>
                <Link to={"/"}>Sankhamul, Baneshwor</Link>
              </li>
              <li>
                <Link to={"/"}>+977 98********</Link>
              </li>
              <li>
                <Link to={"/"}>cnex@gmail.com</Link>
              </li>
            </ul>
            <ul className="social-bar">
              <li>
                <Link to={"/"}>
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <FaTwitter />
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-wrap">
            <h4>Services</h4>
            <strong>Head office:</strong>
            <ul>
              <li>
                <Link to={"/"}>Order and Pre-order</Link>
              </li>
              <li>
                <Link to={"/"}>Beauty service Appointment Booking</Link>
              </li>
              <li>
                <Link to={"/"}>Order and Pre-order</Link>
              </li>
              <li>
                <Link to={"/"}>Order and Pre-order</Link>
              </li>
            </ul>
          </div>
          <div className="footer-wrap">
            <h4>Download our App</h4>
            <div className="img-wrap">
              <Link to={"/"}>
                <img src={appleImage} alt="" />
              </Link>
            </div>
            <div className="img-wrap">
              <Link to={"/"}>
                <img src={googleImage} alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div className="copy-r">
          <strong>
            Copyright © 2024 Cnex. All rights reserved. Powered by: <Link to={"/"}><img src={vritlogo} alt="" /></Link>
          </strong>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
