import React from 'react'
import { FaStarHalfAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillEye, AiFillHeart } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
function Popularproductcard() {
    const cards = [
        {
          id:1,
          offer:'25% off',
          image:'./product/p1.webp',
          category:'Kitchen essential',
          categories:'Pot',
          discountprice:299,
          actualprice: 499,
        },
        {
          id:2,
          offer:'26% off',
          image:'https://res.cloudinary.com/dxm4zavaw/image/upload/v1712676455/products/dinner%20plate%20bowl.jpg.jpg',
          category:'handcrafted clay dinnerware',
          categories:'Dinner Set',
          discountprice:759,
          actualprice: 899,
        },
        {
          id:3,
          offer:'25% off',
          image:'https://res.cloudinary.com/dxm4zavaw/image/upload/v1712676856/products/diya4.jfif.jpg',
          category:'Diya',
          categories:'Diya',
          discountprice:399,
          actualprice: 459,
        },
        {
          id:4,
          offer:'24% off',
          image:'https://res.cloudinary.com/dxm4zavaw/image/upload/v1712676929/products/statue4.jfif.jpg',
          category:'clay ganesh statue',
          categories:'God statues',
          discountprice:512,
          actualprice: 679,
        },
        {
          id:5,
          offer:'23% off',
          image:'	https://res.cloudinary.com/dxm4zavaw/image/upload/v1712677024/products/flower%20pot.jfif.jpg',
          category:'decorative ornaments',
          categories:'Flower Pot',
          discountprice:499,
          actualprice: 769,
        },
        {
          id:6,
          offer:'10% off',
          image:'https://res.cloudinary.com/dxm4zavaw/image/upload/v1712677206/products/insence%20holder3.jfif.jpg',
          category:'incense holders',
          categories:'insence stick holder',
          discountprice:399,
          actualprice: 460,
        },
        {
          id:7,
          offer:'20% off',
          image:'https://res.cloudinary.com/dxm4zavaw/image/upload/v1712677441/products/pen%20holder5.jfif.jpg',
          category:'pen stand',
          categories:'pen stand',
          discountprice:489,
          actualprice: 599,
        },
        {
          id:8,
          offer:'25% off',
          image:'https://res.cloudinary.com/dxm4zavaw/image/upload/v1712677653/products/candle%20stand5.jfif.jpg',
          category:'scented candle collection',
          categories:'Candle Stand',
          discountprice:399,
          actualprice: 529,
        },
        {
          id:9,
          offer:'29% off',
          image:'https://res.cloudinary.com/dxm4zavaw/image/upload/v1712677844/products/cookware3.jfif.jpg',
          category:'cookware',
          categories:'Container with lid',
          discountprice:659,
          actualprice: 929,
        },
        {
          id:10,
          offer:'30% off',
          image:'https://res.cloudinary.com/dxm4zavaw/image/upload/v1712678345/products/bowl4.jfif.jpg',
          category:'kitchen essentials',
          categories:'Pot',
          discountprice:299,
          actualprice: 499,
        },
      ];
  return (
    <>
       {
    cards.map((card) =>{
      return(
     <div className="bg-white shadow-sm shadow-slate-500 p-3 relative group">
      <div className=''>
        <div className='flex flex-row justify-between'>
        <div className="mt-0 px-1 bg-yellow-500 max-w-min max-h-min text-nowrap">
          {card.offer}
        </div>
        <div className='z-0 group-hover:z-20'>
           <NavLink href="/" className='text-yellow-600 text-2xl right-9'>
           <AiFillHeart className=''/>
           </NavLink> 
           <NavLink href="/"  className='text-yellow-600 text-2xl'>
           <AiFillEye />
           </NavLink>
        </div>
        </div>
        <div className='object-cover flex w-full justify-center'>
          <img src={card.image} className='w-32 aspect-square py-4 group-hover:scale-110 duration-200' />
        </div>
        <div className='flex flex-row justify-between'>
          <div className='py-2'>
              <span className='text-blue-400 capitalize'>Category:</span>
              <h6 className='capitalize text-sm'>{card.category}</h6>
          </div>
          <div className='bg-green-500 max-w-min max-h-min px-1 text-nowrap'>
              Instock
          </div>
        </div>
        <div className='pb-1 font-semibold capitalize'>
          {card.categories}
        </div>
        <div className='text-yellow-400'>
        <FaStarHalfAlt />
        </div>
        <div className='flex flex-row justify-between'>
          <div>
       <span className='font-bold text-base pr-3'>&#x20b9;{card.discountprice}</span>
       <span className='line-through'>&#x20b9;{card.actualprice}</span>
       </div>
       <div className='text-blue-800 border-2 border-blue-800 p-2 rounded-md group-hover:bg-blue-800 group-hover:text-white duration-200'>
       <FaShoppingCart />
       </div>
        </div>
      </div>
    </div>
    )
})
}       
</>
  )
}

export default Popularproductcard
