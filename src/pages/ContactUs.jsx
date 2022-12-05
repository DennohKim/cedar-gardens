import React from "react";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const ContactUs = () => {
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
          className="bg-[url('https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135255/Cedar%20Hotel/Edited/IMG_2741_gpgowb.jpg')]  bg-no-repeat bg-cover bg-center h-72 flex justify-center"
        >
            <div className="h-[100%] w-[100%] overlay-color flex justify-center">
          <h2 className="text-center text-4xl font-jost text-white font-semibold tracking-[2rem] self-center hover:scale-105 hover:ease-in-out animate-pulse">
            CONTACT US
          </h2>

          </div>
        </motion.div>
      </div>

      <ContactForm />
      <Footer />
    </div>
  );
};

export default ContactUs;
