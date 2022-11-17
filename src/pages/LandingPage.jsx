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
            <div class="grid mt-8 grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-2  xs:grid-cols-1">
              <div className="w-[100%]">
                <img class="object-cover h-48 w-96 " src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135255/Cedar%20Hotel/Edited/IMG_2741_gpgowb.jpg" />
              </div>
              <div className="p-3 text-left">
                <p>Cedar is the place where you can make memories. We offer the following services: Restaurant, Swimming, Bar, Kids Play Area, Meetings and Accomodation.
                </p><br /><p>
                  The hotel is located on Kianjai meru, approximately 17km from Meru town.
                </p>
              </div>
            </div>
            <div className="border-l border-l-gray-700 pl-8 p-4 text-left mt-4">
<p>“We have got the best Restaurant in town. The hotel is a must see. The swimming pool and garden are beautiful. We are a well-established and reputable caterer, hotel, conference center and wedding venue. We offer a professional service for everyone. Our main goal is to provide our clients with the very best service and experience possible.”

</p>
<p className="font-bold text-1xl pt-4">Lorem Ipsum</p>
<p className="text-1xl pt-2">Hotel Manager</p>

            </div>
          </div>
          <div className="w-[100%] justify-center items-center align-center">
<img className=" " src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135321/Cedar%20Hotel/Edited/IMG_2756_vo2tbu.jpg"/>

          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
{/* <div className="font-jost font-bold text-3xl">LandingPage</div>
      <div className="font-dancing">LandingPage</div>
      <div className="c">LandingPage</div> */}