import React from 'react'
import Timer from './Timer'

const DateRefresh = ({date}) => {

  return (
    
    <div className="flex justify-between font-bold items-center mr-3 text-md">
        <div className="date py-2"><span className=' mx-2'>Date:</span>{date}</div>
        <div className="refresh py-2 flex gap-x-2">Last refreshed: <Timer/></div>
    </div>
  )
}

export default DateRefresh
