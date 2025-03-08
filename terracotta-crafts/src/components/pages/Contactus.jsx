import React from 'react'
function Contactus() {
  return (
    <>
       {/* Contact page design */}
       <div className="min-h-max flex items-center justify-center ">
      <div className="container mx-auto p-8 bg-teal-600 my-11 rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 align-middle gap-6  rounded-lg shadow-lg group">
          
          {/* Left Section */}
          <div className="p-8 text-white mx-5">
            <h1 className="text-5xl font-extrabold group-hover:scale-110 duration-300 ease-in-out">
              Let's talk about <span className="text-green-400">everything!</span>
            </h1>
            <p className="mt-4 text-lg">
              Get real answers from <span className="font-bold text-green-300">verified users</span> and our software experts!
            </p>

            {/* Reviews Section */}
            <div className="mt-8 flex items-center justify-center space-x-4">
             <img src='https://terracotta-seven.vercel.app/contact.png' className='group-hover:scale-110 duration-300 ease-in-out'/>
            </div>
            </div>
          {/* Right Section (Form) */}
          <div className="p-16 bg-white rounded-2xl shadow-md shadow-teal-100 overflow-hidden max-h-max lg:mt-16 ">
            <h2 className="text-2xl font-extrabold text-gray-800 group-hover:scale-95 duration-300 ease-in-out">
              Have A Question In Mind?
            </h2>

            <form className="mt-6">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your full name" required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your Email" required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="query" className="block text-sm font-medium text-gray-700">
                  Your Query
                </label>
                <textarea
                  id="query"
                  placeholder="Enter your queries!"required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contactus;
