import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { IoPersonRemove } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { NavLink} from "react-router-dom";
// const router = createBrowserRouter([
//   {
//     path:"product",
//     element:<Products />
//   },
// ])
function Header() {
  return (
    <>
    <div className="w-full sticky top-0 z-50 h-auto bg-orange-700 p-2">
      <div className="main-container">
        <div className='flex flex-row justify-around items-center'>
           <div>
            <img src="https://terracotta-seven.vercel.app/logo1.png" className='object-cover w-12 p-1'  />
           </div>
          <div>
           <ul className='text-white text-xl flex flex-row justify-center items-center gap-7'>
            <li><NavLink to='/' className="hover:border-b-2 border-white pb-1 duration-300">Home</NavLink></li>
            <li><NavLink to='/product' className="hover:border-b-2 border-white pb-1 duration-300">Products</NavLink></li>
            <li><NavLink to='/about' className="hover:border-b-2 border-white pb-1 duration-300">About</NavLink></li>
           </ul>
          </div>
          <div>
          <div>
            <ul className='flex flex-row justify-end items-center gap-5 text-xl'>
              <li className='bg-white text-black p-3 rounded-full'>
              <FaSearch />
              </li>
              <li className='bg-white text-black p-3 rounded-full'>
               <FaCartArrowDown />
              </li>
              <li className='bg-white text-black p-3 rounded-full'>
               <FaRegHeart />
              </li>
              <li className='bg-white text-black p-3 rounded-full'>
                <NavLink to="/login">
                  <IoPersonRemove />
                </NavLink>
              </li>
              <li className='bg-blue-700 text-xl text-white px-4 py-1 rounded-xl hover:bg-blue-600 duration-300 ease-in-out'>
                <NavLink to="/contact">Contact Us</NavLink>
              </li>
            </ul>
          </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Header
