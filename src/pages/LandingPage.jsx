import React, { Component } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import bg from "../assets/images/bg_cedar.png";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import { Link } from 'react-router-dom';

class LandingPage extends Component {
  render() {
    const style = {
      width: "100%",
      height: "80%",
      // display: "flex"
    };
    return (
      <div style={{ backgroundImage: `url(${bg})` }}>
        <Navbar />
        <motion.div
          initial={{ scaleX: 0.6, scaleY: 0.7, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ scaleX: 1, scaleY: 1, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
          className=" w-full h-screen bg-[url('https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135357/Cedar%20Hotel/Edited/IMG_7119_rlfhmj.jpg')] bg-cover bg-center max-h-[573px] mt-2 justify-center text-center flex items-center home-background"
        >
          <div className="h-full w-full overlay-color flex justify-center justify text-center items-center">
            <p className="font-dancing text-white text-6xl  ">Cedar Gardens</p>
          </div>
        </motion.div>
        <div className=" w-full bg-white pt-[70px] mt-0 mx-auto flex justify-center items-center ">
          <div className="grid mt-10 grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-2 w-[90%]    bg-white  xs:grid-cols-1">
            <div className="w-full justify-center items-center">
              <motion.p
                initial={{ scaleX: 0, scaleY: 0.6, opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ scaleX: 1, scaleY: 1, opacity: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 0.5,
                }}
                className="font-dancing text-center text-2xl font-bold my-3 text-[#000]"
              >
                Welcome
              </motion.p>
              <motion.h4
                initial={{ scaleX: 0, scaleY: 0.6, opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ scaleX: 1, scaleY: 1, opacity: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 0.7,
                }}
                className="font-cormorant uppercase font-bold text-4xl"
              >
                Your comfort is our concern
              </motion.h4>
              <div className="grid mt-8 grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-2  xs:grid-cols-1">
                <div className="w-[100%]">
                  <motion.img
                    initial={{ scaleX: 0.6, scaleY: 0.7, opacity: 0 }}
                    viewport={{ once: true }}
                    whileInView={{ scaleX: 1, scaleY: 1, opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.5,
                    }}
                    className="object-cover h-48 lg:w-96 w-[100%] md:w-96 sm:w-[100%] xs:w-[100%] "
                    src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135255/Cedar%20Hotel/Edited/IMG_2741_gpgowb.jpg"
                  />
                </div>
                <motion.div
                  className="p-3 text-left"
                  initial={{ scaleX: 0, scaleY: 0.6, opacity: 0 }}
                  viewport={{ once: true }}
                  whileInView={{ scaleX: 1, scaleY: 1, opacity: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: 1.1,
                  }}
                >
                  <p className="font-jost">
                    Cedar is the place where you can make memories. We offer the
                    following services: Restaurant, Swimming, Bar, Kids Play
                    Area, Meetings and Accomodation.
                    <br />
                    The hotel is located on Kianjai meru, approximately 17km
                    from Meru town.
                  </p>
                </motion.div>
              </div>
              <motion.div
                className="border-l border-l-gray-700 pl-8 p-4 text-left mt-4"
                initial={{ scaleX: 0, scaleY: 0.6 }}
                viewport={{ once: true }}
                whileInView={{ scaleX: 1, scaleY: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 1.3,
                }}
              >
                <p className="font-jost">
                  “We have got the best Restaurant in town. The hotel is a must
                  see. The swimming pool and garden are beautiful. We are a
                  well-established and reputable caterer, hotel, conference
                  center and wedding venue. We offer a professional service for
                  everyone. Our main goal is to provide our clients with the
                  very best service and experience possible.”
                </p>
                <p className="font-bold text-1xl pt-4 font-jost">Lorem Ipsum</p>
                <p className="text-1xl pt-2 font-jost">Hotel Manager</p>
              </motion.div>
            </div>
            <div className="w-[100%] h-full  justify-center items-center align-center">
              <motion.img
                initial={{ scaleX: 0.6, scaleY: 0.7, opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ scaleX: 1, scaleY: 1, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                }}
                className="h-4/5 w-full object-cover "
                src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1670937379/Cedar%20Hotel/new/new/PHOTO-2022-12-11-16-38-55_zchfh2.jpg"
              />
            </div>
          </div>
        </div>
        <motion.div
          className="relative  bg-white"
          initial={{ scaleX: 0.6, scaleY: 0.7, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ scaleX: 1, scaleY: 1, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
        >
          <div className=" mx-auto h-screen bg-[url('https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135173/Cedar%20Hotel/Edited/IMG_2682_je1dcw.jpg')] bg-cover bg-center max-h-[573px]  justify-center text-center  items-center home-background">
            <div className="h-[100%] w-[100%] overlay-color pt-20">
              <p className="font-dancing pt-[10%] text-white sm:text-3xl md:text-3xl lg:text-4xl pb-6 ">
                Facilities and amenities
              </p>
              <p className="font-cormorant font-bold text-white sm:text-4xl md:text-4xl lg:text-5xl uppercase ">
                Experience the infinity
              </p>
            </div>
          </div>
          <div className="w-[100%] lg:absolute  md:absolute top-[400px] lg-[]  ">
            <div className="w-[70%] mx-auto  grid lg:grid-cols-2 gap-0    sm:grid-cols-1 xs:grid-col-1">
              <motion.div
                initial={{ scaleX: 0, scaleY: 0.6 }}
                viewport={{ once: true }}
                whileInView={{ scaleX: 1, scaleY: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 0,
                }}
                className="h-[400px] text-center bg-white"
              >
                <div className="w-100% h-[400px]  align-center text-center">
                  <p className="font-cormorant uppercase pt-[10%] font-bold  text-black text-3xl  ">
                    Bars and
                  </p>
                  <p className="font-cormorant uppercase  font-bold text-black text-3xl pb-6 ">
                    Restaurants
                  </p>
                  <p className="pt-[6%] font-semibold-600 text-black font-jost">
                    Our restaurants have exceptional food and drinks lists,
                    professionally trained chefs and service-oriented waitstaff.
                  </p>
                  <Link to="/services/barandrestaurant">
                    <button className="sm:text-sm md:text-base py-5 mt-[10%] uppercase w-[75%] bg-gray-300 tracking-[0.8rem] font-jost">
                      Learn More
                    </button>
                  </Link>
                </div>
              </motion.div>
              <motion.div
                initial={{ scaleX: 0.6, scaleY: 0.7, opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ scaleX: 1, scaleY: 1, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                }}
                className="h-[400px]"
              >
                <div className="w-100% h-[100%]  bg-cover bg-center  align-center text-center bg-[url('https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135278/Cedar%20Hotel/Edited/IMG_2740_wskrnd.jpg')]"></div>
              </motion.div>
            </div>
          </div>
          <motion.div
            className="w-[100%] lg:absolute  md:absolute top-[800px] lg-[] "
            initial={{ scaleX: 0, scaleY: 0.6 }}
            viewport={{ once: true }}
            whileInView={{ scaleX: 1, scaleY: 1 }}
            transition={{
              duration: 0.3,
              delay: 0.5,
            }}
          >
            <div className="w-[70%] mx-auto  grid lg:grid-cols-2 gap-0  sm:grid-cols-1 xs:grid-col-1 ">
              <motion.div
                initial={{ scaleX: 0, scaleY: 0.6 }}
                viewport={{ once: true }}
                whileInView={{ scaleX: 1, scaleY: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 0.5,
                }}
                className="h-[400px] text-center bg-white lg:order-last"
              >
                <div className="w-100% h-[400px]  bg-white align-center text-center">
                  <p className="font-cormorant uppercase pt-[10%] font-bold text-black text-3xl pb-6 ">
                    Party Events
                  </p>
                  <p className="pt-[6%] px-3 font-semibold-600 text-black font-jost">
                    Our dining facilities are designed for private celebrations,
                    corporate events, informal meetings and special occasions.
                    Our event coordinators can customize your special occasions
                    to create an unforgettable event.
                  </p>
                  <Link to="/services/parties">
                    <button className="p-5 mt-[10%] uppercase w-[75%] bg-gray-300 tracking-[0.8rem] font-jost">
                      Learn More
                    </button>
                  </Link>
                </div>
              </motion.div>
              <motion.div
                initial={{ scaleX: 0.6, scaleY: 0.7, opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ scaleX: 1, scaleY: 1, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                }}
                className="h-[400px]   bg-white bg-cover bg-center"
              >
                <div className="w-100%  h-[100%]  bg-cover bg-center  align-center text-center bg-[url('https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135258/Cedar%20Hotel/Edited/IMG_2723_ffgq32.jpg')]"></div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ scaleX: 0.6, scaleY: 0.7, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ scaleX: 1, scaleY: 1, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
          className="lg:mt-[626px] lg:w-[70%] md:w-[70%] sm:w-[100%] xs:w-[100%] max-h-[573px]  mx-auto h-screen flex bg-[url('https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135118/Cedar%20Hotel/Edited/IMG_7139_rsfj6t.jpg')] bg-cover bg-center justify-center text-center  items-center home-background"
        >
          <div className="w-[100%] h-[100%] overlay-color flex items-center align-center justify-center">
            <div className="lg:w-[40%] md:w-[60%] sm:w-[70%] xs:w-[80%] h-[40%] mt-[1%] align-center ">
              <p className="font-cormorant uppercase pt-[10%] text-white sm:text-4xl md:text-4xl lg:text-5xl pb-6 font-bold ">
                Meetings
              </p>
              <p className="pt-[6%] font-semibold-600 text-white font-jost">
                Sample our outdoor spaces for special meetings, or to catch up
                on your favorite sports on large HD TV screens.
              </p>
              <Link to="/services/meetings">
                <button className="p-5 mt-[10%] uppercase w-[80%] mx-auto bg-gray-300 tracking-[0.8rem] font-jost">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0.6, scaleY: 0.7, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ scaleX: 1, scaleY: 1, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
          className="w-[70%] mx-auto  grid lg:grid-cols-2 gap-0  sm:grid-cols-1 xs:grid-col-1 "
        >
          <div className="h-[400px] bg-white text-center ">
            {" "}
            <div className="w-100% h-[400px]  align-center text-center">
              <p className="font-cormorant uppercase pt-[10%] font-bold text-black text-3xl pb-6 ">
                Swimming
              </p>
              <p className="pt-[6%] px-3 font-semibold-600 text-black font-jost">
                Have Fun with the Family in the swimming pool. Jump in and swim
                and splash together.
              </p>
              <Link to="/services/swimming">
                <button className="p-5 mt-[10%] uppercase w-[75%] bg-gray-300 tracking-[0.8rem] font-jost">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
          <div className="h-[400px] bg-white">
            <div className="w-100% h-[100%]  bg-cover bg-center  align-center text-center bg-[url('https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135173/Cedar%20Hotel/Edited/IMG_2682_je1dcw.jpg')]"></div>
          </div>
        </motion.div>
        <motion.div
          initial={{ scaleX: 0.6, scaleY: 0.7, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ scaleX: 1, scaleY: 1, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
          className="w-[70%] mx-auto  grid lg:grid-cols-2 gap-0 bg-white  sm:grid-cols-1 xs:grid-col-1 "
        >
          <div className="h-[400px] text-center lg:order-last">
            <div className="w-100% h-[400px]  align-center text-center">
              <p className="font-cormorant uppercase pt-[10%] font-bold text-black text-3xl pb-6  ">
                Kids Play Area
              </p>
              <p className="pt-[6%] px-3 font-semibold-600 text-black font-jost">
                We also cater to our younger clients by offering a safe play
                area with bouncing castles, art activities and face painting on
                weekends.
              </p>
              <Link to="/services/kidsplayground">
                <button className="p-5 mt-[10%] uppercase w-[75%] bg-gray-300 tracking-[0.8rem] font-jost">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
          <div className="h-[400px]   bg-cover bg-center">
            <div className="w-100%  h-[100%]  bg-cover bg-center  align-center text-center bg-[url('https://res.cloudinary.com/dqab6gg7d/image/upload/v1670355436/Cedar%20Hotel/play%20area/play%20area/IMG_2711_mukcs4.jpg')]"></div>
          </div>
        </motion.div>
        <motion.div
          initial={{ scaleX: 0.6, scaleY: 0.7, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ scaleX: 1, scaleY: 1, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
          className=" lg:w-[70%] md:w-[70%] sm:w-[100%] xs:w-[100%] mx-auto h-screen flex bg-[url('https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135255/Cedar%20Hotel/Edited/IMG_2741_gpgowb.jpg')] bg-cover bg-center max-h-[573px]  justify-center text-center  items-center home-background"
        >
          <div className="h-[100%] w-[100%] overlay-color justify-center text-center flex items-center">
            <div className="lg:w-[40%] md:w-[60%] sm:w-[70%] xs:w-[80%] h-[40%] mt-[1%] align-center ">
              <p className="font-cormorant uppercase pt-[10%] text-white sm:text-4xl md:text-4xl lg:text-5xl pb-6 ">
                Accomodation
              </p>
              <p className="pt-[6%] font-semibold-600 text-white font-jost">
                Fantastic hotel in Meru. Good location, Clean Rooms and some of
                the best staff in any hotel you've been to.
              </p>
              <Link to="/services/accomodation">
                <button className="p-5 mt-[10%] uppercase w-[80%] bg-gray-300 tracking-[0.8rem] font-jost">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
        <div className="w-[100%] p-20 bg-white   items-center text-center justify-center ">
          <p className="font-dancing text-2xl font-bold mt-3 align-center">
            Gallery
          </p>
          <p className="font-cormorant font-bold uppercase pt-[3%] text-black text-4xl pb-6">
            Make memories that last
          </p>
          <div className="grid space-x-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
            <motion.div
              initial={{ opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.5,
              }}
              className="flex-col-reverse justify-center align-center items-center flex"
            >
              <motion.img
                initial={{ scaleX: 0.6, scaleY: 0.7, opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ scaleX: 1, scaleY: 1, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                }}
                className="h-[40%] w-[100%] object-cover  bg-center  my-5 align-center"
                src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135334/Cedar%20Hotel/Edited/IMG_7115_jw8cme.jpg"
              />
              <img
                className="h-[30%] w-[100%] object-cover  bg-center  align-center"
                src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135337/Cedar%20Hotel/Edited/IMG_2827_hxfhio.jpg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 1.5,
              }}
              className="flex-col-reverse  justify-center align-center items-center flex"
            >
              <img
                className="h-[50%] w-[100%] object-cover m-5"
                src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135278/Cedar%20Hotel/Edited/IMG_2740_wskrnd.jpg"
              />
              <img
                className="h-[50%] w-[100%] object-cover bg-center"
                src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135261/Cedar%20Hotel/Edited/IMG_2718_davs8g.jpg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 2,
              }}
              className="flex-col-reverse justify-center align-center items-center flex"
            >
              <img
                className="h-[80%]  w-[100%] m-5 object-cover "
                src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135111/Cedar%20Hotel/Edited/IMG_2690_rlmeer.jpg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 2.5,
              }}
              className="flex-col-reverse justify-center align-center items-center flex"
            >
              <img
                className="h-[50%] w-[100%] mt-5 object-cover "
                src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135181/Cedar%20Hotel/Edited/IMG_2688_ql5nto.jpg"
              />
              <img
                className="h-[50%] w-[100%]  object-cover "
                src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135113/Cedar%20Hotel/Edited/IMG_7148_bam2yd.jpg"
              />
            </motion.div>
          </div>
          <div className="mt-10 font-jost self-left">
            <Link
              to="/gallery"
              className="py-2 px-8 bg-primary-color text-white"
            >
              See More
            </Link>
          </div>
        </div>
        <motion.div
          initial={{ scaleX: 0, scaleY: 0.6 }}
          viewport={{ once: true }}
          whileInView={{ scaleX: 1, scaleY: 1 }}
          transition={{
            duration: 0.3,
            delay: 0.5,
          }}
          className="w-full h-screen bg-white mx-4  justify-center align-center grid sm:grid-cols-2 sm:grid-rows-2 md:grid-rows-1 md:grid-cols-2 space-x-4  "
        >
          <div className="relative ">
            <Map
              style={style}
              google={this.props.google}
              zoom={10}
              initialCenter={{
                lat: 0.1455517,
                lng: 37.7324069,
              }}
            >
              <Marker />
            </Map>
          </div>

          <div className="z-20">
            <p className="font-dancing mt-10  text-black text-3xl">Location</p>
            <p className="font-cormorant font-bold mt-6  text-black text-3xl uppercase">
              Getting there
            </p>
            <p className="font-jost mt-6  text-black text-1xl">
              Located along Meru Maua Road approximately 17 Kms from Meru town.
            </p>
            <div className="mt-10 font-jost self-left">
              <a
                href={`https://www.google.com/maps/place/CEDAR+GARDEN+%26+HOTEL+MERU/@0.1450252,37.7301031,17z/data=!4m12!1m6!3m5!1s0x17883ba942febd9b:0x48e060ad362976fc!2sCedar+Garden+and+Hotel!8m2!3d0.1450252!4d37.7322918!3m4!1s0x0:0x178e7273f544aa04!8m2!3d0.1455517!4d37.7324069`}
                className="py-2 px-8 bg-primary-color text-white"
                target="_blank"
              >
                Open in Google maps
              </a>
            </div>
          </div>
        </motion.div>
        <Footer />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBJPEiXXmzKAqybDiYDQI2cPHDoG9ab43Y",
})(LandingPage);

