import React from 'react'
import heroImg from '../assets/hero.jpg'

export default function Hero(){
  return (
    <section className='bg-cover bg-center' style={{backgroundImage:`url(${heroImg})`}}>
      <div className='bg-black/30'>
        <div className='max-w-6xl mx-auto px-6 py-24 flex items-center gap-8'>
          <div className='text-white max-w-2xl'>
            <h1 className='text-4xl md:text-5xl font-bold'>LIFE LINE: Bridging the Gap in Blood Management</h1>
            <p className='mt-4 text-gray-200'>Smart scheduling, real-time tracking and emergency alerts to connect donors and hospitals faster.</p>
            <div className='mt-6 flex gap-3'>
              <button className='bg-white text-gray-900 px-4 py-2 rounded'>Learn More</button>
              <button className='border border-white text-white px-4 py-2 rounded'>See it in Action</button>
            </div>
          </div>
          <div className='hidden md:block flex-1'>
            {/* decorative right column — image already used as background */}
          </div>
        </div>
      </div>
    </section>
  )
}
