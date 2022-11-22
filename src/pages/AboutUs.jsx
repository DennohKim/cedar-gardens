import React from "react";

const AboutUs = () => {
  return (
    <div>
      <div class=" w-[100%] h-screen bg-[url('https://mdbootstrap.com/img/new/slides/041.jpg')] bg-cover bg-center max-h-[300px]  justify-center text-center flex items-center home-background">
        <p className="font-jost space tracking-widest  text-white text-2xl font-bold uppercase space">
          About us
        </p>
      </div>
      <div className="w-[100%] ">
        <div className="lg:w-[100%] md:w-[80%] sm:w-[90%] xs:w-[100%] lg:p-[4%] md:p-[4%] sm:p-[4%] p-[4%] xs:p-[1%] lg:pb-0 md:pb-0 sm:pb-0 xs:pb-0">
          <div className="w-[100%] bg-white">
            <p className="font-dancing text-3xl font-bold">Our Story</p>
            <p className="text-5xl font-bold font-cormorant pt-7 uppercase">
              How it all began
            </p>
          </div>
        </div>
        <div className="w-[100%] flex justify-center align-center items-center lg:p-[4%] md:p-[4%] sm:p-[4%] p-[4%] xs:p-[1%] ">
          <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 w-[100%]">
            <div className="lg:col-span-3 md:col-span-3 sm:col-span-1 xs:col-span-1 w-[100%] bg-[url('https://mdbootstrap.com/img/new/slides/041.jpg')] bg-cover bg-center h-[700px]">
              ksdvf
            </div>
            <div className="w-[100%]  bg-cover bg-center h-[100%] bg-white flex  items-end">
              <img
                src="https://mdbootstrap.com/img/new/slides/041.jpg "
                className="object-cover h-[51%] ml-2 w-[100%]"
              />
            </div>
          </div>
        </div>
        <div className="lg:absolute md:absolute sm:relative xs:relative  relative top-[55%] right-[4%] h-[80%] w-[50%] bg-white">
          <div class="border-b border-gray-200 dark:border-gray-700">
            <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
              <li class="mr-2">
                <a
                  href="#"
                  id="tabs-contact-tab" data-bs-toggle="pill" data-bs-target="#tabs-contact" role="tab"
      aria-controls="tabs-contact" aria-selected="false"
                  class="inline-flex p-4 uppercase font-jost rounded-t-lg border-b-2 text-black font-bold border-transparent hover:text-green-700 hover:border-green-700 dark:hover:text-green-700 group focus:border-transparent
                  active"
                  
                >
                 
                  Our Mission
                </a>
              </li>
            
              <li class="mr-2">
                <a
                  href="#"
                  class="inline-flex p-4 uppercase font-jost rounded-t-lg border-b-2 text-black font-bold border-transparent hover:text-green-700 hover:border-green-700 dark:hover:text-green-700 group"
                >
                 
                  Our Vision
                </a>
              </li>
            </ul>
          
          </div>
          <div class="tab-content" id="tabs-tabContent">
  <div class="tab-pane fade show active" id="tabs-home" role="tabpanel" aria-labelledby="tabs-home-tab">
    Tab 1 content
  </div>
  <div class="tab-pane fade" id="tabs-profile" role="tabpanel" aria-labelledby="tabs-profile-tab">
    Tab 2 content
  </div>
  <div class="tab-pane fade" id="tabs-messages" role="tabpanel" aria-labelledby="tabs-profile-tab">
    Tab 3 content
  </div>
  <div class="tab-pane fade" id="tabs-contact" role="tabpanel" aria-labelledby="tabs-contact-tab">
    Tab 4 content
  </div>
</div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
