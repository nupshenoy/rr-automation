import React, { useState } from 'react'
import RRtable from './RRtable'
import MonitoringTable from './MonitoringTable'

const RR = () => {

    const apac1 = { 'Prerna': 0, 'Keshav': 0, 'Aakanksha': 0, 'Sanam': 0, 'Rithik': 0, 'Harshit': 0, 'Nishant': 0, 'Rishav': 0, 'Shreyas': 0, 'Santosh': 0, 'Naveen': 0 }

    const apac2 = {'Aleema':0 , 'Nehal':0 , 'Shravanthi':0 , 'Nived':0 , 'Prathami':0 , 'Ankit':0 , 'Anusha':0 , 'Nupur':0 , 'Hari Priya':0 , 'Gaurav':0 , 'Harideep':0 , 'Naga Hariharan':0 , 'Amruta':0, 'Lavanya':0, 'Saurabh':0 }

    const [monitoring, setMonitoring] = useState(false)

    return (
        <div className="table border-2 border-[#2D6A00] p-5 rounded-xl w-full scroll-smooth overflow-auto">
            <div className='text-xl  font-bold text-center mb-4'>APAC-1</div>
            <div className="rr-1 text-md text-center bg-green-200 my-3"><span className='font-bold'>RR: </span>
                {
                    Object.keys(apac1).map(key => (
                        <span> {key} &gt;&gt; </span>
                    ))
                }
            </div>
                <RRtable apac={apac1} />


            <div className="h-[1px] bg-slate-300 mt-5 w-full "></div>


            <div className='text-xl my-4 font-bold text-center'>APAC-2</div>
            <div className="rr-1 text-md my-3 text-center bg-green-200"><span className='font-bold'>RR: </span>
            {
                    Object.keys(apac2).map(key => (
                        <span> {key} &gt;&gt; </span>
                    ))
                }
            </div>
                <RRtable apac={apac2}/>
                
        </div>

    )
}

export default RR
