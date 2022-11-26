import React, { useState } from "react";
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const Gallery = () => {
  const [toggletab, setToggleTab] = useState(1);
  const [menubar, setMenubar]=useState(0)
  const handleTab = (index) => {
    setToggleTab(index);
  };
  const menu=(bar)=>{
    if (bar===1){
      setMenubar(bar)
    }else if (bar!==1){
      setMenubar(0)
    }else 
    setMenubar(0)
  }
  return (
    <>
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
            GALLERY
          </h2>
        </motion.div>
      </div>

      {/* Your Content Goes Here */}

      <div className=''>
        <div className="mb-4 items-center flex justify-between  w-full md:flex md:w-auto md:order-1  border-b border-gray-200 dark:border-gray-700">
          <ul
            className="flex flex-col mt-4 opacity-100 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 sm:mx- lg:mx-96 text-sm font-medium  "
            role="tablist"
          >
            <li className="mr-2">
              <button 
              className={toggletab === 1 ? "text-primary-color inline-block p-4 rounded-t-lg border-t-2" : "inline-block p-4 rounded-t-lg" }
              onClick={() => handleTab(1)}
                type="button"
                role="tab"
                aria-selected="false"
              >
                GARDEN
              </button>
            </li>
            <li className="mr-2">
              <button
                className={toggletab === 2 ? "text-primary-color inline-block p-4 rounded-t-lg border-t-2" : "inline-block p-4 rounded-t-lg "}
                onClick={() => handleTab(2)}
                type="button"
                role="tab"
                aria-selected="false"
              >
                SWIMMING POOL
              </button>
            </li>
            <li className="mr-2">
              <button
                className={toggletab === 3 ? "text-primary-color inline-block p-4 rounded-t-lg border-t-2 " : "inline-block p-4 rounded-t-lg "}
                onClick={() => handleTab(3)}
                type="button"
                role="tab"
                aria-selected="false"
              >
                PLAY AREA
              </button>
            </li>
            <li className="mr-2">
              <button
               className={toggletab === 4 ? "text-primary-color inline-block p-4 rounded-t-lg border-t-2" : "inline-block p-4 rounded-t-lg "}
                onClick={() => handleTab(4)}
                type="button"
                role="tab"
                aria-selected="false"
              >
                ROOMS
              </button>
            </li>
          </ul>
        </div>
        <div></div>
        {/* create a div to hold the tabs content */}
        <div className="">
          <div className={toggletab === 1 ? "block" : "hidden"}>
            {/* <div className="mx-16 sm:mx-20  sm:grid sm:grid-cols-1  md:grid md:grid-cols-2 md:gap-6 lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="grid grid-cols-2 gap-8 lg:m-4 ">
                <div className="h-3/4">
                  <img
                    className="h-full w-full object-fill transform transition-all hover:scale-110"
                    src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135112/Cedar%20Hotel/Edited/IMG_7158_kxazn0.jpg"
                    alt="garden"
                  />
                </div>
                <div className="h-3/4">
                  <img
                    className="h-full w-full transform transition-all hover:scale-110"
                    src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135337/Cedar%20Hotel/Edited/IMG_2827_hxfhio.jpg"
                    alt="Garden"
                  />
                </div>
                <div className="col-span-2 h-3/4 w-full -my-14">
                  <img
                    className="h-full w-full transform transition-all hover:scale-110"
                    src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135357/Cedar%20Hotel/Edited/IMG_7119_rlfhmj.jpg"
                    alt="garden images"
                  />
                </div>
              </div>
              <div className="h-3/4 lg:m-4 sm:-my-20  ">
                <img
                  className="h-full w-full sm:h-96 sm:mb-10 object transform transition-all hover:scale-110"
                  src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135118/Cedar%20Hotel/Edited/IMG_7139_rsfj6t.jpg"
                  alt="garden "
                />
              </div>
              <div className="h-full lg:m-4 sm:my-20  lg:-my-32">
                <img
                  className="h-full w-full sm:h-96 object-fit transform transition-all hover:scale-110"
                  src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135075/Cedar%20Hotel/Edited/IMG_7140_vojgco.jpg"
                  alt="garden images"
                />
              </div>
              <div className="grid grid-cols-2 gap-8  lg:-my-32 ">
                <div className="h-1/2 w-full">
                  <img
                    className="h-full w-full transform transition-all hover:scale-110"
                    src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135354/Cedar%20Hotel/Edited/IMG_7099_fph3oo.jpg"
                    alt="indiginous trees"
                  />
                </div>
                <div className="h-1/2 w-full">
                  <img
                    className="h-full w-full transform transition-all hover:scale-110"
                    src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135357/Cedar%20Hotel/Edited/IMG_7119_rlfhmj.jpg"
                    alt="beautiful terrain"
                  />
                </div>
                <div className="col-span-2 h-5/6 h-full w-full  ">
                  <img
                    className="h-full w-full sm:mt-8 object-fill transform transition-all hover:scale-110"
                    src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135200/Cedar%20Hotel/Edited/IMG_2726_cxcoti.jpg"
                    alt="gardens"
                  />
                </div>
              </div>
            </div> */}
            <div className='container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                <div className='grid grid-cols-2 gap-4 '>
                      <div className='h-full w-full'>
                         <img
                          className='object-fill transform transition-all hover:scale-110 rounded-lg sm:h-full sm-w-full '
                          src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135112/Cedar%20Hotel/Edited/IMG_7158_kxazn0.jpg"
                          alt='garden image1'
                            />
                      </div>
                      <div className='sm:h-full sm:w-full'>
                        <img
                          className='object-fill transform transition-all hover:scale-110 rounded-lg sm:h-full sm:w-full'
                          src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135337/Cedar%20Hotel/Edited/IMG_2827_hxfhio.jpg"
                          alt='garden image2'
                          />
                      </div>
                      <div className='col-span-2 sm:h-1/2 sm:w-full lg:h-2/3'>
                        <img
                            className='object-fill transform transition-all hover:scale-110 rounded-lg sm:h-full sm:w-full lg:h-5/6'
                            src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135357/Cedar%20Hotel/Edited/IMG_7119_rlfhmj.jpg"
                            alt='garden image3'
                          />
                      </div>
                </div>
                <div className='sm:h-full sm:w-full sm:bottom-36 sm:mx-6 md:h-3/4 relative md:top-0 lg:px-4 '>
                      <img 
                        className='object-fill transform transition-all hover:scale-110 rounded-lg h-full w-full md:py-4'
                        src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135118/Cedar%20Hotel/Edited/IMG_7139_rsfj6t.jpg"
                        alt='garden image4'
                      />
                </div>
                <div className='sm:h-full sm:w-full relative sm:bottom-24 lg:bottom-36 md:h-3/5 md:my-4 md:p-4'>
                <img 
                      className='object-fill transform transition-all hover:scale-110 rounded-lg sm:h-full sm:w-full'
                      src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135075/Cedar%20Hotel/Edited/IMG_7140_vojgco.jpg"
                      alt='garden image4'
                    />
                </div>
                <div className='sm:grid sm:grid-cols-2 gap-4 relative sm:bottom-16 lg:bottom-28 lg:px-6'>
                      <div className='sm:h-3/4 sm:w-full'>
                         <img
                          className='object-fill transform transition-all hover:scale-110 rounded-lg sm:h-full sm:w-full '
                          src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135354/Cedar%20Hotel/Edited/IMG_7099_fph3oo.jpg"
                          alt='garden image1'
                            />
                      </div>
                      <div className='sm:h-3/4 sm:w-full'>
                        <img
                          className='object-fill transform transition-all hover:scale-110 rounded-lg sm:h-full sm:w-full'
                          src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135357/Cedar%20Hotel/Edited/IMG_7119_rlfhmj.jpg"
                          alt='garden image2'
                          />
                      </div>
                      <div className='col-span-2 sm:h-1/2 sm:w-full sm:-my-16 lg:-my-20 '>
                        <img
                            className='object-fill transform transition-all hover:scale-110 rounded-lg h-full w-full'
                             src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135200/Cedar%20Hotel/Edited/IMG_2726_cxcoti.jpg"
                            alt='garden image3'
                          />
                      </div>
                </div>
            </div>
          </div>
          <div className={toggletab === 2 ? "block" : "hidden"}>
            <div className="container grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-6 mx-auto lg:py-6 ">
              <div className=" flex justify-center rounded-lg w-full sm:h-3/4 md:h-5/6 lg:h-full ">
                  <img 
                  className='sm:h-full md:h-5/6 lg:h-3/4 w-full object-cover object-center rounded insect-0 transform transition-all hover:scale-110 '
                  src='https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135173/Cedar%20Hotel/Edited/IMG_2682_je1dcw.jpg'
                  alt=''
                  />
              </div>
              <div className="flex justify-center rounded-lg sm:h-3/4 md:h-5/6 lg:h-full">
              <img 
                  className='sm:h-full md:h-5/6 lg:h-3/4 w-full object-cover object-center rounded insect-0 transform transition-all hover:scale-110 '
                  src='https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135184/Cedar%20Hotel/Edited/IMG_2685_n2slab.jpg'
                  alt=''
                  />
              </div>
              <div className=" flex justify-center rounded-lg sm:h-3/4 md:h-5/6 lg:h-full ">
              <img 
                  className='sm:h-full md:h-5/6 lg:h-3/4 w-full object-cover object-center rounded insect-0 transform transition-all hover:scale-110 '
                  src=' https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135167/Cedar%20Hotel/Edited/IMG_2683_qs0dkx.jpg'
                  alt=''
                  />
              </div>
              <div className="flex justify-center rounded-lg sm:h-3/4 md:h-5/6 lg:h-full relative md:bottom-32 lg:bottom-24">
              <img 
                  className=' w-full object-cover object-center rounded insect-0 transform transition-all hover:scale-110 '
                  src='https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135173/Cedar%20Hotel/Edited/IMG_2682_je1dcw.jpg'
                  alt=''
                  />
              </div>
              <div className=" flex justify-center rounded-lg sm:h-3/4 md:h-5/6 lg:h-full relative md:bottom-32 lg:bottom-24">
              <img 
                  className=' w-full object-cover object-center rounded insect-0 transform transition-all hover:scale-110 '
                  src='https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135173/Cedar%20Hotel/Edited/IMG_2682_je1dcw.jpg'
                  alt=''
                  />
              </div>
              <div className="flex justify-center rounded-lg sm:h-3/4 md:h-5/6 lg:h-full relative md:bottom-32 lg:bottom-24">
              <img 
                  className=' w-full object-cover object-center rounded insect-0 transform transition-all hover:scale-110 '
                  src='https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135173/Cedar%20Hotel/Edited/IMG_2682_je1dcw.jpg'
                  alt=''
                  />
              </div>  
            </div>
          </div>
          <div className={toggletab === 3 ? "block" : "hidden"}>
          <div className="mx-16  sm:grid sm:grid-cols-1 md:grid md:grid-cols-2 md:gap-6 lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="grid grid-cols-2 gap-8 m-4 ">
                <div className="h-3/4">
                  <img
                    className="h-full w-full object-fit transform transition-all hover:scale-110"
                    src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135112/Cedar%20Hotel/Edited/IMG_7158_kxazn0.jpg"
                    alt="garden"
                  />
                </div>
                <div className="h-3/4">
                  <img
                    className="h-full w-full transform transition-all hover:scale-110"
                    src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135337/Cedar%20Hotel/Edited/IMG_2827_hxfhio.jpg"
                    alt="Garden"
                  />
                </div>
                <div className="col-span-2 h-3/4 w-full -my-14">
                  <img
                    className="h-full w-full transform transition-all hover:scale-110"
                    src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135357/Cedar%20Hotel/Edited/IMG_7119_rlfhmj.jpg"
                    alt="garden images"
                  />
                </div>
              </div>
              <div className="h-3/4 m-4 ">
                <img
                  className="h-full w-full object transform transition-all hover:scale-110"
                  src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135118/Cedar%20Hotel/Edited/IMG_7139_rsfj6t.jpg"
                  alt="garden "
                />
              </div>
              <div className="h-full m-4  -my-32">
                <img
                  className="h-full w-full object-fit transform transition-all hover:scale-110"
                  src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135075/Cedar%20Hotel/Edited/IMG_7140_vojgco.jpg"
                  alt="garden images"
                />
              </div>
              <div className="grid grid-cols-2 gap-8  -my-32 ">
                <div className="h-1/2 w-full">
                  <img
                    className="h-full w-full transform transition-all hover:scale-110"
                    src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135354/Cedar%20Hotel/Edited/IMG_7099_fph3oo.jpg"
                    alt="indiginous trees"
                  />
                </div>
                <div className="h-1/2 w-full">
                  <img
                    className="h-full w-full transform transition-all hover:scale-110"
                    src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135357/Cedar%20Hotel/Edited/IMG_7119_rlfhmj.jpg"
                    alt="beautiful terrain"
                  />
                </div>
                <div className="col-span-2 h-5/6 w-full -my-48 ">
                  <img
                    className="h-full w-full object-fit transform transition-all hover:scale-110"
                    src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135200/Cedar%20Hotel/Edited/IMG_2726_cxcoti.jpg"
                    alt="gardens"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={toggletab === 4 ? "block" : "hidden"}>
          <div className="mx-16  sm:grid sm:grid-cols-1 md:grid md:grid-cols-2 md:gap-6 lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="grid grid-cols-2 gap-8 m-4 ">
                <div className="h-3/4">
                  <img
                    className="h-full w-full object-fit transform transition-all hover:scale-110"
                    src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135112/Cedar%20Hotel/Edited/IMG_7158_kxazn0.jpg"
                    alt="garden"
                  />
                </div>
                <div className="h-3/4">
                  <img
                    className="h-full w-full transform transition-all hover:scale-110"
                    src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135337/Cedar%20Hotel/Edited/IMG_2827_hxfhio.jpg"
                    alt="Garden"
                  />
                </div>
                <div className="col-span-2 h-3/4 w-full -my-14">
                  <img
                    className="h-full w-full transform transition-all hover:scale-110"
                    src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135357/Cedar%20Hotel/Edited/IMG_7119_rlfhmj.jpg"
                    alt="garden images"
                  />
                </div>
              </div>
              <div className="h-3/4 m-4 ">
                <img
                  className="h-full w-full object transform transition-all hover:scale-110"
                  src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135118/Cedar%20Hotel/Edited/IMG_7139_rsfj6t.jpg"
                  alt="garden "
                />
              </div>
              <div className="h-full m-4  -my-32">
                <img
                  className="h-full w-full object-fit transform transition-all hover:scale-110"
                  src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135075/Cedar%20Hotel/Edited/IMG_7140_vojgco.jpg"
                  alt="garden images"
                />
              </div>
              <div className="grid grid-cols-2 gap-8  -my-32 ">
                <div className="h-1/2 w-full">
                  <img
                    className="h-full w-full transform transition-all hover:scale-110"
                    src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135354/Cedar%20Hotel/Edited/IMG_7099_fph3oo.jpg"
                    alt="indiginous trees"
                  />
                </div>
                <div className="h-1/2 w-full">
                  <img
                    className="h-full w-full transform transition-all hover:scale-110"
                    src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135357/Cedar%20Hotel/Edited/IMG_7119_rlfhmj.jpg"
                    alt="beautiful terrain"
                  />
                </div>
                <div className="col-span-2 h-5/6 w-full -my-48 ">
                  <img
                    className="h-full w-full object-fit transform transition-all hover:scale-110"
                    src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135200/Cedar%20Hotel/Edited/IMG_2726_cxcoti.jpg"
                    alt="gardens"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Gallery;
