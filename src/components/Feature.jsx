import React from "react";
import { FaBolt, FaChartBar } from "react-icons/fa6";
import { RiMoneyDollarCircleFill, RiSearchLine, RiShieldLine, RiShieldStarFill } from "react-icons/ri";
import { BiListCheck, BiSolidSearch } from "react-icons/bi";
import { CiDeliveryTruck, CiFilter } from "react-icons/ci";
import { MdOutlinePayment } from "react-icons/md";
import { Link } from "react-router-dom";

const Feature = () => {
  return (
    <section className="why-us features">
      <div className="container mx-auto">
        <div className="headings">
          <small>FEATURE HIGHLIGHTS</small>
          <h2>
            <span>Experience</span> the Difference
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="reason-card">
            <div className="icon-wrap">
                <RiShieldLine />
            </div>
            <div className="reason-dtl">
              <strong>
                <Link to={"/"}>Booking Appointments</Link>
              </strong>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.Pariatur
                ducimus itaque modi dolores consectetur suscipit.
              </p>
            </div>
          </div>
          <div className="reason-card">
            <div className="icon-wrap">
                <BiListCheck />
            </div>
            <div className="reason-dtl">
              <strong>
                <Link to={"/"}>Ordering and Pre-ordering</Link>
              </strong>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.Pariatur
                ducimus itaque modi dolores consectetur suscipit.
              </p>
            </div>
          </div>
          <div className="reason-card">
            <div className="icon-wrap">
                <RiSearchLine />
            </div>
            <div className="reason-dtl">
              <strong>
                <Link to={"/"}>Searching for Product</Link>
              </strong>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.Pariatur
                ducimus itaque modi dolores consectetur suscipit.
              </p>
            </div>
          </div>
          <div className="reason-card">
            <div className="icon-wrap">
                <CiFilter />
            </div>
            <div className="reason-dtl">
              <strong>
                <Link to={"/"}>Filtering products</Link>
              </strong>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.Pariatur
                ducimus itaque modi dolores consectetur suscipit.
              </p>
            </div>
          </div>
          <div className="reason-card">
            <div className="icon-wrap">
                <CiDeliveryTruck />
            </div>
            <div className="reason-dtl">
              <strong>
                <Link to={"/"}>Delivery Service</Link>
              </strong>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.Pariatur
                ducimus itaque modi dolores consectetur suscipit.
              </p>
            </div>
          </div>
          <div className="reason-card">
            <div className="icon-wrap">
                <MdOutlinePayment />
            </div>
            <div className="reason-dtl">
              <strong>
                <Link to={"/"}>Payments</Link>
              </strong>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.Pariatur
                ducimus itaque modi dolores consectetur suscipit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
