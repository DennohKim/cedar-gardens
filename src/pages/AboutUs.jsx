import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import camera from "../assets/images/clarity_camera-solid.png"
import food from "../assets/images/fluent_food-cake-24-filled.png"
import baseline from "../assets/images/ic_baseline-local-hotel.png"
import beer from "../assets/images/ion_beer.png"
import playground from "../assets/images/map_playground.png"
import restaurant from "../assets/images/restaurant.png"
import meeting from "../assets/images/uil_meeting-board.png"
import swimming from "../assets/images/fa6-solid_person-swimming.png"
import bg from "../assets/images/bg_cedar.png"
import { Tabs } from 'flowbite-react';



const AboutUs = () => {
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
          className="bg-[url('https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135255/Cedar%20Hotel/Edited/IMG_2741_gpgowb.jpg')]  bg-no-repeat bg-cover bg-center h-72 flex justify-center"
        >
          <h2 className="text-center text-4xl font-jost text-white font-semibold tracking-[2rem] self-center hover:scale-105 hover:ease-in-out animate-pulse">
            ABOUT US
          </h2>
        </motion.div>
      </div>

   

      <div>
        <div className="w-[100%] ">
          <motion.div
            initial={{
              y: -100,
              opacity: 0,
            }}
            transition={{ duration: 1.2}}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-[100%] md:w-[80%] sm:w-[90%] xs:w-[100%] lg:p-[4%] md:p-[4%] sm:p-[4%]  xs:p-[1%] lg:pb-0 md:pb-0 sm:pb-0 xs:pb-0"
          >
            <div className="w-[100%] bg-white">
              <p className="font-dancing text-3xl font-bold">Our Story</p>
              <p className="text-5xl font-bold font-cormorant pt-7 uppercase">
                How it all began
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{
              y: -100,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-[100%] flex gap-3 justify-center align-center items-center lg:p-[4%] md:p-[4%] sm:p-[4%] p-[4%] xs:p-[1%] "
          >
            <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 lg:w-[90%] md:w-[90%] sm:w-[95%] w-[100%] ">
              <div className="lg:col-span-2 md:col-span-3 sm:col-span-1 xs:col-span-1 w-[100%] bg-[url('https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135200/Cedar%20Hotel/Edited/IMG_2726_cxcoti.jpg')] bg-cover bg-center h-[700px]"></div>
              <div className="w-[100%]  bg-cover bg-center h-[100%] bg-white flex  items-end sm:mt-3 mt-3 lg:mt-0 md:mt-0 lg:ml-2 md:ml-2">
                <img
                  src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135184/Cedar%20Hotel/Edited/IMG_2685_n2slab.jpg"
                  className="object-cover h-[100%]  w-[100%] lg:h-[51%] md:h-[51%] sm:h-[100%] "
                />
              </div>{" "}
              <div className="w-[100%]  bg-cover bg-center h-[100%] bg-white flex  items-end sm:mt-3 mt-6 lg:mt-0 md:mt-0 lg:ml-4 md:ml-4 ">
                <img
                  src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135276/Cedar%20Hotel/Edited/IMG_2752_dijoph.jpg "
                  className="object-cover lg:h-[51%] md:h-[51%] sm:h-[100%] h-[100%] sm:mt-3  w-[100%]"/>
              </div>
            </div>
          </motion.div>
          <div className="lg:absolute md:absolute sm:relative xs:relative  relative top-[105%] right-[2%] h-[80%] lg:w-[48%] md:w-[50%] sm:w-[100%] w-[100%] bg-white">
            <motion.div
              initial={{
                y: -100,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              class="border-b border-gray-200 dark:border-gray-700 ml-[10%]"
            >
          <Tabs.Group 
          initial={{
            y: -100,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="tab-content p-4 lg:ml-[2%] md:ml-[10%] sm:ml-[5%] ml-[10%]"
          id="tabs-tabContent"
            aria-label="Tabs with underline"
            style="underline"
          >
            <Tabs.Item title="Mission"  class="inline-flex p-4  pl-2 uppercase font-jost rounded-t-lg border-b-2 text-black font-bold border-transparent hover:text-green-700 hover:border-green-700 dark:hover:text-green-700 group focus:border-green-700
                  active">
                     <p className="pt-[6%] font-semibold-600 text-black">
                  Feugiat nibh tellus aliquam amet donec ipsum eu. Ac aenean
                  pulvinar posuere tellus erat quisque
                </p>{" "}
                <p className="pt-[6%] font-semibold-600 text-black">
                  Feugiat nibh tellus aliquam amet donec ipsum eu. Ac aenean
                  pulvinar posuere tellus erat quisque
                </p>{" "}
                <p className="pt-[6%] font-semibold-600 text-black">
                  Feugiat nibh tellus aliquam amet donec ipsum eu. Ac aenean
                  pulvinar posuere tellus erat quisque
                </p>
             
            </Tabs.Item>
            <Tabs.Item 
              active={true}
              title="Vision"
              color="#000000"
            >
               <p className="pt-[6%] font-semibold-600 text-black">
                  Feugiat nibh tellus aliquam amet donec ipsum eu. Ac aenean
                  pulvinar posuere tellus erat quisque
                </p>{" "}
                <p className="pt-[6%] font-semibold-600 text-black">
                  Feugiat nibh tellus aliquam amet donec ipsum eu. Ac aenean
                  pulvinar posuere tellus erat quisque
                </p>{" "}
                <p className="pt-[6%] font-semibold-600 text-black">
                  Feugiat nibh tellus aliquam amet donec ipsum eu. Ac aenean
                  pulvinar posuere tellus erat quisque
                </p>
            </Tabs.Item>
           
          </Tabs.Group>
            </motion.div>
     
          </div>
        </div>
        <motion.div
          initial={{
            y: -100,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-[100%] flex flex-col-reverse justify-center items-center pb-[7%] "style={{backgroundImage: `url(${bg})`}}
        >
          <div className="w-[90%] grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2" >
            <div className=" h-[200px] bg-[#D4D4D8] p-2 width-[100%] flex-col-reverse inset-0 flex items-center justify-center">
              <p className="pt-[3%]  font-semibold-600 text-black text-center">
                Feugiat nibh tellus aliquam amet donec ipsum eu. Ac aenean
                pulvinar posuere tellus erat quisque
              </p>
              <p className="text-1xl font-bold pt-[3%]">Restaurant</p>
              <img className="h-10 w-10 " src={restaurant}></img>
            </div>{" "}
            <div className=" h-[200px] bg-[#D4D4D8] p-2 width-[100%] flex-col-reverse inset-0 flex items-center justify-center">
              <p className="pt-[3%] font-semibold-600 text-black text-center">
                Feugiat nibh tellus aliquam amet donec ipsum eu. Ac aenean
                pulvinar posuere tellus erat quisque
              </p>
              <p className="text-1xl font-bold pt-[3%]">Bar</p>
              <img className="h-10 w-10 "  src={beer}></img>
            </div>{" "}
            <div className=" h-[200px] bg-[#D4D4D8] p-2 width-[100%] flex-col-reverse inset-0 flex items-center justify-center">
              <p className="pt-[3%] font-semibold-600 text-black text-center">
                Feugiat nibh tellus aliquam amet donec ipsum eu. Ac aenean
                pulvinar posuere tellus erat quisque
              </p>
              <p className="text-1xl font-bold pt-[3%]">Swimming</p>
              <img className="h-10 w-10 "  src={swimming}></img>
            </div>
            <div className=" h-[200px] bg-[#D4D4D8] p-2 width-[100%] flex-col-reverse inset-0 flex items-center justify-center">
              <p className="pt-[3%] font-semibold-600 text-black text-center">
                Feugiat nibh tellus aliquam amet donec ipsum eu. Ac aenean
                pulvinar posuere tellus erat quisque
              </p>
              <p className="text-1xl font-bold pt-[3%]">Kids Playing area</p>
              <img className="h-10 w-10"  src={playground} ></img>
            </div>
            <div className=" h-[200px] bg-[#D4D4D8] p-2 width-[100%] flex-col-reverse inset-0 flex items-center justify-center">
              <p className="pt-[3%] font-semibold-600 text-black text-center">
                Feugiat nibh tellus aliquam amet donec ipsum eu. Ac aenean
                pulvinar posuere tellus erat quisque
              </p>
              <p className="text-1xl font-bold pt-[3%]">Meetings</p>
              <img className="h-10 w-10 "  src={meeting}></img>
            </div>
            <div className=" h-[200px] bg-[#D4D4D8] p-2 width-[100%] flex-col-reverse inset-0 flex items-center justify-center">
              <p className="pt-[3%] font-semibold-600 text-black text-center">
                Feugiat nibh tellus aliquam amet donec ipsum eu. Ac aenean
                pulvinar posuere tellus erat quisque
              </p>
              <p className="text-1xl font-bold pt-[3%]">Photography</p>
              <img className="h-10 w-10"  src={camera}></img>
            </div>{" "}
            <div className=" h-[200px] bg-[#D4D4D8] p-2 width-[100%] flex-col-reverse inset-0 flex items-center justify-center">
              <p className="pt-[3%] font-semibold-600 text-black text-center">
                Feugiat nibh tellus aliquam amet donec ipsum eu. Ac aenean
                pulvinar posuere tellus erat quisque
              </p>
              <p className="text-1xl font-bold pt-[3%]">
                Birthday/Graduation Party
              </p>
              <img className="h-10 w-10 " src={food}></img>
            </div>{" "}
            <div className=" h-[200px] bg-[#D4D4D8] p-2 width-[100%] flex-col-reverse inset-0 flex items-center justify-center">
              <p className="pt-[3%] font-semibold-600 text-black text-center">
                Feugiat nibh tellus aliquam amet donec ipsum eu. Ac aenean
                pulvinar posuere tellus erat quisque
              </p>
              <p className="text-1xl  font-bold pt-[3%]">Accomodation</p>
              <img className="h-10 w-10 " src={baseline}></img>
            </div>
          </div>
          <p className="font-cormorant uppercase pb-[2%]  font-bold text-black text-center text-3xl ">
            Make Your experience memorable
          </p>
          <p className="font-dancing pb-[1%] pt-[2%] font-bold text-black text-3xl  ">
            Services
          </p>
        </motion.div>
        <motion.div
          initial={{
            y: -100,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-[100%] mb-10 flex flex-col-reverse justify-center items-center "
        >
          <div className="w-[90%] grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2">
            <div className=" h-[200px] width-[100%] flex-col-reverse inset-0 flex items-center justify-center bg-cover bg-center">
              <p className="text-1xl font-bold pt-[3%]">Lorem Ipsum</p>
            </div>{" "}
            <div className=" h-[200px] width-[100%] flex-col-reverse inset-0 flex items-center justify-center bg-[url('https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')] bg-cover bg-center">
              <p className="text-1xl font-bold pt-[3%]">Lorem Ipsum</p>
            </div>{" "}
            <div className=" h-[200px] width-[100%] flex-col-reverse inset-0 flex items-center justify-center bg-[url('https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')] bg-cover bg-center">
              <p className="text-1xl font-bold pt-[3%]">Lorem Ipsum</p>
            </div>{" "}
            <div className=" h-[200px] width-[100%] flex-col-reverse inset-0 flex items-center justify-center bg-[url('https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')] bg-cover bg-center">
              <p className="text-1xl font-bold pt-[3%]">Lorem Ipsum</p>
            </div>{" "}
            <div className=" h-[200px] width-[100%] flex-col-reverse inset-0 flex items-center justify-center bg-[url('https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')] bg-cover bg-center">
              <p className="text-1xl font-bold pt-[3%]">Lorem Ipsum</p>
            </div>{" "}
            <div className=" h-[200px] width-[100%] flex-col-reverse inset-0 flex items-center justify-center bg-[url('https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')] bg-cover bg-center">
              <p className="text-1xl font-bold pt-[3%]">Lorem Ipsum</p>
            </div>{" "}
            <div className=" h-[200px] width-[100%] flex-col-reverse inset-0 flex items-center justify-center bg-[url('https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')] bg-cover bg-center">
              <p className="text-1xl font-bold pt-[3%]">Lorem Ipsum</p>
            </div>{" "}
            <div className=" h-[200px] width-[100%] flex-col-reverse inset-0 flex items-center justify-center bg-[url('https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')] bg-cover bg-center">
              <p className="text-1xl font-bold pt-[3%]">Lorem Ipsum</p>
            </div>
          </div>
          <p className="font-cormorant uppercase pb-[2%]  font-bold text-black text-3xl ">
            meet our staff
          </p>
          <p className="font-dancing pb-[1%] pt-[2%] font-bold text-black text-3xl  ">
            Our Team
          </p>
        </motion.div>
        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;