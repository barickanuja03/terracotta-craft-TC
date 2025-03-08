import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
function Footer() {
    const navbar = [
       'Home','About Us','Products','Testimonials'
    ];
    const connect = [
        'Contact us','Privacy-policy','Terms & Conditions','FAQ'
    ];
  return (
    <>
      <div className='flex flex-row justify-center md:justify-around w-full flex-wrap bg-black text-white p-7 gap-7'>
        <div>
         <img src="https://terracotta-seven.vercel.app/logo1.png" className='object-cover w-12 p-1'  />
         <h3>
         Chintamanipur,Oupada Block<br />
         Balasore,Odisha 756042 India
         </h3>
         <ul className='flex flex-row justify-start gap-3'>
          <li className='bg-blue-500 p-2 rounded-full'>
              <a href="#" className='text-white text-xl'><FaFacebookF /></a>
          </li>
          <li className='bg-blue-500 p-2 rounded-full'>
              <a href="#" className='text-white text-xl'><FaInstagram /></a>
          </li>
          <li className='bg-blue-500 p-2 rounded-full'>
              <a href="#" className='text-white text-xl'><FaTwitter /></a>
          </li>
         </ul>
        </div>
      <div>
        <h1 className='text-2xl font-bold tracking-wider py-3'>Quick Links</h1>
        <ul>
            <li>
            {navbar.map((navbar) => (
          <div
            key={navbar}
            className="flex flex-col gap-4">
            <span className='text-lg text-white/75'><IoIosArrowForward className='inline'/>&nbsp;&nbsp;     <span className='hover:border-b-2 hover:border-pink-700 hover:rounded-sm transition-all duration-500 ease-in-out hover:pb-1 hover:pl-1'>   
              {navbar}  
            </span> 
            </span>
          </div>
        ))}
            </li>
        </ul>
      </div>
      <div>
      <h1 className='text-2xl font-bold tracking-wider py-3'>Quick Links</h1>
      <ul>
            <li>
          <div className="flex flex-col gap-4">
            <span className='text-lg text-white/75'><IoIosArrowForward className='inline'/>&nbsp;&nbsp; 
            <span className='hover:border-b-2 hover:border-pink-700 hover:rounded-sm transition-all duration-500 ease-in-out hover:pb-1 hover:pl-1'>View All</span></span>
          </div>
            </li>
        </ul>
      </div>
      <div>
      <h1 className='text-2xl font-bold tracking-wider py-3'>Connect</h1>
        <ul>
            <li>
            {connect.map((connect) => (
          <div
            key={connect}
            className="flex flex-col gap-5">
            <span className='text-lg text-white/75'>
              <IoIosArrowForward className='inline'/>&nbsp;&nbsp;<span className='hover:border-b-2 hover:border-pink-700 duration-500 ease-in-out hover:pb-1 hover:pl-1 hover:rounded-sm transition-all'>{connect}</span>
            </span>
          </div>
        ))}
            </li>
        </ul>
      </div>  
      <hr className='h-2 w-full my-5'/>
      <div>
        &copy;2024,All rights reserve
      </div>
    </div>
    </>
  )
}

export default Footer
