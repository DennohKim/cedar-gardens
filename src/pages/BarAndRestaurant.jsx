import React, {useState} from 'react'
// import {FiChevronright, FiChevronLeft} from 'react-icons/fi'
import restaurant from '../Data/data.js'
const BarAndRestaurant = () => {
  const restaurantData= restaurant
  const [activeslide, setActiveslide]= useState(1)
  const previouslider=(id)=>{
    if (id===1){
      setActiveslide(restaurantData.length)
    }else if (id> 1){
      setActiveslide(activeslide-1)
    }else {
      setActiveslide(restaurantData.length -1)
    }
  }
  const nextslider=(id)=>{
    if (id=== restaurantData.length){
      setActiveslide(1)
    }else if (id< restaurantData.length){
      setActiveslide(activeslide +1)
    }else {
      setActiveslide(restaurantData.length -1)
    }
  }
  return (
    <div>
      <header>
          <p>Menu That Fits You Palatte</p>
          <i>Spoon icon</i>
          <h2>TODAY'S SPECIAL</h2>
      </header>
      <div className='grid grid-cols-3 gap-4'>
          <div>
              <h3>Food</h3>
              <ul>
                  <li>Kienyeji Chicken</li>
                  <li>Beef</li>
                  <li>Pork</li>
                  <li>Goat</li>
              </ul>
              <h3>Accompaniments</h3>
              <ul>                
                  <li>Ugali</li>
                  <li>Rice</li>
                  <li>Chapati</li>
                  <li>Chips</li>
                  <li>Saute</li>
                  <li>Roast Potatoes</li>
              </ul>
          </div>
          <div className=''>
            {restaurantData.map((images)=>{
              const {id, image}=  images
              return (
                <div key={id} className={activeslide=== id ? 'flex justify-between items-center':'hidden'}>
                  <button onClick={()=>previouslider(id)}>previous</button>
                    <div className='h-3/4 w-full transition-all ease-in-out duration-1000 transform translate-x-0'>
                        <img className='h-1/4 w-full object-fit' src={image} />
                    </div>
                    <button onClick={()=>nextslider(id)}>next</button>
                </div>
              )
            })} 
          </div>
          <div>
            <h3>Cocktails</h3>
              <ul>
                  <li>Juices</li>
                  <li>Soda</li>
                  <li>Alcohol</li>
              </ul>
          </div>
      </div>
    </div>
  )
}

export default BarAndRestaurant