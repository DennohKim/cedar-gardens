import React from "react";

const LandingPage = () => {
  return (

    <div>

      <div class="container mx-auto h-screen bg-[url('https://mdbootstrap.com/img/new/slides/041.jpg')] bg-cover bg-center max-h-[573px]  justify-center text-center flex items-center home-background">
        <p className="font-dancing  text-white text-6xl  ">Cedar Gardens</p>
      </div>
      <div class="container mx-auto mt-[70px]">
        <div class="grid mt-8 grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-2  xs:grid-cols-1">
          <div className="w-[100%] text-center justify-center items-center">
            <p className="font-dancing text-2xl font-bold mt-3 align-center">Welcome</p>
            <h4 className="font-cormorant uppercase font-bold text-3xl m-8">Your confort is our concern</h4>

          </div>
          <div className="w-[100%] bg-gray-900">2</div>

        </div>
      </div>
    </div>
  );
};

export default LandingPage;
{/* <div className="font-jost font-bold text-3xl">LandingPage</div>
      <div className="font-dancing">LandingPage</div>
      <div className="c">LandingPage</div> */}