import React from "react";
import { FaFacebook, FaTiktok } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/Logo.svg";

const Navbar = () => {
  

  let activeLink = "text-primary-color hover:opacity-50";
  let normalLink = "hover:opacity-50";

  return (
    <header className="w-full">
      <div className="flex flex-col w-4/5 mx-auto justify-between  font-jost">
        <div className="flex justify-between pb-6 ">
          <div className="flex flex-col text-left gap-3">
            <div>
              {" "}
              <span className="font-bold">Phone: </span>
              <a href="tel:+254 791 555 111">+254 791 555 111</a>
            </div>
            <div>
              {" "}
              <span className="font-bold">Email: </span>
              <a href="mail:cedargarden.ltd@gmail.com">
                cedargarden.ltd@gmail.com
              </a>
            </div>
            <div>
              <p><span className="font-bold">Location: </span>Kianjai, Meru</p>
            </div>
          </div>
          <div>
            <img src={Logo} alt="Logo" />
          </div>
          <div className="flex justify-between gap-4">
            <FaFacebook color="#287216" />
            <FaTiktok color="#287216" />
            <AiFillInstagram color="#287216" />
          </div>
        </div>

        <div className="border-t" />

        <div className="flex mx-auto pt-6">
          <nav>
            <ul class="flex items-center justify-center ">
              <li class="relative group px-3 py-2">
                {/* <button class="hover:opacity-50 cursor-default">
                  Products
                </button> */}
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  
                >
                  HOME
                </NavLink>
              </li>
              <li class="relative group px-3 py-2">
                {/* <button class="hover:opacity-50 cursor-default">
                  Products
                </button> */}
                <NavLink
                  to="/aboutus"
                  className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  
                >
                  ABOUT US
                </NavLink>
              </li>
              <li class="relative group px-3 py-2">
                <NavLink
                  to="/services"
                  className={({ isActive }) => (isActive ? activeLink : normalLink)}
                 
                >
                  SERVICES
                </NavLink>
                <div class="absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[260px] transform">
                  <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                    <div class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm"></div>
                    <div class="relative z-10">
                      <ul class="mt-4 flex flex-col align-items-center gap-2 text-left text-gray-800 divide-y divide-gray-300">
                        <li>
                          <a
                            href="#"
                            class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                          >
                            RESTAURANT AND BAR
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                          >
                            KIDS PLAYGROUND
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                          >
                            SWIMMING
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                          >
                            MEETINGS
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                          >
                            EVENTS
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                          >
                            ACCOMODATION
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                          >
                            PHOTOGRAPHY
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li class="relative group px-3 py-2">
                <NavLink
                  to="/gallery"
                  className={({ isActive }) => (isActive ? activeLink : normalLink)}
                >
                  GALLERY
                </NavLink>
              </li>
              <li class="relative group px-3 py-2">
                <NavLink
                  to="/location"
                  className={({ isActive }) => (isActive ? activeLink : normalLink)}
                >
                  LOCATION
                </NavLink>
              </li>
              <li class="relative group px-3 py-2">
                <NavLink
                  to="/contactus"
                  className={({ isActive }) => (isActive ? activeLink : normalLink)}
                >
                  CONTACT US
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* <nav >
            <ul className="flex mr-4 text-center display-block">
              <li>
                <NavLink
                  to="/"
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
          </nav> */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
