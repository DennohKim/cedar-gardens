import React from 'react'
import Footer from '../../components/Footer'
import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";
const Meetings = () => {
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
      Meetings
    </h2>
  </motion.div>
</div>
<div className="w-[100%] flex justify-center mb-10">
  {/* <div className='w-[90%]'> */}
  <div className='w-[90%] grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>
  <motion.img
    initial={{
      scaleX: 0,
      scaleY: 0,
    }}
    transition={{duration: 0.5 }}
    whileInView={{ scaleX: 1,
      scaleY: 1 }}
    viewport={{ once: true }} className='h-full w-full lg:h-[800px] rounded-lg  object-cover' src='https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135261/Cedar%20Hotel/Edited/IMG_2718_davs8g.jpg' />
  <motion.div  initial={{
      scaleX: 0,
      scaleY: 0,
    }}
    transition={{duration: 0.5,delay:1 }}
    whileInView={{ scaleX: 1,
      scaleY: 1 }}
    viewport={{ once: true }}  className='justify-bottom   lg:pl-10 md:pl-10 justify-right  relative '>
    <p className='font-cormorant uppercase mt-[130px] font-bold text-4xl'>Meetings</p>
    <p className='text-1xl font-jost mt-5 sm:mb-[260px] md:mb-[15px]'> Friends are the family we choose, and at Cedar Gardens we help you make some extra-special memories with your friends. Share a meal, dance to the beat and take a selfie or 10! Do it all at Cedar Gardens.
              Toast to the beauty of life at Cedar Gardens. Be it bridal showers, baby showers, home-comings, company functions, private parties and weddings – we don’t take them for granted. Let us add the magic to your special moments in life!
            </p>
  <img className='h-[40%] sm:w-full w-[90%] absolute bottom-0 right-0 left-8 sm:left-0 md:left-8 rounded-lg  object-cover' src='https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135184/Cedar%20Hotel/Edited/IMG_2685_n2slab.jpg' />

  </motion.div>
  </div>
  
</div>

  <Footer />
</div>
)
}

export default Meetings