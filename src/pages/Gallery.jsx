import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const Gallery = () => {
  const [toggletab, setToggleTab] = useState(1);
  const [menubar, setMenubar] = useState(0);
  const handleTab = (index) => {
    setToggleTab(index);
  };
  const menu = (bar) => {
    if (bar === 1) {
      setMenubar(bar);
    } else if (bar !== 1) {
      setMenubar(0);
    } else setMenubar(0);
  };
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
          <div className="h-[100%] w-[100%] overlay-color flex justify-center">
            <h2 className="text-center text-4xl font-jost text-white font-semibold tracking-[2rem] self-center hover:scale-105 hover:ease-in-out animate-pulse">
              GALLERY
            </h2>
          </div>
        </motion.div>
      </div>

      {/* Your Content Goes Here */}

      <div className="">
        <div className="mb-4 items-center flex justify-center w-full font-jost  border-b border-gray-200 ">
          <ul
            className="flex mt-4 opacity-100 border border-gray-100 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:border-gray-700 lg:mx-[5rem] text-sm font-medium"
            role="tablist"
          >
            <li className="mr-2">
              <button
                className={
                  toggletab === 1
                    ? "text-primary-color inline-block p-4 border-t-2"
                    : "inline-block p-4 "
                }
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
                className={
                  toggletab === 2
                    ? "text-primary-color inline-block p-4 border-t-2"
                    : "inline-block p-4  "
                }
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
                className={
                  toggletab === 3
                    ? "text-primary-color inline-block p-4  border-t-2 "
                    : "inline-block p-4  "
                }
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
                className={
                  toggletab === 4
                    ? "text-primary-color inline-block p-4  border-t-2"
                    : "inline-block p-4 "
                }
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

        {/* create a div to hold the tabs content */}
        {/* Grid Template */}
        {/* <div className="grid gird-rows-2">
          <div className="grid sm:grid-cols-1 grid-cols-2">
            <div className="grid grid-rows-2">
              <div className="grid grid-cols-2">
                <div className="image-1"></div>
                <div className="image-2"></div>
              </div>
              <div className="image-3"></div>
            </div>
            <div className="image-4"></div>
          </div>
          <div className="grid sm:grid-cols-1 grid-cols-2">
            <div className="image-4"></div>
            <div className="grid grid-rows-2">
              <div className="grid grid-cols-2">
                <div className="image-1"></div>
                <div className="image-2"></div>
              </div>
              <div className="image-3"></div>
            </div>
          </div>
        </div> */}

        <div className="h-full">
          {/* Garden */}
          <div className={toggletab === 1 ? "block my-8" : "hidden"}>
            <div className="grid gird-rows-2 mx-10 sm:space-y-10 md:space-y-4">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 md:space-x-4 md:space-y-4">
                <div className="grid grid-rows-2 sm:space-y-10 md:space-y-4">
                  <div className="grid md:grid-cols-1 space-y-4 lg:grid-cols-2 lg:space-x-4">
                    <div className="image-1 h-[300px] w-full relative overflow-hidden self-center ">
                      <img
                        className="object-cover transform transition-all w-full h-full hover:scale-110 "
                        src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135112/Cedar%20Hotel/Edited/IMG_7158_kxazn0.jpg"
                        alt="garden image1"
                      />
                    </div>
                    <div className="image-2 h-[300px] relative overflow-hidden">
                      <img
                        className="object-cover transform transition-all h-full w-full hover:scale-110 "
                        src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135337/Cedar%20Hotel/Edited/IMG_2827_hxfhio.jpg"
                        alt="garden image2"
                      />
                    </div>
                  </div>
                  <div className="image-3 h-full md:h-[300px]  w-full relative overflow-hidden">
                    <img
                      className="object-cover transform transition-all h-full w-full hover:scale-110 "
                      src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135357/Cedar%20Hotel/Edited/IMG_7119_rlfhmj.jpg"
                      alt="garden image3"
                    />
                  </div>
                </div>
                <div className="image-4 h-[630px] relative overflow-hidden">
                  <img
                    className="object-cover transform transition-all h-full w-full  hover:scale-110"
                    src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135321/Cedar%20Hotel/Edited/IMG_2756_vo2tbu.jpg"
                    alt="garden image4"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 space-x-4 sm:space-y-4 md:space-y-0 ">
                <div className="image-4 h-[630px] relative overflow-hidden">
                  <img
                    className="object-cover transform transition-all h-full w-full hover:scale-110 "
                    src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135075/Cedar%20Hotel/Edited/IMG_7140_vojgco.jpg"
                    alt="garden image4"
                  />
                </div>
                <div className="grid grid-rows-2 space-y-4">
                  <div className="grid md:grid-cols-1 space-y-4 lg:grid-cols-2 lg:space-x-4">
                    <div className="image-1 h-[300px] w-full relative overflow-hidden self-center">
                      <img
                        className="object-cover transform transition-all h-full w-full hover:scale-110  "
                        src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135354/Cedar%20Hotel/Edited/IMG_7099_fph3oo.jpg"
                        alt="garden image1"
                      />
                    </div>
                    <div className="image-2 h-[300px] relative overflow-hidden">
                      <img
                        className="object-cover transform transition-all h-full w-full hover:scale-110 "
                        src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135357/Cedar%20Hotel/Edited/IMG_7119_rlfhmj.jpg"
                        alt="garden image2"
                      />
                    </div>
                  </div>
                  <div className="image-3 h-[300px] w-full relative overflow-hidden">
                    <img
                      className="object-cover transform transition-all h-full w-full hover:scale-110 "
                      src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135200/Cedar%20Hotel/Edited/IMG_2726_cxcoti.jpg"
                      alt="garden image3"
                    />
                  </div>
                </div>
              </div>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 md:space-x-4 md:space-y-4">
                <div className="grid grid-rows-2 sm:space-y-10 md:space-y-4">
                  <div className="grid md:grid-cols-1 space-y-4 lg:grid-cols-2 lg:space-x-4">
                    <div className="image-1 h-[300px] w-full relative overflow-hidden self-center ">
                      <img
                        className="object-cover transform transition-all w-full h-full hover:scale-110 "
                        src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1684606622/Cedar%20Hotel/new/new/PHOTO-2023-05-10-10-40-12_trgkrl.jpg"
                        alt="garden image1"
                      />
                    </div>
                    <div className="image-2 h-[300px] relative overflow-hidden">
                      <img
                        className="object-cover transform transition-all h-full w-full hover:scale-110 "
                        src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1684606608/Cedar%20Hotel/new/new/PHOTO-2023-05-10-10-40-11_1_wc9zim.jpg"
                        alt="garden image2"
                      />
                    </div>
                  </div>
                  <div className="image-3 h-full md:h-[300px]  w-full relative overflow-hidden">
                    <img
                      className="object-cover transform transition-all h-full w-full hover:scale-110 "
                      src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1670937405/Cedar%20Hotel/new/new/PHOTO-2022-12-11-16-11-41_1_madexl.jpg"
                      alt="garden image3"
                    />
                  </div>
                </div>
                <div className="image-4 h-[630px] relative overflow-hidden">
                  <img
                    className="object-cover transform transition-all h-full w-full  hover:scale-110"
                    src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1670937401/Cedar%20Hotel/new/new/PHOTO-2022-12-11-16-11-39_1_upism7.jpg"
                    alt="garden image4"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Swimming Pool */}
          <div className={toggletab === 2 ? "block my-8" : "hidden"}>
            <div className="grid gird-rows-2 mx-10 sm:space-y-10 md:space-y-4">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 md:space-x-4 md:space-y-4">
                <div className="grid grid-rows-2 sm:space-y-10 md:space-y-4">
                  <div className="grid md:grid-cols-1 space-y-4 lg:grid-cols-2 lg:space-x-4">
                    <div className="image-1 h-[300px] w-full relative overflow-hidden self-center ">
                      <img
                        className="object-cover transform transition-all w-full h-full hover:scale-110 "
                        src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135173/Cedar%20Hotel/Edited/IMG_2682_je1dcw.jpg"
                        alt="garden image1"
                      />
                    </div>
                    <div className="image-2 h-[300px] relative overflow-hidden">
                      <img
                        className="object-cover transform transition-all h-full w-full hover:scale-110 "
                        src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1670355380/Cedar%20Hotel/play%20area/Swimming/IMG_7074_lqljjd.jpg"
                        alt="garden image2"
                      />
                    </div>
                  </div>
                  <div className="image-3 h-full md:h-[300px]  w-full relative overflow-hidden">
                    <img
                      className="object-cover transform transition-all h-full w-full hover:scale-110 "
                      src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1670355327/Cedar%20Hotel/play%20area/Swimming/IMG_2700_cq3enw.jpg"
                      alt="garden image3"
                    />
                  </div>
                </div>
                <div className="image-4 h-[630px] relative overflow-hidden">
                  <img
                    className="object-cover transform transition-all h-full w-full  hover:scale-110"
                    src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135184/Cedar%20Hotel/Edited/IMG_2685_n2slab.jpg"
                    alt="garden image4"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Play area */}
          <div className={toggletab === 3 ? "block my-8" : "hidden"}>
            <div className="grid gird-rows-2 mx-10 sm:space-y-10 md:space-y-4">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 md:space-x-4 md:space-y-4">
                <div className="grid grid-rows-2 sm:space-y-10 md:space-y-4">
                  <div className="grid md:grid-cols-1 space-y-4 lg:grid-cols-2 lg:space-x-4">
                    <div className="image-1 h-[300px] w-full relative overflow-hidden self-center ">
                      <img
                        className="object-cover transform transition-all w-full h-full hover:scale-110 "
                        src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1670355436/Cedar%20Hotel/play%20area/play%20area/IMG_2711_mukcs4.jpg"
                        alt="garden image1"
                      />
                    </div>
                    <div className="image-2 h-[300px] relative overflow-hidden">
                      <img
                        className="object-cover transform transition-all h-full w-full hover:scale-110 "
                        src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1670355431/Cedar%20Hotel/play%20area/play%20area/IMG_2708_mwmtgj.jpg"
                        alt="garden image2"
                      />
                    </div>
                  </div>
                  <div className="image-3 h-full md:h-[300px]  w-full relative overflow-hidden">
                    <img
                      className="object-cover transform transition-all h-full w-full hover:scale-110 "
                      src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1670355398/Cedar%20Hotel/play%20area/play%20area/IMG_2707_ufgrpb.jpg"
                      alt="garden image3"
                    />
                  </div>
                </div>
                <div className="image-4 h-[630px] relative overflow-hidden">
                  <img
                    className="object-cover transform transition-all h-full w-full  hover:scale-110"
                    src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1670355428/Cedar%20Hotel/play%20area/play%20area/IMG_2706_kievv4.jpg"
                    alt="garden image4"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 space-x-4 sm:space-y-4 md:space-y-0 ">
                <div className="image-4 h-[630px] relative overflow-hidden">
                  <img
                    className="object-cover transform transition-all h-full w-full hover:scale-110 "
                    src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1670937381/Cedar%20Hotel/new/new/PHOTO-2022-12-11-16-11-40_1_r48dhz.jpg"
                    alt="garden image4"
                  />
                </div>
                <div className="grid grid-rows-2 space-y-4">
                  <div className="grid md:grid-cols-1 space-y-4 lg:grid-cols-2 lg:space-x-4">
                    <div className="image-1 h-[300px] w-full relative overflow-hidden self-center">
                      <img
                        className="object-cover transform transition-all h-full w-full hover:scale-110  "
                        src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1670937391/Cedar%20Hotel/new/new/PHOTO-2022-12-11-16-11-38_vzm6pe.jpg"
                        alt="garden image1"
                      />
                    </div>
                    <div className="image-2 h-[300px] relative overflow-hidden">
                      <img
                        className="object-cover transform transition-all h-full w-full hover:scale-110 "
                        src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1670937398/Cedar%20Hotel/new/new/PHOTO-2022-12-11-16-11-40_rleits.jpg"
                        alt="garden image2"
                      />
                    </div>
                  </div>
                  <div className="image-3 h-[300px] w-full relative overflow-hidden">
                    <img
                      className="object-cover transform transition-all h-full w-full hover:scale-110 "
                      src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1670937394/Cedar%20Hotel/new/new/PHOTO-2022-12-11-16-11-39_2_l7zksr.jpg"
                      alt="garden image3"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Rooms */}
          <div className={toggletab === 4 ? "block my-8" : "hidden"}>
            {/* Swimming Pool */}
            <div className="grid gird-rows-2 mx-10 sm:space-y-10 md:space-y-4">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 md:space-x-4 md:space-y-4">
                <div className="grid grid-rows-2 sm:space-y-10 md:space-y-4">
                  <div className="grid md:grid-cols-1 space-y-4 lg:grid-cols-2 lg:space-x-4">
                    <div className="image-1 h-[300px] w-full relative overflow-hidden self-center ">
                      <img
                        className="object-cover transform transition-all w-full h-full hover:scale-110 "
                        src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1684606645/Cedar%20Hotel/new/new/PHOTO-2023-05-10-10-40-17_bitbn8.jpg"
                        alt="garden image1"
                      />
                    </div>
                    <div className="image-2 h-[300px] relative overflow-hidden">
                      <img
                        className="object-cover transform transition-all h-full w-full hover:scale-110 "
                        src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1684606623/Cedar%20Hotel/new/new/PHOTO-2023-05-10-10-40-16_ihxet2.jpg"
                        alt="garden image2"
                      />
                    </div>
                  </div>
                  <div className="image-3 h-full md:h-[300px]  w-full relative overflow-hidden">
                    <img
                      className="object-cover transform transition-all h-full w-full hover:scale-110 "
                      src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1670937369/Cedar%20Hotel/new/new/PHOTO-2022-12-11-16-29-49_tpqlze.jpg"
                      alt="garden image3"
                    />
                  </div>
                </div>
                <div className="image-4 h-[630px] relative overflow-hidden">
                  <img
                    className="object-cover transform transition-all h-full w-full  hover:scale-110"
                    src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1670937365/Cedar%20Hotel/new/new/PHOTO-2022-12-11-16-29-49_1_lcyx12.jpg"
                    alt="garden image4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Gallery;
