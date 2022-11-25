import React, { useState } from "react";
import MainBG from "../../components/MainBG";
const BarAndRestaurant = () => {
    const [food, setFood] = useState([{
      name:"Chicken",url:"https://res.cloudinary.com/dqab6gg7d/image/upload/v1669350725/Cedar%20Hotel/Edited/chicken_xjwzxk.jpg"},{
      name:"Beef", url:"https://res.cloudinary.com/dqab6gg7d/image/upload/v1669350359/Cedar%20Hotel/Edited/beef_obrbys.jpg"},
       {name:"Pork",url:"https://res.cloudinary.com/dqab6gg7d/image/upload/v1669350369/Cedar%20Hotel/Edited/pork_conkjv.webp"}, 
       {name:"Fish",url:"https://res.cloudinary.com/dqab6gg7d/image/upload/v1669350340/Cedar%20Hotel/Edited/fish_xku8dt.jpg"}, 
       {name:"Goat",url:"https://res.cloudinary.com/dqab6gg7d/image/upload/v1669351335/Cedar%20Hotel/Edited/goat_me2m7o.jpg"}]);
  const [cocktails, setCocktails] = useState([
    {name:"Juice",url:"https://res.cloudinary.com/dqab6gg7d/image/upload/v1669350332/Cedar%20Hotel/Edited/juice_v8e2xf.jpg"}, 
    {name:"Soda",url:"https://res.cloudinary.com/dqab6gg7d/image/upload/v1669350319/Cedar%20Hotel/Edited/soda_gnbfnz.jpg"},
     {name:"Alcohol",url:"https://res.cloudinary.com/dqab6gg7d/image/upload/v1669350304/Cedar%20Hotel/Edited/alcohol_dmoq7z.avif"}]);
  const [acompanments, setAcompanments] = useState([
   { name:"Ugali",url:"",url:"https://res.cloudinary.com/dqab6gg7d/image/upload/v1669350313/Cedar%20Hotel/Edited/ugali_wkgzye.jpg"},
   { name:"Rice",url:"https://res.cloudinary.com/dqab6gg7d/image/upload/v1669350333/Cedar%20Hotel/Edited/rice_o0m59c.jpg"},
   {name: "Chapati",url:"https://res.cloudinary.com/dqab6gg7d/image/upload/v1669350352/Cedar%20Hotel/Edited/chapati_cwgmx5.jpg"},
   {name: "Chips",url:"https://res.cloudinary.com/dqab6gg7d/image/upload/v1669350332/Cedar%20Hotel/Edited/chips_m8z2ii.jpg"},
   {name: "Saute",url:"https://res.cloudinary.com/dqab6gg7d/image/upload/v1669350309/Cedar%20Hotel/Edited/saute_qpltcb.jpg"},
   { name:"Roast Potatoes,url:",url:"https://res.cloudinary.com/dqab6gg7d/image/upload/v1669350325/Cedar%20Hotel/Edited/potatoes_cpj5yp.jpg"}
  ]);

  return (
    <div>
      <MainBG />
      <div className="w-[100%] justify-center flex flex-col-reverse items-center align-center">
        <p className="font-cormorant font-bold uppercase text-4xl">
          Todays Special
        </p>
        <p className="font-dancing text-3xl">Menu that fits you palatte</p>
      </div>
      <div className="w-[100%] p-auto grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-2">
<div className="w-[100%] ">
  <div className=" w-[100%] lg:ml-[10%] sm:ml-[10%] md:ml-[10%] ml-[5%]">
  <p className="font-bold w-[100%] text-center text-2xl font-cormorant align-center">Food</p>
  <ul>
    {
      food.map((item)=>{
return(
  <li className="my-10 font-cormorant font-bold flex cursor-pointer hover:text-3xl transition-all ease-in duration-75" key={item}><img src={item.url} className="h-[40px] mr-3 w-[40px] rounded-full"/>{item.name}</li>
)
      })
    }
    
  </ul>
  </div>
</div>
<div className="w-[100%]"></div>
<div className="w-[100%]"></div>

      </div>
    </div>
  );
};

export default BarAndRestaurant;
