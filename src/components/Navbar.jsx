import React, { useState } from "react";
import { FaFacebook, FaTiktok } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/images/LogoMain.png";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
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
    <header className="w-full pt-10">
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
                
                <span className="font-bold">Phone: </span>
                <a href="tel:+254 791 555 111">+254 791 555 111</a>
              </div>
              <div>
                
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
                <FaFacebook color="#287216" fontSize="1.5em" />
                <FaTiktok color="#287216" fontSize="1.5em" />
                <AiFillInstagram color="#287216" fontSize="1.5em" />
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
                              <a
                                href="/services/barandrestaurant"
                                className="bg-transparent bg-clip-text text-black hover:text-primary-color py-1 block"
                              >
                                RESTAURANT AND BAR
                              </a>
                            </li>
                            <li>
                              <a
                                href="/services/kidsplayground"
                                className="bg-transparent bg-clip-text text-black hover:text-primary-color py-1 block"
                              >
                                KIDS PLAYGROUND
                              </a>
                            </li>
                            <li>
                              <a
                                href="/services/swimming"
                                className="bg-transparent bg-clip-text text-black hover:text-primary-color py-1 block"
                              >
                                SWIMMING
                              </a>
                            </li>
                            <li>
                              <a
                                href="/services/meetings"
                                className="bg-transparent bg-clip-text text-black hover:text-primary-color py-1 block"
                              >
                                MEETINGS
                              </a>
                            </li>
                            <li>
                              <a
                                href="/services/parties"
                                className="bg-transparent bg-clip-text text-black hover:text-primary-color py-1 block"
                              >
                                PARTIES
                              </a>
                            </li>
                            <li>
                              <a
                                href="/services/accomodation"
                                className="bg-transparent bg-clip-text text-black hover:text-primary-color py-1 block"
                              >
                                ACCOMODATION
                              </a>
                            </li>
                            <li>
                              <a
                                href="/services/photography"
                                className="bg-transparent bg-clip-text text-black hover:text-primary-color py-1 block"
                              >
                                PHOTOGRAPHY
                              </a>
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
              <FaFacebook color="#287216" fontSize="1.5em" />
              <FaTiktok color="#287216" fontSize="1.5em" />
              <AiFillInstagram color="#287216" fontSize="1.5em" />
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
                            <a
                              href="/services/barandrestaurant"
                              className="bg-transparent bg-clip-text text-black hover:text-primary-color py-1 block"
                            >
                              RESTAURANT AND BAR
                            </a>
                          </li>
                          <li>
                            <a
                              href="/services/kidsplayground"
                              className="bg-transparent bg-clip-text text-black hover:text-primary-color py-1 block"
                            >
                              KIDS PLAYGROUND
                            </a>
                          </li>
                          <li>
                            <a
                              href="/services/swimming"
                              className="bg-transparent bg-clip-text text-black hover:text-primary-color py-1 block"
                            >
                              SWIMMING
                            </a>
                          </li>
                          <li>
                            <a
                              href="/services/meetings"
                              className="bg-transparent bg-clip-text text-black hover:text-primary-color py-1 block"
                            >
                              MEETINGS
                            </a>
                          </li>
                          <li>
                            <a
                              href="/services/parties"
                              className="bg-transparent bg-clip-text text-black hover:text-primary-color py-1 block"
                            >
                              PARTIES
                            </a>
                          </li>
                          <li>
                            <a
                              href="/services/accomodation"
                              className="bg-transparent bg-clip-text text-black hover:text-primary-color py-1 block"
                            >
                              ACCOMODATION
                            </a>
                          </li>
                          <li>
                            <a
                              href="/services/photography"
                              className="bg-transparent bg-clip-text text-black hover:text-primary-color py-1 block"
                            >
                              PHOTOGRAPHY
                            </a>
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

  // return (
  //   <div className="flex justify-between items-center my-8 mx-2 sm:mx-16">
  //     <div>
  //       <img src={Logo} alt="" />
  //     </div>
  //     <div className="block md:hidden">
  //       <GiHamburgerMenu onClick={toggleMenu} />
  //     </div>
  //     <div
  //       className="absolute top-0 sm:block p-5 sm:p-0 min-w-[200px] w-[100%]"
  //       style={showMenu ? { display: "block" } : { display: "none" }}
  //     >
  //       <nav>
  //         <RxCross2 onClick={toggleMenu} />

  //         <ul className=" flex flex-col sm:flex-row justify-around font-josefin text-base md:text-lg text-black font-extrabold w-auto">
  //           <Link to={"/"}>
  //             <li className="my-2 mx-1 w-[100%] min-w-[100px] ">Home</li>
  //           </Link>
  //           <Link to={"/features"}>
  //             <li className="my-2 mx-1 w-[100%] min-w-[100px] ">Features</li>
  //           </Link>
  //           <Link to={"/contact"}>
  //             <li className="my-2 mx-1 w-[100%] min-w-[100px] ">Contact Us</li>
  //           </Link>
  //         </ul>
  //       </nav>
  //     </div>
  //     <div className="hidden md:block">
  //       <nav>
  //         <ul className=" flex flex-col sm:flex-row justify-around font-josefin text-base md:text-lg text-black font-extrabold w-auto">
  //           <Link to={"/"}>
  //             <li className="mx-1 w-[100%] min-w-[100px] ">Home</li>
  //           </Link>
  //           <Link to={"/features"}>
  //             <li className="mx-1 w-[100%] min-w-[100px] ">Features</li>
  //           </Link>
  //           <Link to={"/contact"}>
  //             <li className="mx-1 w-[100%] min-w-[100px] ">Contact Us</li>
  //           </Link>
  //         </ul>
  //       </nav>
  //     </div>
  //     <div className="hidden sm:block">
  //       <Link to="/AvailableTenders">
  //         <button className="bg-primary-color font-josefin text-white py-2 px-4 rounded-full">
  //           Get Started
  //         </button>
  //       </Link>
  //     </div>
  //   </div>
  // );
};
export default Navbar;
