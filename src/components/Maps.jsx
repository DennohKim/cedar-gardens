import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import bg from "../assets/images/bg_cedar.png"


const LandingPage = () => {
  return (
    <>
      <Navbar />
      {/* Your Content Goes Here */}
      <div style={{backgroundImage: `url(${bg})`}}>
        <motion.div
          initial={{ scaleX: 0, scaleY: 0 }}
          viewport={{ once: true }}
          whileInView={{ scaleX: 1, scaleY: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          
          }}
          class=" w-[100%] h-screen bg-[url('https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135357/Cedar%20Hotel/Edited/IMG_7119_rlfhmj.jpg')] bg-cover bg-center max-h-[573px]  justify-center text-center flex items-center home-background"
        >
          <p className="font-dancing  text-white text-6xl  ">Cedar Gardens</p>
        </motion.div>
        <div className=" w-[100%] bg-white pt-[70px] mt-0 mx-auto flex justify-center items-center text-center">
          <div className="grid mt-10 grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-2 w-[90%]    bg-white  xs:grid-cols-1">
            <div className="w-[100%] text-center justify-center items-center">
              <motion.p
                initial={{ scaleX: 0, scaleY: 0 }}
                viewport={{ once: true }}
                whileInView={{ scaleX: 1, scaleY: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 0.5,
                  
                  
                }}
                className="font-dancing text-2xl font-bold mt-3 text-white align-center"
              >
                Welcome
              </motion.p>
              <motion.h4
                initial={{ scaleX: 0, scaleY: 0 }}
                viewport={{ once: true }}
                whileInView={{ scaleX: 1, scaleY: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 0.7,
                  
                  
                }}
                className="font-cormorant uppercase font-bold text-3xl m-8"
              >
                Your confort is our concern
              </motion.h4>
              <div className="grid mt-8 grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-2  xs:grid-cols-1">
                <div className="w-[100%]">
                  <motion.img
                    initial={{ scaleX: 0, scaleY: 0 }}
                    viewport={{ once: true }}
                    whileInView={{ scaleX: 1, scaleY: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.9,
                      
                      
                    }}
                    class="object-cover h-48 lg:w-96 w-[100%] md:w-96 sm:w-[100%] xs:w-[100%] "
                    src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135255/Cedar%20Hotel/Edited/IMG_2741_gpgowb.jpg"
                  />
                </div>
                <motion.div
                  className="p-3 text-left"
                  initial={{ scaleX: 0, scaleY: 0 }}
                  viewport={{ once: true }}
                  whileInView={{ scaleX: 1, scaleY: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: 1.1,
                    
                    
                  }}
                >
                  <p>
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
                initial={{ scaleX: 0, scaleY: 0 }}
                viewport={{ once: true }}
                whileInView={{ scaleX: 1, scaleY: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 1.3,
                  
                  
                }}
              >
                <p>
                  “We have got the best Restaurant in town. The hotel is a must
                  see. The swimming pool and garden are beautiful. We are a
                  well-established and reputable caterer, hotel, conference
                  center and wedding venue. We offer a professional service for
                  everyone. Our main goal is to provide our clients with the
                  very best service and experience possible.”
                </p>
                <p className="font-bold text-1xl pt-4">Lorem Ipsum</p>
                <p className="text-1xl pt-2">Hotel Manager</p>
              </motion.div>
            </div>
            <div className="w-[100%]  justify-center items-center align-center">
              <motion.img
                initial={{ scaleX: 0, scaleY: 0 }}
                viewport={{ once: true }}
                whileInView={{ scaleX: 1, scaleY: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 1.5,
                  
                  
                }}
                className="h-[70%] xs:h-[100%] w-[100%] lg:w-[90%] md:w-[70%] sm:w-[100%] xs:w-[100%]  "
                src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135321/Cedar%20Hotel/Edited/IMG_2756_vo2tbu.jpg"
              />
            </div>
          </div>
        </div>
        <motion.div
          className="relative  bg-white"
          initial={{ scaleX: 0, scaleY: 0 }}
          viewport={{ once: true }}
          whileInView={{ scaleX: 1, scaleY: 1 }}
          transition={{
            duration: 0.3,
            delay: 0.5,
            
            
          }}
        >
          <div className=" mx-auto h-screen bg-[url('https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135173/Cedar%20Hotel/Edited/IMG_2682_je1dcw.jpg')] bg-cover bg-center max-h-[573px]  justify-center text-center pt-20 items-center home-background">
            <p className="font-dancing pt-[10%] text-white text-5xl pb-6 ">
              Facilities and amenities
            </p>
            <p className="font-cormorant font-bold text-white text-5xl uppercase ">
              Experience the infinity
            </p>
          </div>
          <div className="w-[100%] lg:absolute  md:absolute top-[400px] lg-[]  " >
            <div className="w-[70%] mx-auto  grid lg:grid-cols-2 gap-0    sm:grid-cols-1 xs:grid-col-1">
              <motion.div
                initial={{ scaleX: 0, scaleY: 0 }}
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
                  <p className="pt-[6%] font-semibold-600 text-black">
                    Feugiat nibh tellus aliquam amet donec ipsum eu. Ac aenean
                    pulvinar posuere tellus erat quisque
                  </p>
                  <button className="p-5 mt-[10%] uppercase w-[80%] bg-gray-300 tracking-widest">
                    Learn More
                  </button>
                </div>
              </motion.div>
              <motion.div
                initial={{ scaleX: 0, scaleY: 0 }}
                viewport={{ once: true }}
                whileInView={{ scaleX: 1, scaleY: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 0.5,
                  
                  
                }}
                className="h-[400px]"
              >
                <div className="w-100% h-[100%]  bg-cover bg-center  align-center text-center bg-[url('https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135278/Cedar%20Hotel/Edited/IMG_2740_wskrnd.jpg')]"></div>
              </motion.div>
            </div>
          </div>
          <motion.div
            className="w-[100%] lg:absolute  md:absolute top-[800px] lg-[]"
            initial={{ scaleX: 0, scaleY: 0 }}
            viewport={{ once: true }}
            whileInView={{ scaleX: 1, scaleY: 1 }}
            transition={{
              duration: 0.3,
              delay: 0.5,
              
              
            }}
          >
            <div className="w-[70%] mx-auto  grid lg:grid-cols-2 gap-0  sm:grid-cols-1 xs:grid-col-1 ">
              <motion.div
                initial={{ scaleX: 0, scaleY: 0 }}
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
                  <p className="pt-[6%] font-semibold-600 text-black">
                    Feugiat nibh tellus aliquam amet donec ipsum eu. Ac aenean
                    pulvinar posuere tellus erat quisque
                  </p>
                  <button className="p-5 mt-[10%] uppercase w-[80%] bg-gray-300 tracking-widest">
                    Learn More
                  </button>
                </div>
              </motion.div>
              <motion.div
                initial={{ scaleX: 0, scaleY: 0 }}
                viewport={{ once: true }}
                whileInView={{ scaleX: 1, scaleY: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 0.5,
                  
                  
                }}
                div
                className="h-[400px]   bg-white bg-cover bg-center"
              >
                <div className="w-100%  h-[100%]  bg-cover bg-center  align-center text-center bg-[url('https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135258/Cedar%20Hotel/Edited/IMG_2723_ffgq32.jpg')]"></div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ scaleX: 0, scaleY: 0 }}
          viewport={{ once: true }}
          whileInView={{ scaleX: 1, scaleY: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
            
            
          }}
          
          className="lg:mt-[690px] lg:w-[70%] md:w-[70%] sm:w-[100%] xs:w-[100%] mt-4 max-h-[573px]  mx-auto h-screen flex bg-[url('https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135118/Cedar%20Hotel/Edited/IMG_7139_rsfj6t.jpg')] bg-cover bg-center max-h-[573px]  justify-center text-center  items-center home-background"
        >
          <div className="lg:w-[40%] md:w-[60%] sm:w-[70%] xs:w-[80%] h-[40%] mt-[1%] align-center ">
            <p className="font-cormorant uppercase pt-[10%] text-white text-5xl pb-6 ">
              Party Events
            </p>
            <p className="pt-[6%] font-semibold-600 text-white">
              Feugiat nibh tellus aliquam amet donec ipsum eu. Ac aenean
              pulvinar posuere tellus erat quisque
            </p>
            <button className="p-5 mt-[10%] uppercase w-[80%] bg-gray-300 tracking-widest">
              Learn More
            </button>
          </div>
        </motion.div>

        <motion.div   initial={{ scaleX: 0, scaleY: 0 }}
          viewport={{ once: true }}
          whileInView={{ scaleX: 1, scaleY: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
            
            
          }} className="w-[70%] mx-auto  grid lg:grid-cols-2 gap-0  sm:grid-cols-1 xs:grid-col-1 ">
          <div className="h-[400px] bg-white text-center ">
            {" "}
            <div className="w-100% h-[400px]  align-center text-center">
              <p className="font-cormorant uppercase pt-[10%] font-bold text-black text-3xl pb-6 ">
                Swimming
              </p>
              <p className="pt-[6%] font-semibold-600 text-black">
                Feugiat nibh tellus aliquam amet donec ipsum eu. Ac aenean
                pulvinar posuere tellus erat quisque
              </p>
              <button className="p-5 mt-[10%] uppercase w-[80%] bg-gray-300 tracking-widest">
                Learn More
              </button>
            </div>
          </div>
          <div className="h-[400px] bg-white">
            <div className="w-100% h-[100%]  bg-cover bg-center  align-center text-center bg-[url('https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135173/Cedar%20Hotel/Edited/IMG_2682_je1dcw.jpg')]"></div>
          </div>
        </motion.div>
        <div className="w-[70%] mx-auto  grid lg:grid-cols-2 gap-0 bg-white  sm:grid-cols-1 xs:grid-col-1 ">
          <div className="h-[400px] text-center lg:order-last">
            <div className="w-100% h-[400px]  align-center text-center">
              <p className="font-cormorant uppercase pt-[10%] font-bold text-black text-3xl pb-6 ">
                Kids Play Area
              </p>
              <p className="pt-[6%] font-semibold-600 text-black">
                Feugiat nibh tellus aliquam amet donec ipsum eu. Ac aenean
                pulvinar posuere tellus erat quisque
              </p>
              <button className="p-5 mt-[10%] uppercase w-[80%] bg-gray-300 tracking-widest">
                Learn More
              </button>
            </div>
          </div>
          <div className="h-[400px]   bg-cover bg-center">
            <div className="w-100%  h-[100%]  bg-cover bg-center  align-center text-center bg-[url('https://res.cloudinary.com/dqab6gg7d/image/upload/v1669410984/Cedar%20Hotel/Edited/Rectangle_7_1_awvasf.png')]"></div>
          </div>
        </div>
        <motion.div  initial={{scaleY: 0,scaleX:0 }}
                 viewport={{ once: true }}
                 whileInView={{scaleX: 1,scaleY:1 }}
                 transition={{
                   duration: 0.5,
                   delay: 0.5,
                   
                   
                 }}  className=" lg:w-[70%] md:w-[70%] sm:w-[100%] xs:w-[100%] max-h-[573px]  mx-auto h-screen flex bg-[url('https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135255/Cedar%20Hotel/Edited/IMG_2741_gpgowb.jpg')] bg-cover bg-center max-h-[573px]  justify-center text-center  items-center home-background">
          <div className="lg:w-[40%] md:w-[60%] sm:w-[70%] xs:w-[80%] h-[40%] mt-[1%] align-center ">
            <p className="font-cormorant uppercase pt-[10%] text-white text-5xl pb-6 ">
              Accomodation
            </p>
            <p className="pt-[6%] font-semibold-600 text-white">
              Feugiat nibh tellus aliquam amet donec ipsum eu. Ac aenean
              pulvinar posuere tellus erat quisque
            </p>
            <button className="p-5 mt-[10%] uppercase w-[80%] bg-gray-300 tracking-widest">
              Learn More
            </button>
          </div>
        </motion.div>
        <div className="w-[100%] p-20 bg-white   items-center text-center justify-center ">
          <p className="font-dancing text-2xl font-bold mt-3 align-center">
            Welcome
          </p>
          <p className="font-cormorant  uppercase pt-[3%] text-black text-3xl pb-6 ">
            Make memories that last
          </p>
          <div className="grid gap-2 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
            <motion.div    initial={{opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
            
            
          }}  className="h-[900px] flex-col-reverse justify-center align-center items-center flex">
              <motion.img
                 initial={{opacity: 0 }}
                 viewport={{ once: true }}
                 whileInView={{opacity: 1 }}
                 transition={{
                   duration: 0.5,
                   delay: 1,
                   
                   
                 }} 
                className="h-[40%] w-[100%] bg-cover bg-center  my-5 align-center"
                src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135334/Cedar%20Hotel/Edited/IMG_7115_jw8cme.jpg"
              />
              <img
                className="h-[30%] w-[100%] bg-cover bg-center  align-center"
                src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135337/Cedar%20Hotel/Edited/IMG_2827_hxfhio.jpg"
              />
            </motion.div>
            <motion.div  initial={{opacity: 0 }}
                 viewport={{ once: true }}
                 whileInView={{opacity: 1 }}
                 transition={{
                   duration: 0.5,
                   delay: 1.5,
                   
                   
                 }}   className="h-[900px] flex-col-reverse  justify-center align-center items-center flex">
              <img
                className="h-[50%] w-[100%] m-5"
                src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135278/Cedar%20Hotel/Edited/IMG_2740_wskrnd.jpg"
              />
              <img
                className="h-[50%] w-[100%] bg-cover bg-center m-5" 
                src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135261/Cedar%20Hotel/Edited/IMG_2718_davs8g.jpg"
              />
            </motion.div>
            <motion.div  initial={{opacity: 0 }}
                 viewport={{ once: true }}
                 whileInView={{opacity: 1 }}
                 transition={{
                   duration: 0.5,
                   delay: 2,
                   
                   
                 }}  className="h-[900px] flex-col-reverse justify-center align-center items-center flex">
              <img
                className="h-[80%]  w-[100%] m-5 bg-cover" 
                src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135111/Cedar%20Hotel/Edited/IMG_2690_rlmeer.jpg"
              />
            </motion.div >
            <motion.div  initial={{opacity: 0 }}
                 viewport={{ once: true }}
                 whileInView={{opacity: 1 }}
                 transition={{
                   duration: 0.5,
                   delay: 2.5,
                   
                   
                 }}  className="h-[900px] flex-col-reverse justify-center align-center items-center flex">
              <img
                className="h-[50%] w-[100%] m-5 mt-10"
                src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135181/Cedar%20Hotel/Edited/IMG_2688_ql5nto.jpg"
              />
              <img
                className="h-[50%] w-[100%] m-5"
                src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135113/Cedar%20Hotel/Edited/IMG_7148_bam2yd.jpg"
              />
            </motion.div>
          </div>

          {/* <div class="flex_container flex gap-2 flex-wrap">
          <img className="w-[400px] h-[700px]" src="https://mdbootstrap.com/img/new/slides/041.jpg"/>
          <img className="max-w-[100%] h-auto" src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135255/Cedar%20Hotel/Edited/IMG_2741_gpgowb.jpg"/>
          <img className="max-w-[300px]   max-h-[600px]" src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135321/Cedar%20Hotel/Edited/IMG_2756_vo2tbu.jpg"/>
          <img className="max-w-[300px]   max-h-[600px]" src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135321/Cedar%20Hotel/Edited/IMG_2756_vo2tbu.jpg"/>
          <img className="max-w-[300px]   max-h-[600px]" src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135321/Cedar%20Hotel/Edited/IMG_2756_vo2tbu.jpg"/>
          <img className="max-w-[300px]   max-h-[600px]" src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135321/Cedar%20Hotel/Edited/IMG_2756_vo2tbu.jpg"/>

        </div> */}
        </div>
        <motion.div   initial={{ scaleX: 0, scaleY: 0 }}
                viewport={{ once: true }}
                whileInView={{ scaleX: 1, scaleY: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 0.5,
                  
                  
                }}
                 className="w-[100%] lg:flex md:flex sm:flex bg-white  justify-center align-center text-center ">
          <div className="lg:w-[90%] md:w-[90%] h-auto  sm:w-[100%] xs:w-[100%] grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  xs:grid-cols-1">
            <div className="h-[500px] w-[100%] bg-slate-600">
              <p className="text-white m-auto">Maps goes here</p>
            </div>
            <div className="h-[500px] w-[100%] text-left">
              <p className="font-dancing mt-10 ml-10 text-black text-3xl">
                Location
              </p>
              <p className="font-cormorant font-bold mt-6 ml-10 text-black text-3xl uppercase">
                Getting there
              </p>
              <p className="font-jost mt-6 ml-10 text-black text-1xl">
                Located along Meru Maua Road approximately 17 Kms from Meru
                town.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </>
  );
};

export default LandingPage;
