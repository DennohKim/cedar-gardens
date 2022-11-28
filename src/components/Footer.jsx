import React,  { useRef } from "react";
import { Link } from "react-router-dom";
import LogoWhite from "../assets/images/LogoWhite.svg";
import { FaFacebook, FaTiktok } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import emailjs from '@emailjs/browser';

const Footer = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_l66fkjb", "template_tmu2jrg", form.current, '_txc7Qpth0kJ8iDOW')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <footer className="bg-dark">
      <div className="w-full bg-dark flex flex-col gap-16 mb-16">
        <div className="w-11/12 mx-auto pt-6">
          <h3 className="font-dancing text-center sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white">
            Subscribe
          </h3>
          <h2 className="font-cormorant font-bold uppercase text-center sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white pt-2">
            sign up for exclusive <br /> offers from us
          </h2>
        </div>
        <div className="w-11/12 mx-auto">
          <form ref={form} onSubmit={sendEmail} className="flex flex-wrap justify-center gap-4 font-jost">
            <div>
            <input
              type="text"
              name="user_name"
              placeholder="Full Name"
              className="border py-2 pl-2 sm:self-center "
            />
            </div>
            <div>
            <input
              type="email"
              name="user_email"
              placeholder="Email Address"
              className="border py-2 pl-2"
            />
            </div>
           <div>
             <button
              type="submit"
              className="py-2 px-8 bg-primary-color text-white"
            >
              Subscribe Now
            </button>
           </div>
           
          </form>
        </div>
      </div>
      <div className="border-t w-11/12 mx-auto border-white mb-10" />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 justify-between justify-items-center align-items-center text-white font-jost mb-10">
        <div className="">
          <img src={LogoWhite} alt="Logo" />
        </div>
        <div>
          <p className=" font-cormorant font-bold pb-6 text-2xl">Quick Links</p>
          <ul className="flex text-center flex-col gap-4">
            <li className="hover:opacity-60 hover:underline ">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:opacity-60 hover:underline">
              <Link to="/aboutus">About us</Link>
            </li>
            <li className="hover:opacity-60 hover:underline">
              <Link to="/services">Services</Link>
            </li>
            <li className="hover:opacity-60 hover:underline">
              <Link to="/gallery">Gallery</Link>
            </li>
            <li className="hover:opacity-60 hover:underline">
              <Link to="/location">Location</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-cormorant font-bold pb-6 text-2xl text-center">Contact Us</p>
          <ul className="flex flex-col text-center gap-4">
            <li className="hover:opacity-60 hover:underline" >
              
              <span className="font-semibold">Phone: </span>
              <a href="tel:+254 791 555 111">+254 791 555 111</a>
            </li>
            <li className="hover:opacity-60 hover:underline">
              <span className="font-semibold">Email: </span>
              <a href="mail:cedargarden.ltd@gmail.com">
                cedargarden.ltd@gmail.com
              </a>
            </li>
            <li className="hover:opacity-60 hover:underline">
              <p>
                <span className="font-semibold">Location: </span>Kianjai, Meru
              </p>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-cormorant font-bold pb-6 text-2xl">Follow Us</p>
          <ul className="flex flex-col text-center gap-4">
            <li className="flex gap-3 align-center hover:opacity-60">
              <FaFacebook className="self-center"/>
              <a href="">Facebook</a>
            </li>
            <li className="flex gap-3 align-center hover:opacity-60">
              <AiFillInstagram className="self-center"/>
              <a href="">Instagram</a>
            </li>
            <li className="flex gap-3 align-center hover:opacity-60">
              <FaTiktok className="self-center"/>
              <a href="">Tik Tok</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t w-11/12 mx-auto border-white" />
      <p className="text-white font-jost text-center py-10">Copyright &copy;2022. All rights reserved.</p>


    </footer>
  );
};

export default Footer;
