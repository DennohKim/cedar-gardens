import React from 'react';
import { motion } from 'framer-motion';


const MainBG = () => {
  return (
    <div className="my-10">
    <motion.div  
          initial={{
            y: -100,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} 
          className="main-image bg-[url('https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135255/Cedar%20Hotel/Edited/IMG_2741_gpgowb.jpg')]  bg-no-repeat bg-cover bg-center h-72 flex justify-center">
      <h2 className="text-center text-4xl font-jost text-white font-md tracking-[2rem] self-center hover:scale-105 hover:ease-in-out animate-pulse">
        ABOUT US
      </h2>
    </motion.div>
  </div>
  )
}

export default MainBG