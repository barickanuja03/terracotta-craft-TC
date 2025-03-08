import React from 'react'
import { FaGoogle } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
function Login() {
  return (
     <div>
       <div className="main-container">
         <div className='flex flex-row justify-center items-center'>
          <div>
             <img src="https://terracotta-seven.vercel.app/login.svg" alt="" />
          </div>
            <div className="flex items-center min-h-screen">
      <div className="flex flex-col gap-5 p-8 bg-white rounded-lg shadow-lg w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
        <img src="https://terracotta-seven.vercel.app/logo.png" alt="" className='w-[70%]'/>
          <h2 className="mt-2 text-black text-3xl font-bold text-start">Welcome back...</h2>
          <p className="text-base text-gray-500 py-2">Start your website in seconds. Don’t have an account? <a href="/" className="text-blue-500">Sign Up.</a></p>
        </div>
        <form className="w-full">
          <div className='flex flex-row justify-start gap-3'>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password..."
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          </div>
          <button
            className="w-full px-4 py-2 font-semibold border-2 border-slate-400 capitalize rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 my-3 hover:scale-105 duration-150"
          >
           Sign in with google
          </button>
          <button
            className="w-full px-4 py-2 font-semibold border-2 border-slate-400 capitalize rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 my-3.5 hover:scale-105 duration-150"
          >
            Sign in with facebook
          </button>
        </form>
        <div className="flex justify-between w-full mt-4">
          <NavLink to="/" className="text-sm text-blue-800 font-semibold rounded-md bg-blue-200 px-3 py-1">Forgot password?</NavLink>
          <NavLink to="/" className="text-sm text-green-800 font-semibold rounded-md bg-green-200 px-3 py-1">Back To Home</NavLink>
        </div>
        <div className="mt-4 flex justify-center w-full">
        <button
            className="w-full px-4 py-2 font-semibold bg-blue-500 text-white capitalize rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 my-3.5 hover:scale-105 duration-150"
          >
            Sign in your account
          </button>
        </div>
      </div>
    </div>
         </div>
       </div>
     </div>
  )
}

export default Login

