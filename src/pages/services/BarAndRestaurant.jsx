import React, { useState } from "react";
import MainBG from "../../components/MainBG";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
const BarAndRestaurant = () => {
  const [toggletab, setToggleTab] = useState(1);
  const handleTab = (index) => {
    setToggleTab(index);
  };
  const [food, setFood] = useState([
    {
      name: "Chicken",
      url: "https://res.cloudinary.com/dqab6gg7d/image/upload/v1669350725/Cedar%20Hotel/Edited/chicken_xjwzxk.jpg",
    },
    {
      name: "Beef",
      url: "https://res.cloudinary.com/dqab6gg7d/image/upload/v1669350359/Cedar%20Hotel/Edited/beef_obrbys.jpg",
    },
    {
      name: "Pork",
      url: "https://res.cloudinary.com/dqab6gg7d/image/upload/v1669350369/Cedar%20Hotel/Edited/pork_conkjv.webp",
    },
    {
      name: "Fish",
      url: "https://res.cloudinary.com/dqab6gg7d/image/upload/v1669350340/Cedar%20Hotel/Edited/fish_xku8dt.jpg",
    },
    {
      name: "Goat",
      url: "https://res.cloudinary.com/dqab6gg7d/image/upload/v1669351335/Cedar%20Hotel/Edited/goat_me2m7o.jpg",
    },
  ]);
  const [cocktails, setCocktails] = useState([
    {
      name: "Juice",
      url: "https://res.cloudinary.com/dqab6gg7d/image/upload/v1669350332/Cedar%20Hotel/Edited/juice_v8e2xf.jpg",
    },
    {
      name: "Soda",
      url: "https://res.cloudinary.com/dqab6gg7d/image/upload/v1669350319/Cedar%20Hotel/Edited/soda_gnbfnz.jpg",
    },
    {
      name: "Alcohol",
      url: "https://res.cloudinary.com/dqab6gg7d/image/upload/v1669350304/Cedar%20Hotel/Edited/alcohol_dmoq7z.avif",
    },
  ]);
  const [acompanments, setAcompanments] = useState([
    {
      name: "Ugali",
      url: "",
      url: "https://res.cloudinary.com/dqab6gg7d/image/upload/v1669350313/Cedar%20Hotel/Edited/ugali_wkgzye.jpg",
    },
    {
      name: "Rice",
      url: "https://res.cloudinary.com/dqab6gg7d/image/upload/v1669350333/Cedar%20Hotel/Edited/rice_o0m59c.jpg",
    },
    {
      name: "Chapati",
      url: "https://res.cloudinary.com/dqab6gg7d/image/upload/v1669350352/Cedar%20Hotel/Edited/chapati_cwgmx5.jpg",
    },
    {
      name: "Chips",
      url: "https://res.cloudinary.com/dqab6gg7d/image/upload/v1669350332/Cedar%20Hotel/Edited/chips_m8z2ii.jpg",
    },
    {
      name: "Saute",
      url: "https://res.cloudinary.com/dqab6gg7d/image/upload/v1669350309/Cedar%20Hotel/Edited/saute_qpltcb.jpg",
    },
    {
      name: "Roast Potatoes,url:",
      url: "https://res.cloudinary.com/dqab6gg7d/image/upload/v1669350325/Cedar%20Hotel/Edited/potatoes_cpj5yp.jpg",
    },
  ]);

  const [viewer, setViewer] = useState("");
  const [animate, setAnimate] = useState(true);

  const fireAnimation = (url) => {
    setAnimate(false);
    setViewer(url);
    setTimeout(function () {
      setAnimate(true);
    }, 2000);
  };

  return (
    <div>
      <Navbar />
      <MainBG />
      <div className="w-[100%] justify-center flex flex-col-reverse items-center align-center">
        <p className="font-cormorant font-bold uppercase text-4xl">
          Todays Special
        </p>
        <p className="font-dancing text-3xl">Menu that fits you palatte</p>
      </div>
      <div className="w-[100%] p-auto grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-2">
        <div className="w-[100%] ">
          <motion.div
            initial={{
              y: -100,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            class="dark:border-gray-700 ml-[10%]"
          >
            <ul class="flex -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
              <li class="mr-2">
                <a
                  id="tabs-contact-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#tabs-home"
                  role="tab"
                  aria-controls="tabs-contact"
                  aria-selected="false"
                  class="inline-flex p-4 uppercase font-jost rounded-t-lg border-b-2 text-black font-bold border-transparent hover:text-green-700 hover:border-green-700 dark:hover:text-green-700 group focus:border-green-700
                  active"
                >
                  Vision
                </a>
              </li>
              <li class="mr-2">
                <a
                  id="tabs-contact-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#tabs-profile"
                  role="tab"
                  aria-controls="tabs-contact"
                  aria-selected="false"
                  class="inline-flex p-4 uppercase font-jost rounded-t-lg border-b-2 text-black font-bold border-transparent hover:text-green-700 hover:border-green-700 dark:hover:text-green-700 group  focus:border-green-700"
                >
                  Mission
                </a>
              </li>
              
              <li class="mr-2">
                <a
                  id="tabs-contact-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#tabs-profile"
                  role="tab"
                  aria-controls="tabs-contact"
                  aria-selected="false"
                  class="inline-flex p-4 uppercase font-jost rounded-t-lg border-b-2 text-black font-bold border-transparent hover:text-green-700 hover:border-green-700 dark:hover:text-green-700 group  focus:border-green-700"
                >
                  Cocktails
                </a>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{
              y: -100,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="tab-content p-4 lg:ml-[10%] md:ml-[10%] sm:ml-[5%] ml-[10%]"
            id="tabs-tabContent"
          >
            <div
              class="tab-pane  show active"
              id="tabs-home"
              role="tabpanel"
              aria-labelledby="tabs-home-tab"
            >
              <div className="w-[100%] ">
                <div className=" w-[100%] lg:ml-[1%] sm:ml-[10%] md:ml-[10%] ml-[5%]">
                  <ul>
                    {food.map((item) => {
                      return (
                        <li
                          onClick={() => {
                            fireAnimation(item.url);
                          }}
                          className="my-5 font-cormorant font-bold flex cursor-pointer hover:text-3xl transition-all ease-in duration-75"
                          key={item.name}
                        >
                          <img
                            src={item.url}
                            className="h-[40px] shadow-md  mr-3 w-[40px] rounded-full"
                          />
                          {item.name}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div
              class="tab-pane "
              id="tabs-profile"
              role="tabpanel"
              aria-labelledby="tabs-profile-tab"
            ></div>
          </motion.div>
        </div>
        <div className="w-[90%] col-span-2">
          <AnimatePresence>
            {animate && (
              <motion.img
                key={viewer}
                initial={{ x: -400, scaleY: 0.2, scaleY: 0.2 }}
                animate={{ x: 0, opacity: 1, scaleY: 1, scaleX: 1 }}
                exit={{ x: 500, scaleY: 0, scaleX: 0 }}
                transition={{
                  default: { duration: 0.2 },
                }}
                src={viewer}
                className="h-[100%] m-10 w-[100%] object-cover rounded"
              />
            )}
          </AnimatePresence>
        </div>
        <div className="w-[100%] mb-14"></div>
      </div>
      <Footer />
    </div>
  );
};

export default BarAndRestaurant;
