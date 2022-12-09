import React, { useState } from "react";
import { FaFacebook, FaTiktok } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/images/LogoMain.png";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoLogoWhatsapp } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    console.log("clicked");
    setShowMenu(!showMenu);
  };

  let activeLink = "text-primary-color hover:opacity-50";
  let normalLink = "hover:opacity-50";

  return (
    <header className="w-full pt-6">
      <div className=" flex justify-between align-middle md:invisible w-5/6 mx-auto">
        <motion.img
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          src={Logo}
          alt="Logo"
          className="h-16 w-16"
        />
        <GiHamburgerMenu onClick={toggleMenu} />
      </div>

      <div
        className="absolute bg-white/95 top-30 sm:flex p-5 sm:p-0 w-[100%]"
        style={showMenu ? { display: "block" } : { display: "none" }}
      >
        <div className="flex flex-col w-11/12 mx-auto justify-between gap-8  font-jost">
          <div className="mt-10">
            <RxCross2 onClick={toggleMenu} className="h-10 w-10" />
          </div>

          <div className="flex flex-col justify-between pb-6 ">
            <div className="flex justify-between mb-10">
              <motion.div
                initial={{
                  x: -100,
                  opacity: 0,
                  scale: 0.5,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 1.5,
                }}
                className="flex flex-col text-left gap-3"
              >
                <div>
                  <span className="sm:text-xs md:text-base font-bold">Phone: </span>
                  <a className="sm:text-xs md:text-base" href="tel:+254 791 555 111">+254 791 555 111</a>
                </div>
                <div>
                  <span className="font-bold">Email: </span>
                  <a className="sm:text-sm md:text-base " href="mail:cedargarden.ltd@gmail.com">
                    cedargarden.ltd@gmail.com
                  </a>
                </div>
                <div>
                  <p className="sm:text-sm md:text-base ">
                    <span className="sm:text-sm md:text-base font-bold">Location: </span>Kianjai, Meru
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{
                  x: 100,
                  opacity: 0,
                  scale: 0.5,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 1.5,
                }}
                className="flex justify-evenly gap-8"
              >
                <a
                  href="https://www.facebook.com/profile.php?id=100077381140421"
                  target="_blank"
                >
                  <FaFacebook color="#287216" fontSize="1.5rem" />
                </a>
                <a
                  href="tel:+254791555111
