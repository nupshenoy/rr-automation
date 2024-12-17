import React from 'react'

const PAO = () => {
  return (
    <div className="statBar mb-3 border-2 h-12 border-[#2D6A00] p-3 rounded-xl flex justify-between items-center">
      <ul className='flex gap-x-4 font-bold text-md'>
        <li>P - {}</li>
        <li>A - {}</li>
        <li>O - {}</li>
      </ul>
      <ul className='flex gap-x-4 text-sm p-1'>
      <li className='p-1 border border-black'>New case</li>
        <li className='p-1 bg-orange-300'>HO</li>
        <li className='p-1 bg-yellow-300'>Monitoring</li>
        <li className=' p-1 text-red-600 border border-black'>P1</li>
      </ul>
    </div>

  )
}

export default PAO
