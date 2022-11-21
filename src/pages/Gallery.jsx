import React, {useState} from 'react'

const Gallery = () => {
    const [toggletab, setToggleTab]=useState(1)
    const handleTab=(index)=>{
        setToggleTab(index)
    }
  return (
    <div>
 <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
    <ul className="flex flex-wrap -mb-px text-sm font-medium text-center"  role="tablist">
        <li className="mr-2">
            <button className="inline-block p-4 rounded-t-lg border-b-2" onClick={()=>handleTab(1)}   type="button" role="tab" aria-selected="false">GARDEN</button>
        </li>
        <li className="mr-2">
            <button className="inline-block p-4 rounded-t-lg border-b-2" onClick={()=>handleTab(2)}   type="button" role="tab" aria-selected="false">SWIMMING POOL</button>
        </li>
        <li className="mr-2">
            <button className="inline-block p-4 rounded-t-lg border-b-2" onClick={()=>handleTab(3)}  type="button" role="tab" aria-selected="false">PLAY AREA</button>
        </li>
        <li className="mr-2">
            <button className="inline-block p-4 rounded-t-lg border-b-2"  onClick={()=>handleTab(4)} type="button" role="tab" aria-selected="false">ROOMS</button>
        </li>
    </ul>
    </div>
     <div>

     </div>
     {/* create a div to hold the tabs content */}
     <div className=''>
    <div className={toggletab===1 ? 'block': 'hidden'}>
    <div className='sm:grid sm:grid-cols-1 md:grid md:grid-cols-2 md:gap-6 lg:grid lg:grid-cols-2 lg:gap-8'>
        <div className='grid grid-cols-2 gap-4  '>
            <div className='h-3/4'>
                <img className='h-full w-full transform transition-all hover:scale-110' src='https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135112/Cedar%20Hotel/Edited/IMG_7158_kxazn0.jpg' alt='garden'/>
            </div>
            <div className='h-3/4'>
                <img className='h-full w-full transform transition-all hover:scale-110'src='https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135337/Cedar%20Hotel/Edited/IMG_2827_hxfhio.jpg' alt='Garden' />
            </div>
            <div className='col-span-2 h-3/4 w-full -my-14'>
                <img className='h-full w-full transform transition-all hover:scale-110' src='https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135357/Cedar%20Hotel/Edited/IMG_7119_rlfhmj.jpg' alt='garden images'/>
            </div>
        </div>
        <div className='h-3/4'>
        <img className='h-full w-full transform transition-all hover:scale-110' src='https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135118/Cedar%20Hotel/Edited/IMG_7139_rsfj6t.jpg' alt='garden ' /> 
        </div>
        <div className='h-full -my-36'>
            <img className='h-full w-full transform transition-all hover:scale-110' src='https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135075/Cedar%20Hotel/Edited/IMG_7140_vojgco.jpg' alt='garden images' />
        </div>
        <div className='grid grid-cols-2 gap-2 -my-36 '>
          <div className='h-1/2 w-full'>
             <img className='h-full w-full transform transition-all hover:scale-110' src='https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135354/Cedar%20Hotel/Edited/IMG_7099_fph3oo.jpg' alt='indiginous trees'/>
          </div>
          <div className='h-1/2 w-full'>
            <img className='h-full w-full transform transition-all hover:scale-110' src='https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135357/Cedar%20Hotel/Edited/IMG_7119_rlfhmj.jpg' alt='beautiful terrain'/>
          </div>
          <div className='col-span-2 h-full w-full -my-48 '>
            <img className='h-3/4 w-full transform transition-all hover:scale-110' src='https://res.cloudinary.com/dqab6gg7d/image/upload/v1668135200/Cedar%20Hotel/Edited/IMG_2726_cxcoti.jpg' alt='gardens'/>
          </div>
        </div>
    </div>
        
    </div>
     <div className={toggletab===2 ? 'block': 'hidden'}>SWIMMING POOL  images</div>
     <div className={toggletab===3 ? 'block': 'hidden'}>PLAY AREA images</div>
     <div className={toggletab===4 ? 'block': 'hidden'}>ROOMS images</div>
     </div>
    </div>
  )
}

export default Gallery