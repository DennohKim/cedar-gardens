import React from "react";
import Footer from "../../components/Footer";
import MainBG from "../../components/MainBG";
import Navbar from "../../components/Navbar";

function KidsPlayground() {
  return (

    <>
    <Navbar />
    <MainBG />
    <div class="container px-6 py-10 mx-auto font-jost">
      <div class="mt-8 lg:-mx-6 lg:flex lg:items-center relative overflow-hidden">
        <img
          class="object-cover transform transition-all hover:scale-110 w-full lg:mx-6 lg:w-1/2 h-72 lg:h-96"
          src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1670355436/Cedar%20Hotel/play%20area/play%20area/IMG_2711_mukcs4.jpg"
          alt=""
        />

        <div class="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
          <p class="block mt-4 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            KIDS PLAYGROUND
          </p>

          <p class="mt-3 text-gray-500 dark:text-gray-300">
          We also cater to our younger clients by offering a safe play area with bouncing castles, art activities and face painting on weekends.
          </p>
        </div>
      </div>

{/* second place */}
      <div class="lg:flex lg:items-center justify-end">
        <div class="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 relative overflow-hidden ">
          <img
            class="object-cover transform transition-all hover:scale-110 w-full lg:w-1/2 h-72 lg:h-96"
            src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1670355398/Cedar%20Hotel/play%20area/play%20area/IMG_2707_ufgrpb.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default KidsPlayground;
