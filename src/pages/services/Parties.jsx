import React from 'react'
import Footer from '../../components/Footer'
import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";
const Parties = () => {
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
          <h2 className="text-center text-4xl font-jost text-white font-semibold tracking-[2rem] self-center hover:scale-105 hover:ease-in-out animate-pulse">
            SERVICES
          </h2>
        </motion.div>
      </div>

        <div className='grid my-8 sm:grid-cols-1 sm:mx-10 md:grid-cols-1 md:mx-15 lg:grid-cols-2 lg:gap-8'>
            <div className='sm:h-3/4 sm:w-full md:h-4/5 md:w-full lg:h-full lg:w-full'>
                <img className='h-full w-full object-fill lg:h-4/5' src='https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135261/Cedar%20Hotel/Edited/IMG_2718_davs8g.jpg' />
            </div>
            <div className='grid sm:grid-rows-1 md:grid-rows-2 lg:grid-rows-2 gap-4'>
                <div className='sm:h-3/4 sm:w-full md:h-3/4 md:w-full my-12'>
                <h2 className='font-bold text-center sm:text-2xl md:text-3xl lg:text-3xl'>PARTIES</h2>
                    <p className='content-fit sm:text-xl md:text-xl lg:text-xl'>
                    Friends are the family we choose, and at Cedar Gardens we help you make some extra-special memories with your friends. Share a meal, dance to the beat and take a selfie or 10! Do it all at Cedar Gardens.
                    Toast to the beauty of life at Cedar Gardens. Be it bridal showers, baby showers, home-comings, company functions, private parties and weddings – we don’t take them for granted. Let us add the magic to your special moments in life!
                    </p>
                </div>
                <div className='sm:h-3/4 sm:w-full md:h-4/5 md:w-full md:-my-20 '>
                    <img className='sm:h-full sm:w-full' src='https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135184/Cedar%20Hotel/Edited/IMG_2685_n2slab.jpg' />
                    
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Parties