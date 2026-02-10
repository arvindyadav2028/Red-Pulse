import React, {useState} from 'react'

export default function Join(){
  const [email, setEmail] = useState('')
  return (
    <div className='bg-gray-900 text-white rounded-lg p-8 flex items-center gap-8'>
      <div className='flex-1'>
        <h3 className='text-xl font-semibold'>Join the Network</h3>
        <p className='text-gray-300 mt-2'>Connect hospitals, donors and volunteers in one platform.</p>
      </div>
      <div className='w-full md:w-1/3'>
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder='you@company.com' className='w-full p-3 rounded text-gray-900' />
        <button className='mt-3 w-full bg-yellow-400 text-gray-900 p-3 rounded'>Get Started</button>
      </div>
    </div>
  )
}
