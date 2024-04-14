import React from "react";
import { FaBolt, FaChartBar } from "react-icons/fa6";
import { RiMoneyDollarCircleFill, RiShieldStarFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Reason = () => {
  return (
    <section className="why-us">
      <div className="container mx-auto">
        <div className="headings">
          <h2>
            Why <span>Cnex ?</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="reason-card">
            <div className="icon-wrap">
              <FaBolt />
            </div>
            <div className="reason-dtl">
              <strong>
                <Link to={"/"}>Fast</Link>
              </strong>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.Pariatur
                ducimus itaque modi dolores consectetur suscipit.
              </p>
            </div>
          </div>
          <div className="reason-card">
            <div className="icon-wrap">
                <FaChartBar />
            </div>
            <div className="reason-dtl">
              <strong>
                <Link to={"/"}>Easy</Link>
              </strong>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.Pariatur
                ducimus itaque modi dolores consectetur suscipit.
              </p>
            </div>
          </div>
          <div className="reason-card">
            <div className="icon-wrap">
                <RiMoneyDollarCircleFill />
            </div>
            <div className="reason-dtl">
              <strong>
                <Link to={"/"}>Affordable</Link>
              </strong>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.Pariatur
                ducimus itaque modi dolores consectetur suscipit.
              </p>
            </div>
          </div>
          <div className="reason-card">
            <div className="icon-wrap">
                <RiShieldStarFill />
            </div>
            <div className="reason-dtl">
              <strong>
                <Link to={"/"}>Legal Support</Link>
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

export default Reason;
