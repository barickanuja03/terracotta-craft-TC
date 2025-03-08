import React from 'react'
import HeroSection from '../Ui/Herosection'
import PremiumProducts from '../Ui/Premiumproduct'
import Hottestproduct from '../Ui/Hottestproduct'
import Popularcategory from '../Ui/PopularCategory'
import PopularProduct from '../Ui/PopularProduct'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Hottestproduct />
      <PopularProduct />
      <PremiumProducts />
      <Popularcategory />
    </div>
  )
}

export default Home
