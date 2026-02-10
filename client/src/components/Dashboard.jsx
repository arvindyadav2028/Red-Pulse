import React from 'react'

export default function Dashboard(){
  return (
    <div className='bg-gray-50 rounded-lg p-6 shadow'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <div className='col-span-2 bg-gradient-to-r from-slate-800 to-slate-700 text-white rounded-lg p-4'>
          <div className='font-semibold'>Overview</div>
          <div className='mt-6'>
            {/* Placeholder for a chart library like Recharts */}
            <div className='h-32 bg-black/20 rounded'></div>
          </div>
        </div>
        <div className='bg-white rounded-lg p-4'>
          <div className='font-semibold mb-2'>Stats</div>
          <div className='grid grid-cols-2 gap-2 text-sm text-gray-600'>
            <div>Lives Saved<br/><strong>1,240</strong></div>
            <div>Donations<br/><strong>3,210</strong></div>
            <div>Hospitals<br/><strong>312</strong></div>
            <div>BloodBanks<br/><strong>12</strong></div>
          </div>
        </div>
      </div>

      <div className='mt-6 grid grid-cols-3 md:grid-cols-6 gap-3'>
        {Array.from({length:6}).map((_,i)=>(
          <div key={i} className='bg-white rounded-lg p-4 text-center text-sm shadow'>Item {i+1}</div>
        ))}
      </div>
    </div>
  )
}
