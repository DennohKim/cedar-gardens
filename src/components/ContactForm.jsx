import React from "react";
import { FaFacebook, FaTiktok } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

function ContactForm() {
  const icons = { fontSize: "40px", marginRight: "40px", color: "#287216" };
  return (
    <div className="font-jost container my-24 lg:px-6 mx-auto">
      <section className="mb-32 text-black-900">
        <div className="flex flex-wrap ">
          <div className="grow-0 shrink-0 basis-auto mb-12 lg:mb-0 w-full lg:w-6/12 px-3 lg:px-6">
            <div className="lg:mr-4 lg:w-10/12">
              <h1 className="font-cormorant font-bold text-5xl pb-8">
                DO YOU HAVE SOME <br></br>QUESTION ?
              </h1>
              <div className=" py-2">
                <p className="py-3 ">We are at your disposal 7 days a week!</p>
                <p className="py-3">
                  <b>Phone: </b>+254 791 555 111
                </p>
                <p className="py-3">
                  <b>Email: </b>cedargarden.ltd@gmail.com
                </p>
              </div>

              <div className="flex py-2">
                <FaFacebook style={icons} />
                <AiFillInstagram style={icons} />
                <FaTiktok style={icons} />
              </div>
              <div className="mt-40 relative overflow-hidden">
                <img
                  className="transform transition-all hover:scale-110"
                  src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135334/Cedar%20Hotel/Edited/IMG_7115_jw8cme.jpg"
                  alt="girrafe"
                />
              </div>
            </div>
          </div>
          <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12">
            <h1 className="font-cormorant font-bold text-5xl">
              DROP US A LINE
            </h1>
            <p className="py-10">
              Feugiat nibh tellus aliquam amet donec ipsum Ac aenean pulvinar
              posuere tellus erat quisque
            </p>
            <form className="w-full">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block  tracking-wide text-gray-700 text-x  mb-2">
                    Name
                  </label>
                  <input
                    className="appearance-none bg-transparent border-b border-black-900 w-full text-gray-700 mr-3 p-2 leading-tight focus:outline-none focus:bg-gray-200"
                    type="text"
                    aria-label="name"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block tracking-wide text-gray-700 text-x  mb-2">
                    Email
                  </label>
                  <input
                    className="appearance-none bg-transparent border-b border-black-900 w-full text-gray-700 mr-3 p-2 leading-tight focus:outline-none focus:bg-gray-200"
                    type="email"
                    aria-label="email"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 py-10 mb-6 md:mb-0">
                  <label className="block tracking-wide text-gray-700 text-x  mb-2">
                    Phone Number
                  </label>
                  <input
                    className="appearance-none bg-transparent border-b border-black-900 w-full text-gray-700 mr-3 p-2 leading-tight focus:outline-none focus:bg-gray-200"
                    type="text"
                    aria-label="name"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 pt-10 mb-6 md:mb-0">
                  <label className="block tracking-wide text-gray-700 text-x  mb-2">
                    Subject
                  </label>
                  <input
                    className="appearance-none bg-transparent border-b border-black-900 w-full text-gray-700 mr-3 p-2 leading-tight focus:outline-none focus:bg-gray-200"
                    type="text"
                    aria-label="name"
                  />
                </div>
                <div className="w-full px-3">
                  <label className="block  tracking-wide text-gray-700 text-x  mb-10">
                    Write Message
                  </label>
                  <textarea
                    rows="10"
                    className="appearance-none bg-transparent border border-grey-900 w-full text-gray-700 mr-3 p-3 focus:bg-gray-200 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Write your message...."
                    aria-label="name"
                  ></textarea>
                </div>
                {/* imgs */}
                <div class="grid  ">
                  <div class="lg:col-end-12 h-72 relative overflow-hidden">
                    <img
                      className="col-7 transform transition-all hover:scale-110"
                      src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135075/Cedar%20Hotel/Edited/IMG_7140_vojgco.jpg"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div className="lg:col-start h-60  lg:pt-8 relative overflow-hidden">
                    <img
                      className="transform transition-all hover:scale-110"
                      src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135118/Cedar%20Hotel/Edited/IMG_7139_rsfj6t.jpg"
                      alt=""
                      srcset=""
                    />
                  </div>
                </div>
                {/* <div>
                    </div> */}
                {/* <div>
                 
                </div> */}
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactForm;
