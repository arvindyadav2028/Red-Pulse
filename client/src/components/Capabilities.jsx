import React from 'react'

const CapCard = ({title, subtitle}) => (
  <div className='bg-white rounded-lg shadow p-6 flex-1'>
    <div className='text-3xl mb-3'>●</div>
    <h3 className='font-semibold'>{title}</h3>
    <p className='text-sm text-gray-500 mt-1'>{subtitle}</p>
  </div>
)

export default function Capabilities(){
  return (
    <div>
      <h2 className='text-2xl font-semibold mb-6'>Key Capabilities</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <CapCard title='Smart Scheduling' subtitle='Donor scheduling & reminders' />
        <CapCard title='Real-time Tracking' subtitle='Track blood movement & inventory' />
        <CapCard title='Emergency Alerts' subtitle='Instant hospital notifications' />
      </div>
    </div>
  )
}
