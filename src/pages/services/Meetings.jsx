import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";
const Meetings = () => {
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
      <div className="w-[100%] flex justify-center mb-10">
        {/* <div className='w-[90%]'> */}
        <div >
          <div className="w-[90%] space-x-6 mx-auto grid grid-cols-1 md:grid-cols-2 ">
            <div>
              <motion.img
                initial={{
                  scaleX: 0,
                  scaleY: 0,
                }}
                transition={{ duration: 0.5 }}
                whileInView={{ scaleX: 1, scaleY: 1 }}
                viewport={{ once: true }}
                className="h-full w-full object-cover"
                src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135261/Cedar%20Hotel/Edited/IMG_2718_davs8g.jpg"
              />
            </div>
            <div className="flex flex-col">
              <motion.div
                initial={{
                  scaleX: 0,
                  scaleY: 0,
                }}
                transition={{ duration: 0.5, delay: 1 }}
                whileInView={{ scaleX: 1, scaleY: 1 }}
                viewport={{ once: true }}
                className="justify-bottom   lg:pl-10 md:pl-10 justify-right  relative "
              >
                <p className="font-cormorant uppercase mt-[130px] font-bold text-4xl">
                  Meetings
                </p>
                <p className="text-1xl font-jost mt-5 sm:mb-[260px] md:mb-[15px]">
                  {" "}
                  Friends are the family we choose, and at Cedar Gardens we help
                  you make some extra-special memories with your friends. Share
                  a meal, dance to the beat and take a selfie or 10! Do it all
                  at Cedar Gardens. Toast to the beauty of life at Cedar
                  Gardens. Be it bridal showers, baby showers, home-comings,
                  company functions, private parties and weddings – we don’t
                  take them for granted. Let us add the magic to your special
                  moments in life!
                </p>
              </motion.div>
              <div>
                <img
                  className=" object-cover"
                  src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135329/Cedar%20Hotel/Edited/IMG_2759_zov87i.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Meetings;
