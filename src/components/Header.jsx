import React, { useState } from "react";
import siteLogo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Header = () => {
    const [nav, setNav] = useState(false);

    // Toggle function to handle the navbar's display
    const handleNav = () => {
      setNav(!nav);
    };
  return (
    <>
      <header className="bg-white py-[15px]">
        <div className="container mx-auto">
          <div className="header-wrap grid grid-cols-2 lg:grid-cols-4 gap-x-4 items-center justify-between auto-cols-auto">
            <div className="logo-wrap order-1 ">
              <Link to={"/"}>
                <img src={siteLogo} alt="main logo" />
              </Link>
            </div>
            <div className="nav-sec lg:col-span-2 order-3 lg:order-2 text-right">
              <ul className="navbar hidden nav-bar lg:block">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/about"}>About Us</Link>
                </li>
                <li>
                  <Link>FAQ</Link>
                </li>
                <li>
                  <Link>Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="download-btn text-right order-2 lg:order-3">
              <Link>Download Now</Link>
            </div>
            <div onClick={handleNav} className="mob-menu block lg:hidden">
                {nav ? (
                  <AiOutlineClose size={20} />
                ) : (
                  <AiOutlineMenu size={20} />
                )}
              </div>
              <ul
                className={
                  nav
                    ? "fixed mob-nav md:hidden left-0 top-0 w-[50%] h-full border-r ease-in-out duration-500"
                    : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
                }
              >
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/about"}>About Us</Link>
                </li>
                <li>
                  <Link>FAQ</Link>
                </li>
                <li>
                  <Link>Contact Us</Link>
                </li>
              </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
