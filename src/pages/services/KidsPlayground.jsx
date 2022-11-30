import React from "react";

function KidsPlayground() {
  return (

    <>
    <div class="container px-6 py-10 mx-auto font-jost">
      <div class="mt-8 lg:-mx-6 lg:flex lg:items-center">
        <img
          class="object-cover w-full lg:mx-6 lg:w-1/2 h-72 lg:h-96"
          src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135111/Cedar%20Hotel/Edited/IMG_7154_yy55dw.jpg"
          alt=""
        />

        <div class="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
          <p class="block mt-4 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            KIDS PLAYGROUND
          </p>

          <p class="mt-3 text-gray-500 dark:text-gray-300">
            Feugiat nibh tellus aliquam amet donec ipsum eu. Ac aenean pulvinar
            posuere tellus erat quisque. Feugiat nibh tellus aliquam amet donec
            ipsum eu. Ac aenean pulvinar posuere tellus erat quisque. Feugiat
            nibh tellus aliquam amet donec ipsum eu. Ac aenean pulvinar posuere
            tellus erat quisque
          </p>
        </div>
      </div>

{/* second place */}
      <div class="lg:flex lg:items-center justify-end">
        <div class="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
          <img
            class="object-cover w-full lg:w-1/2 h-72 lg:h-96"
            src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135111/Cedar%20Hotel/Edited/IMG_7154_yy55dw.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
    </>

    // first design
    // // <div class="">
    // <div className="relative w-100 container px-6 py-10 mx-auto font-jost">
    //   <div
    //     className="bg-cover bg-center h-auto bg-[url(https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135334/Cedar%20Hotel/Edited/IMG_7115_jw8cme.jpg)]"
    //     style={{
    //       height: "60vh",
    //     }}
    //   ></div>
    //   <div className="absolute bottom-24 right-0 w-[60%] p-6 bg-slate-200	z-10">
    //     <p>
    //       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam omnis
    //       molestiae obcaecati porro. Temporibus, incidunt necessitatibus ducimus
    //       quas labore doloremque illo quam, minus ea voluptatum, a tenetur totam
    //       exercitationem nobis.
    //     </p>
    //   </div>
    // </div>


  );
}

export default KidsPlayground;
