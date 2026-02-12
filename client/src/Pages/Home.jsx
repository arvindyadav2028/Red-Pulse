import React from 'react'
import Hero from '../components/Hero'
import Capabilities from '../components/Capabilities'
import Dashboard from '../components/Dashboard'
import Join from '../components/Join'

export default function Home(){
  return (
    <div className='min-h-screen flex flex-col'>
      <header className='bg-gray-900 text-white'>
        <div className='max-w-6xl mx-auto px-6 py-4 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 font-bold'>♥</div>
            <div className='font-semibold'>Life Line</div>
          </div>
          <nav className='space-x-6 hidden md:block'>
            <a className='hover:underline'>Features</a>
            <a className='hover:underline'>Impact</a>
            <a className='hover:underline'>Community</a>
            <a className='hover:underline'>Resources</a>
          </nav>
          <div>
            <button className='bg-yellow-400 text-gray-900 px-4 py-2 rounded'>Login/Sign Up</button>
          </div>
        </div>
      </header>

      <main className='flex-1'>
        <Hero />
        <div className='max-w-6xl mx-auto px-6 py-12'>
          <Capabilities />
          <div className='mt-12'>
            <h2 className='text-2xl font-semibold mb-4'>Impact Dashboard</h2>
            <Dashboard />
          </div>

          <div className='mt-12'>
            <Join />
          </div>
        </div>
      </main>

      <footer className='bg-gray-900 text-gray-300 py-6'>
        <div className='max-w-6xl mx-auto px-6 text-center'>© Life Line</div>
      </footer>
    </div>
  )
}