"
                >
                  <IoLogoWhatsapp color="#287216" fontSize="1.5rem" />
                </a>
                <a
                  href="https://www.instagram.com/cedargardensandhotel/"
                  target="_blank"
                >
                  <AiFillInstagram color="#287216" fontSize="1.5rem" />
                </a>
              </motion.div>
            </div>

            <motion.div
              className="border-t"
              initial={{
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            />

            <div className="flex  mx-auto pt-6">
              <motion.nav
                initial={{
                  y: -30,
                  opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <ul className="flex flex-col items-center justify-center xl:text-base lg:text-md md:text-md">
                  <li className="relative group px-5 py-2">
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive ? activeLink : normalLink
                      }
                    >
                      HOME
                    </NavLink>
                  </li>
                  <li className="relative group px-5 py-2">
                    <NavLink
                      to="/aboutus"
                      className={({ isActive }) =>
                        isActive ? activeLink : normalLink
                      }
                    >
                      ABOUT US
                    </NavLink>
                  </li>
                  <li className="relative group px-5 py-2">
                    <NavLink
                      to="/services"
                      className={({ isActive }) =>
                        isActive ? activeLink : normalLink
                      }
                    >
                      SERVICES
                    </NavLink>
                    <div className="absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[260px] transform">
                      <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                        <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm"></div>
                        <div className="relative z-10">
                          <ul className="mt-4 flex flex-col align-items-center gap-2 text-left text-gray-800 divide-y divide-gray-300">
                            <li>
                              <Link
                                to="/services/barandrestaurant"
                                className="bg-transparent bg-clip-text text-black hover:text-primary-color py-1 block"
                              >
                                RESTAURANT AND BAR
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/services/kidsplayground"
                                className="bg-transparent bg-clip-text text-black hover:text-primary-color py-1 block"
                              >
                                KIDS PLAYGROUND
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/services/swimming"
                                className="bg-transparent bg-clip-text text-black hover:text-primary-color py-1 block"
                              >
                                SWIMMING
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/services/meetings"
                                className="bg-transparent bg-clip-text text-black hover:text-primary-color py-1 block"
                              >
                                MEETINGS
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/services/parties"
                                className="bg-transparent bg-clip-text text-black hover:text-primary-color py-1 block"
                              >
                                PARTIES
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/services/accomodation"
                                className="bg-transparent bg-clip-text text-black hover:text-primary-color py-1 block"
                              >
                                ACCOMODATION
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/services/photography"
                                className="bg-transparent bg-clip-text text-black hover:text-primary-color py-1 block"
                              >
                                PHOTOGRAPHY
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="relative group px-5 py-2">
                    <NavLink
                      to="/gallery"
                      className={({ isActive }) =>
                        isActive ? activeLink : normalLink
                      }
                    >
                      GALLERY
                    </NavLink>
                  </li>
                  <li className="relative group px-5 py-2">
                    <NavLink
                      to="/location"
                      className={({ isActive }) =>
                        isActive ? activeLink : normalLink
                      }
                    >
                      LOCATION
                    </NavLink>
                  </li>
                  <li className="relative group px-5 py-2">
                    <NavLink
                      to="/contactus"
                      className={({ isActive }) =>
                        isActive ? activeLink : normalLink
                      }
                    >
                      CONTACT US
                    </NavLink>
                  </li>
                </ul>
              </motion.nav>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="flex flex-col w-11/12 mx-auto justify-between  font-jost">
          <div className="flex justify-between pb-6 ">
            <motion.div
              initial={{
                x: -100,
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                x: 0,
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1.5,
              }}
              className="flex flex-col text-left gap-3"
            >
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
                <p>
                  <span className="font-bold">Location: </span>Kianjai, Meru
                </p>
              </div>
            </motion.div>
            <div>
              <motion.img
                initial={{
                  opacity: 0,
                  scale: 0.5,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 1.5,
                }}
                src={Logo}
                alt="Logo"
              />
            </div>
            <motion.div
              initial={{
                x: 100,
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                x: 0,
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1.5,
              }}
              className="flex justify-between gap-8"
            >
              <a
                href="https://www.facebook.com/profile.php?id=100077381140421"
                target="_blank"
              >
                <FaFacebook color="#287216" fontSize="1.5em" />
              </a>
              <a
                href="tel:+254791555111
"
              >
                <IoLogoWhatsapp color="#287216" fontSize="1.5em" />
              </a>
              <a
                href="https://www.instagram.com/cedargardensandhotel/"
                target="_blank"
              >
                <AiFillInstagram color="#287216" fontSize="1.5em" />
              </a>
            </motion.div>
          </div>
          <motion.div
            className="border-t"
            initial={{
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          />
          <div className="flex mx-auto pt-6">
            <motion.nav
              initial={{
                y: -30,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <ul className="flex items-center justify-center xl:text-base lg:text-md md:text-md">
                <li className="relative group px-5 py-2">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    HOME
                  </NavLink>
                </li>
                <li className="relative group px-5 py-2">
                  <NavLink
                    to="/aboutus"
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    ABOUT US
                  </NavLink>
                </li>
                <li className="relative group px-5 py-2">
                  <NavLink
                    to="/services"
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    SERVICES
                  </NavLink>
                  <div className="absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[260px] transform">
                    <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                      <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm"></div>
                      <div className="relative z-10">
                        <ul className="mt-4 flex flex-col align-items-center gap-2 text-left text-gray-800 divide-y divide-gray-300">
                          <li>
                            <Link
                              to="/services/barandrestaurant"
                              className="bg-transparent bg-clip-text text-black hover:text-primary-color py-1 block"
                            >
                              RESTAURANT AND BAR
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/services/kidsplayground"
                              className="bg-transparent bg-clip-text text-black hover:text-primary-color py-1 block"
                            >
                              KIDS PLAYGROUND
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/services/swimming"
                              className="bg-transparent bg-clip-text text-black hover:text-primary-color py-1 block"
                            >
                              SWIMMING
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/services/meetings"
                              className="bg-transparent bg-clip-text text-black hover:text-primary-color py-1 block"
                            >
                              MEETINGS
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/services/parties"
                              className="bg-transparent bg-clip-text text-black hover:text-primary-color py-1 block"
                            >
                              PARTIES
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/services/accomodation"
                              className="bg-transparent bg-clip-text text-black hover:text-primary-color py-1 block"
                            >
                              ACCOMODATION
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/services/photography"
                              className="bg-transparent bg-clip-text text-black hover:text-primary-color py-1 block"
                            >
                              PHOTOGRAPHY
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="relative group px-5 py-2">
                  <NavLink
                    to="/gallery"
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    GALLERY
                  </NavLink>
                </li>
                <li className="relative group px-5 py-2">
                  <NavLink
                    to="/location"
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    LOCATION
                  </NavLink>
                </li>
                <li className="relative group px-5 py-2">
                  <NavLink
                    to="/contactus"
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    CONTACT US
                  </NavLink>
                </li>
              </ul>
            </motion.nav>
          </div>
        </div>
      </div>
    </header>
  );

};
export default Navbar;
