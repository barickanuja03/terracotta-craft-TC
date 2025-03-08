import React from 'react'
import { NavLink } from 'react-router-dom';
function PremiumProducts() {
   const images = [
     {
        id:1,
        image:'./sub/s1.jpg',
     },
     {
     id:2,
     image:'./sub/s2.jpg',
     },
     {
      id:3,
      image:'./sub/s3.jpg',
      },
      {
       id:4,
       image:'./sub/s4.jpg'
      },
   ];
  return (
    <div className='bg-slate-100'>
     <div className="main-container">
        <article className="flex flex-col gap-1 items-center">
          <div className="w-full text-center">
          <div className="heading">
          Explore Out Premium Editions <span className='text-black/45'>Products</span>
            </div>
          </div>
          <p className="h-1 w-30 bg-blue-700 rounded-full"></p>
        </article>
        <div className='grid grid-cols-2 md:grid-cols-4 py-4 gap-3 my-11 max-h-min object-cover'>
         {
            images.map((img) => {
               return(
          <div className='w-full aspect-square'>
            <div className='bg-black overflow-hidden object-fill w-[24] flex justify-center items-center relative'>
                <div className='text-lg font-semibold text-white absolute'>100 products</div>
                 <img src={img.image} alt="image" className=' z-20 hover:opacity-35'/>
             </div>
             <div>
                <h4 className=' text-center text-xl'>
                    <span className='border-b-2 border-slate-500'>
                      <NavLink to="/Claycombo">View</NavLink>
                    </span>
                </h4>
             </div>
          </div>
             )
             })
         }
        </div>
        <div className='flex flex-row justify-center'>
            <span className="button">
              <NavLink to="/product">
                View all products
              </NavLink>
            </span>
        </div>
     </div> 
    </div>
  )
}

export default PremiumProducts
