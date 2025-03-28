import React from 'react'
import Popularcard from './Popularcard';
import { NavLink } from 'react-router-dom'

const PopularProduct = () => {
  return (
    <section className='main-container'>
        <article className="flex flex-col gap-1 items-center">
              <div className="w-full text-center">
              <div className="heading">
              Discover our most popular <span className='text-black/45'>products</span>
                </div>
              </div>
              <p className="h-1 w-30 bg-blue-700 rounded-full  mb-12"></p>
        </article>
          <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 h-auto gap-x-3 gap-y-5 my-10'>
            <Popularcard />
            </div>
            <div className='flex flex-row justify-center w-full'>
            <span className="button">
              <NavLink to="/product">
                View all products
              </NavLink>
            </span>
           </div>
    </section>
  )
}

export default PopularProduct
