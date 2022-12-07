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
            <div className="h-[100%] w-[100%] overlay-color flex justify-center">
          <h2 className="text-center text-4xl font-jost text-white font-semibold tracking-[2rem] self-center hover:scale-105 hover:ease-in-out animate-pulse">
            SERVICES
          </h2>

          </div>
        </motion.div>
      </div>

      {/* Your Content Goes Here */}

      <div className="">
        <div className="mx-10 sm:grid sm:grid-cols-1 md:grid md:grid-cols-2 md:gap-6 lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="sm:h-5/6 sm:w-full sm:my-  md:h-3/4  lg:h-3/4 w-full relative overflow-hidden">
            <img
              className=" sm:h-full object-cover sm:mx-auto md:h-full md:w-full lg:h-full lg:w-full transform transition-all hover:scale-110"
              src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135321/Cedar%20Hotel/Edited/IMG_2756_vo2tbu.jpg"
              alt="Bar and restaurant"
            />
            <div className=" flex sm:justify-start sm:mx-10 lg:mx-auto -my-20 sm:h-20 sm:w-auto  sm:px-16 md:w-full md:h-24 lg:w-96 lg:h-20 z-10 ">
              <div className=" bg-white px-6 py-2 mx-2  opacity-70 ">
                <h1 className="font-bold font-jost">BAR AND RESTAURANT</h1>
                <p className="font-jost">
                Our restaurants have exceptional food and drinks lists, professionally trained chefs and service-oriented waitstaff. 
                </p>
              </div>
            </div>
          </div>
          <div className="sm:h-5/6 sm:w-full sm:my-  md:h-3/4 lg:h-3/4 w-full relative overflow-hidden">
            <img
              className="object-cover sm:h-full sm:mx-auto md:h-full md:w-full lg:h-full lg:w-full transform transition-all hover:scale-110"
              src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135261/Cedar%20Hotel/Edited/IMG_2718_davs8g.jpg"
              alt="Party and Events"
            />
            <div className=" flex sm:justify-start sm:mx-10 lg:mx-auto -my-20 sm:h-20 sm:w-auto  sm:px-16 md:w-full md:h-24 lg:w-96 lg:h-20 ">
              <div className="  bg-white px-6 py-2 mx-2  opacity-70  ">
                <h1 className="font-bold font-jost">PARTY AND EVENTS</h1>
                <p className="font-jost">
                Our dining facilities are designed for private celebrations, corporate events, informal meetings and special occasions.
                  Our event coordinators can customize your special occasions to create an unforgettable event. 
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden sm:h-full sm:w-full sm:my-  md:h-3/4 lg:h-3/4 w-full md:-my-20 lg:my-0">
            <img
              className="sm:h-4/5 sm:mx-auto md:h-full md:w-full lg:h-full lg:w-full object-cover transform transition-all hover:scale-110"
              src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135111/Cedar%20Hotel/Edited/IMG_2690_rlmeer.jpg"
              alt="Swimmming "
            />
            <div className=" flex sm:justify-start relative sm:bottom-20 md:bottom-20 lg:bottom-0 sm:mx-10 lg:mx-auto  lg:-my-20 sm:h-20 sm:w-auto  sm:px-16 md:w-full md:h-24 lg:w-96 lg:h-20  ">
              <div className=" bg-white px-6 py-2 mx-2  opacity-70 ">
                <h1 className="font-bold font-jost">SWIMMING</h1>
                <p className="font-jost">
                Have Fun with the Family in the swimming pool. Jump in and swim and splash together. 
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden sm:h-full sm:w-full sm:my-  md:h-3/4 lg:h-3/4 w-full -my-20">
            <img
              className="sm:h-4/5 sm:mx-auto md:h-full md:w-full lg:h-full lg:w-full object-cover transform transition-all hover:scale-110"
              src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135111/Cedar%20Hotel/Edited/IMG_7154_yy55dw.jpg"
              alt="Kids play Area"
            />
            <div className=" flex sm:justify-start relative bottom-20  sm:mx-10 lg:mx-auto sm:h-20 sm:w-auto  sm:px-16 md:w-full md:h-20 lg:w-96 lg:h-20 ">
              <div className=" bg-white px-6 py-2 mx-2  opacity-70 ">
                <h1 className="font-bold font-jost">KIDS PLAY AREA</h1>
                <p className="font-jost">
                We also cater to our younger clients by offering a safe play area with bouncing castles, art activities and face painting on weekends.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden sm:h-full sm:w-full sm:my-  md:h-3/4 lg:h-3/4 w-full -my-20">
            <img
              className="sm:h-4/5 sm:mx-auto md:h-full md:w-full lg:h-full lg:w-full object-cover transform transition-all hover:scale-110"
              src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135258/Cedar%20Hotel/Edited/IMG_2723_ffgq32.jpg"
              alt="Meetings"
            />
            <div className=" flex sm:justify-start relative bottom-20 sm:mx-10 lg:mx-auto sm:h-20 sm:w-auto  sm:px-16 md:w-full md:h-24 lg:w-96 lg:h-20 ">
              <div className=" bg-white px-6 py-2 mx-2  opacity-70 ">
                <h1 className="font-bold font-jost">MEETINGS</h1>
                <p className="font-jost">
                Sample our outdoor spaces for special meetings, or to catch up on your favorite sports on large HD TV screens.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden sm:h-full sm:w-full sm:my-  md:h-3/4 lg:h-3/4 w-full -my-20">
            <img
              className="sm:h-4/5 sm:mx-auto md:h-full md:w-full lg:h-full lg:w-full object-cover transform transition-all hover:scale-110"
              src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135100/Cedar%20Hotel/Edited/IMG_7149_gyst5m.jpg"
              alt="Accomodation"
            />
            <div className=" flex sm:justify-start relative bottom-16 sm:mx-10 lg:mx-auto sm:h-20 sm:w-auto  sm:px-16 md:w-full md:h-24 lg:w-96 lg:h-20  ">
              <div className=" bg-white px-6 py-2 mx-2   opacity-70 ">
                <h1 className="font-bold font-jost">ACCOMODATION</h1>
                <p className="font-jost">
                Fantastic hotel in Meru. Good location, Clean Rooms and some of the best staff in any hotel you've been to.
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
