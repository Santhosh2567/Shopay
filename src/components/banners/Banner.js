import React, { useState } from 'react'
import banner1 from './banner1.jpg'
import banner4 from './banner4.jpg'
import banner3 from './banner3.jpg'
import banner2 from './banner2.jpg'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function Banner() {
 const [slide,setSlide]=useState(0)
  const bannerImages=[
    banner1,
    banner2,
    banner3,
    banner4,

  ]
  const prevSlide=()=>{
    setSlide(slide=== 0 ? 3 : (prev)=>prev-1)
  }
  const nextSlide=()=>{
    setSlide(slide=== 3 ? 0 : (prev)=>prev+1)
  }
  return (
    <div className='w-full overflow-x-hidden'>
    <div className='relative'>
      <div style={{ transform: `translateX(-${slide * 100}%)` }} className='flex transition-transform duration-1000 ease-linear'>
        {bannerImages.map((image, index) => (
          <img key={index} className='w-full h-vh object-cover' src={image} alt={`Banner ${index}`} loading='lazy' />
        ))}
      </div>
      <div className='absolute inset-x-0 bottom-10 flex justify-center gap-4 md:gap-8 md:bottom-20'>
        <button onClick={prevSlide} className='p-2 border border-gray-700 rounded-full text-white cursor-pointer hover:bg-gray-700 active:bg-gray-900 duration-300'>
          <FaArrowLeft size={24} />
        </button>
        <button onClick={nextSlide} className='p-2 border border-gray-700 rounded-full text-white cursor-pointer hover:bg-gray-700 active:bg-gray-900 duration-300'>
          <FaArrowRight size={24} />
        </button>
      </div>
    </div>
  </div>
);
}

export default Banner