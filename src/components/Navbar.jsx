import React from "react";
import { FaFacebook, FaTiktok } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";

  return (
    <div className="flex justify-between">
      <div className="flex flex-col">
        <div>
          {" "}
          <span>Phone:</span>
          <a href="tel:+254 791 555 111">+254 791 555 111</a>
        </div>
        <div>
          {" "}
          <span>Email:</span>
          <a href="mail:cedargarden.ltd@gmail.com">cedargarden.ltd@gmail.com</a>
        </div>
        <div>
          {" "}
          <span>Location:</span>
          <a href="">Kianjai, Meru</a>
        </div>
      </div>
      <div>
        <img src="" alt="Logo" />
      </div>
      <div>
        <FaFacebook />
        <FaTiktok />
        <AiFillInstagram />
      </div>
      <div className="border-2 py-4"></div>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink
                to="messages"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="aboutus"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                ABOUT US
              </NavLink>
            </li>
            <li>
              <NavLink to="services">
                {({ isActive }) => (
                  <span className={isActive ? activeClassName : undefined}>
                    SERVICES
                  </span>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="gallery">
                {({ isActive }) => (
                  <span className={isActive ? activeClassName : undefined}>
                    GALLERY
                  </span>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="location">
                {({ isActive }) => (
                  <span className={isActive ? activeClassName : undefined}>
                    LOCATION
                  </span>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="contactus">
                {({ isActive }) => (
                  <span className={isActive ? activeClassName : undefined}>
                    CONTACT US
                  </span>
                )}
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
