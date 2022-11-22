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
          <div className="grid grid-cols-4 w-[100%]">
            <div className="col-span-3 w-[100%] bg-[url('https://mdbootstrap.com/img/new/slides/041.jpg')] bg-cover bg-center h-[700px]">
              ksdvf
            </div>
            <div className="w-[100%]  bg-cover bg-center h-[100%] bg-slate-500 flex  items-end">
<img src="https://mdbootstrap.com/img/new/slides/041.jpg" className="h-[15%] w-[100%]"/>
            </div>
          </div>
        </div>
        <div className="lg:absolute md:absolute sm:relative xs:relative  relative top-[55%] right-[4%] h-[80%] w-[50%] bg-green-700"></div>

      </div>
    </div>
  );
};

export default AboutUs;
