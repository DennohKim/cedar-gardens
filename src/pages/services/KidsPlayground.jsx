import React from "react";

function KidsPlayground() {
  return (
    // <div class="">
    <div className="relative w-100 container px-6 py-10 mx-auto font-jost">
      <div
        className="bg-cover bg-center h-auto bg-[url(https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135334/Cedar%20Hotel/Edited/IMG_7115_jw8cme.jpg)]"
        style={{
          height: "60vh",
        }}
      ></div>
      <div className="absolute bottom-24 right-0 w-[60%] p-6 bg-slate-200	z-10">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam omnis
          molestiae obcaecati porro. Temporibus, incidunt necessitatibus ducimus
          quas labore doloremque illo quam, minus ea voluptatum, a tenetur totam
          exercitationem nobis.
        </p>
      </div>
    </div>
  );
}

export default KidsPlayground;
