import React from "react";

function Swimming() {
  return (
    <div class="container px-6 py-10 mx-auto font-jost">
      <div class="mt-8 lg:-mx-6 lg:flex lg:items-center">
        <img
          class="object-cover w-full lg:mx-6 lg:w-1/2 h-72 lg:h-96"
          src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135334/Cedar%20Hotel/Edited/IMG_7115_jw8cme.jpg"
          alt=""
        />

        <div class="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
          <p class="block mt-4 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            SWIMMING POOL
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
            src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135334/Cedar%20Hotel/Edited/IMG_7115_jw8cme.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Swimming;
