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
        <div className="mx-10 mb-10 space-y-6 sm:grid sm:grid-cols-1 md:grid md:grid-cols-2 md:gap-6 lg:grid lg:grid-cols-3 xl:grid-cols-4 lg:gap-8">
          <div className="flex items-center justify-center w-full overflow-hidden">
            <div className="h-fit">
              <div className="max-w-sm overflow-hidden bg-white/20 duration-200 hover:scale-105 hover:shadow-xl">
                <img
                  src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135321/Cedar%20Hotel/Edited/IMG_2756_vo2tbu.jpg"
                  alt="Bar and restaurant"
                  class="h-full w-full"
                />
                <div className="p-5">
                  <h1 className="font-bold font-jost">BAR AND RESTAURANT</h1>
                  <p className="font-jost">
                    Our restaurants have exceptional food and drinks lists,
                    professionally trained chefs and service-oriented waitstaff.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full overflow-hidden">
            <div className="h-fit">
              <div className="max-w-sm overflow-hidden bg-white/20 shadow-md duration-200 hover:scale-105 hover:shadow-xl">
                <img
                  src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135191/Cedar%20Hotel/Edited/IMG_2717_tci4ez.jpg"
                  alt="Party and Events"
                  class="h-full w-full"
                />
                <div className="p-5">
                  <h1 className="font-bold font-jost">PARTY AND EVENTS</h1>
                  <p className="font-jost">
                    Our dining facilities are designed for private celebrations,
                    corporate events, informal meetings and special occasions.
                    Our event coordinators can customize your special occasions
                    to create an unforgettable event.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center align-top h-fit w-full overflow-hidden">
            <div className="max-w-sm overflow-hidden bg-white/20 shadow-md duration-200 hover:scale-105 hover:shadow-xl">
              <img
                src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135111/Cedar%20Hotel/Edited/IMG_2690_rlmeer.jpg"
                alt="Swimmming"
                class="h-full w-full"
              />
              <div className="p-5">
                <h1 className="font-bold font-jost">SWIMMING</h1>
                <p className="font-jost">
                  Have Fun with the Family in the swimming pool. Jump in and
                  swim and splash together.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center align-top h-fit w-full overflow-hidden">
            <div className="max-w-sm overflow-hidden bg-white/20 shadow-md duration-200 hover:scale-105 hover:shadow-xl">
              <img
                src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1670355452/Cedar%20Hotel/play%20area/play%20area/IMG_2713_bi5f4y.jpg"
                alt="Kids play Area"
                class="h-full w-full"
              />
              <div className="p-5">
                <h1 className="font-bold font-jost">KIDS PLAY AREA</h1>
                <p className="font-jost">
                  We also cater to our younger clients by offering a safe play
                  area with bouncing castles, art activities and face painting
                  on weekends.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center align-top h-fit w-full overflow-hidden">
            <div className="max-w-sm overflow-hidden bg-white/20 shadow-md duration-200 hover:scale-105 hover:shadow-xl">
              <img
                src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135276/Cedar%20Hotel/Edited/IMG_2752_dijoph.jpg"
                alt="Meetings"
                class="h-full w-full"
              />
              <div className="p-5">
                <h1 className="font-bold font-jost">MEETINGS</h1>
                <p className="font-jost">
                  Sample our outdoor spaces for special meetings, or to catch up
                  on your favorite sports on large HD TV screens.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center align-top h-fit w-full overflow-hidden">
            <div className="max-w-sm overflow-hidden bg-white/20 shadow-md duration-200 hover:scale-105 hover:shadow-xl">
              <img
                src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135113/Cedar%20Hotel/Edited/IMG_7148_bam2yd.jpg"
                alt="Accomodation"
                class="h-full w-full"
              />
              <div className="p-5">
                <h1 className="font-bold font-jost">ACCOMODATION</h1>
                <p className="font-jost">
                Fantastic hotel in Meru. Good location, Clean Rooms and some
                  of the best staff in any hotel you've been to.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center align-top h-fit w-full overflow-hidden">
            <div className="max-w-sm overflow-hidden bg-white/20 shadow-md duration-200 hover:scale-105 hover:shadow-xl">
              <img
                src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135334/Cedar%20Hotel/Edited/IMG_7115_jw8cme.jpg"
                alt="photography"
                class="h-full w-full"
              />
              <div className="p-5">
                <h1 className="font-bold font-jost">PHOTOGRAPHY</h1>
                <p className="font-jost">
                To capture the loveliest moments of your events, Cedar Gardens offers you the opportunity to shoot lifestyle photos (wedding, maternity, family, graduation…etc).
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
