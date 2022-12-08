import React, { Component } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import autoprefixer from "autoprefixer";

class Location extends Component {
  render() {
    const style = {
      width: "80%",
      height: "600px",
      margin: "0 auto",
    };
    return (
      <div>
        <Navbar />
        <div className="my-10">
          <motion.div
            initial={{
              y: -100,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[url('https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135255/Cedar%20Hotel/Edited/IMG_2741_gpgowb.jpg')] overlay-color  bg-no-repeat bg-cover bg-center h-72 flex justify-center"
          >
            <div className="h-[100%] w-[100%] overlay-color flex justify-center">
              <h2 className="text-center text-4xl font-jost text-white font-semibold tracking-[2rem] self-center hover:scale-105 hover:ease-in-out animate-pulse">
                LOCATION
              </h2>
            </div>
          </motion.div>
        </div>

        {/* Your Content Goes Here */}

        <div className="h-screen mx-auto">
          <div className="text-left pb-6 w-4/5 mx-auto ">
            <p className="font-dancing mt-10 text-black text-3xl">Location</p>
            <p className="font-jost mt-6 text-black text-1xl">
              Located along Meru Maua Road approximately 17 Kms from Meru town.
            </p>
          </div>
          <Map
            google={this.props.google}
            zoom={15}
            initialCenter={{
              lat: 0.1455517,
              lng: 37.7324069,
            }}
            style={style}
          >
            <Marker />
          </Map>
        </div>

        <Footer />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBJPEiXXmzKAqybDiYDQI2cPHDoG9ab43Y",
})(Location);
