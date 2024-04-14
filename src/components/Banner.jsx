import React from "react";
import appleImage from "../assets/images/Apple.png";
import googleImage from "../assets/images/Google.png";
import bannerimg from "../assets/images/banner-img.jpg"
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="banner" style={{backgroundImage: `url(${bannerimg})`}}>
      <div className="headings">
        <h2>
          Join the <span>Cnex Community</span> Today!
        </h2>
        <p>
          Download CNEX now to explore a world of female-centric products and
          services, and empower yourself with every purchase and booking
        </p>
        <div className="apps">
            <div className="img-wrap">
                <Link>
                    <img src={appleImage} alt="" />
                </Link>
            </div>
            <div className="img-wrap">
                <Link>
                    <img src={googleImage} alt="" />
                </Link>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
