import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const Services = () => {
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
          className="bg-[url('https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135255/Cedar%20Hotel/Edited/IMG_2741_gpgowb.jpg')] bg-no-repeat bg-cover bg-center h-72 flex justify-center"
        >
          <h2 className="text-center text-4xl font-jost text-white font-semibold tracking-[2rem] self-center hover:scale-105 hover:ease-in-out animate-pulse">
            SERVICES
          </h2>
        </motion.div>
      </div>

      {/* Your Content Goes Here */}

      <div className="">
        <div className="mx-10 sm:grid sm:grid-cols-1  md:grid md:grid-cols-2 md:gap-6 lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="sm:h-full sm:w-full sm:my-auto  md:h-10/12  lg:h-10/12 w-full">
            <img
              className=" sm:h-4/5 sm:mx-auto lg:h-full lg:w-full object-fill transform transition-all hover:scale-110"
              src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135321/Cedar%20Hotel/Edited/IMG_2756_vo2tbu.jpg"
              alt="Bar and restaurant"
            />
            <div className=" flex justify-end -my-20 sm:h-20 sm:w-auto  sm:px-16 md:w-full md:h-24 lg:w-96 lg:h-20 ">
              <div className=" bg-white px-4 mx-2  opacity-70 ">
                <h1 className="font-bold">BAR AND RESTAURANT</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="sm:h-full sm:w-full sm:my-auto  md:h-10/12  lg:h-10/12 w-full">
            <img
              className=" sm:h-4/5 sm:mx-auto md:h-full md:w-full lg:h-full lg:w-full object-fill transform transition-all hover:scale-110"
              src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135261/Cedar%20Hotel/Edited/IMG_2718_davs8g.jpg"
              alt="Party and Events"
            />
            <div className=" flex justify-end -my-20 sm:h-20 sm:w-auto  sm:px-16 md:w-full md:h-24 lg:w-96 lg:h-20 ">
              <div className="  bg-white px-4 mx-2  opacity-70  ">
                <h1 className="font-bold">PARTY AND EVENTS</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="sm:h-full sm:w-full sm:my-auto  md:h-10/12  lg:h-10/12 w-full">
            <img
              className="sm:h-4/5 sm:mx-auto md:h-full md:w-full lg:h-full lg:w-full object-fill transform transition-all hover:scale-110"
              src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135111/Cedar%20Hotel/Edited/IMG_2690_rlmeer.jpg"
              alt="Swimmming "
            />
            <div className=" flex justify-end -my-20 sm:h-20 sm:w-auto  sm:px-16 md:w-full md:h-24 lg:w-96 lg:h-20  ">
              <div className=" bg-white px-4 mx-2  opacity-70 ">
                <h1 className="font-bold">SWIMMING</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="sm:h-full sm:w-full sm:my-auto  md:h-10/12  lg:h-10/12 w-full">
            <img
              className="sm:h-4/5 sm:mx-auto md:h-full md:w-full lg:h-full lg:w-full object-fill transform transition-all hover:scale-110"
              src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135111/Cedar%20Hotel/Edited/IMG_7154_yy55dw.jpg"
              alt="Kids play Area"
            />
            <div className=" flex justify-end -my-20 sm:h-20 sm:w-auto  sm:px-16 md:w-full md:h-20 lg:w-96 lg:h-20 ">
              <div className=" bg-white px-4 mx-2  opacity-70 ">
                <h1 className="font-bold">KIDS PLAY AREA</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="sm:h-full sm:w-full sm:my-auto  md:h-10/12  lg:h-10/12 w-full">
            <img
              className="sm:h-4/5 sm:mx-auto md:h-full md:w-full lg:h-full lg:w-full object-fill transform transition-all hover:scale-110"
              src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135258/Cedar%20Hotel/Edited/IMG_2723_ffgq32.jpg"
              alt="Meetings"
            />
            <div className=" flex justify-end -my-20 sm:h-20 sm:w-auto  sm:px-16 md:w-full md:h-24 lg:w-96 lg:h-20 ">
              <div className=" bg-white px-4 mx-2  opacity-70 ">
                <h1 className="font-bold">MEETINGS</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="sm:h-full sm:w-full sm:my-auto  md:h-10/12  lg:h-10/12 w-full">
            <img
              className="sm:h-4/5 sm:mx-auto md:h-full md:w-full lg:h-full lg:w-full object-fill transform transition-all hover:scale-110"
              src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135100/Cedar%20Hotel/Edited/IMG_7149_gyst5m.jpg"
              alt="Accomodation"
            />
            <div className=" flex justify-end -my-20 sm:h-20 sm:w-auto  sm:px-16 md:w-full md:h-24 lg:w-96 lg:h-20  ">
              <div className=" bg-white px-4 mx-2   opacity-70 ">
                <h1 className="font-bold">ACCOMODATION</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Services;
