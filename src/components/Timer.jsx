import React, { useEffect, useState } from 'react'

const Timer = () => {

const [time, setTime] = useState(15*60)

useEffect(()=>{
    if(time<=0) return;

    const intervalId = setInterval(()=>{
        setTime(prevTime=> prevTime-1);
    }, 1000)

    return()=> clearInterval(intervalId)
}, [time])

const formatTime = (seconds)=>{
    const min =  Math.floor(seconds/60)
    const sec =  seconds%60
    return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`
}


  return (
    <div>
      {formatTime(time)}
    </div>
  )
}

export default Timer
