import React from 'react'

const RRtable = ({ apac, monitoring }) => {

    const mappedKeys = Object.keys(apac).map(key => {
        return `Key:${key}`
    })

    console.log(mappedKeys)

    return (
        <div className="a1 flex gap-x-4">

            {/* Active Table */}
            <table className=' border-collapse border-spacing-1 border-black text-sm'>
                <thead>
                    <tr>
                        <th>Employee</th>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                        <th>6</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(apac).map(key => (
                        <tr key={key}>
                            {/* {monitoring? '' : <td className='border border-black p-0 text-center'>{key}</td>} */}
                            <td className='border border-black p-0 text-center w-28'>{key}</td>
                            <td className='border border-black p-0  text-center w-36'> 2024-1010-281968
                            </td>
                            <td className='border border-black p-0  text-center w-36'></td>
                            <td className='border border-black p-0  text-center w-36'></td>
                            <td className='border border-black p-0  text-center w-36'></td>
                            <td className='border border-black p-0  text-center w-36'></td>
                            
                            <td className='border border-black p-0  text-center w-36'></td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>


            {/* Monitoring Table */}
            <table className=' border-collapse border-spacing-1 border-black text-sm'>

                <thead>
                    <tr>
                        <th>Monitoring</th>
                        

                    </tr>
                </thead>
         
                <tbody className='bg-yellow-300' >
                    {Object.keys(apac).map(key => (
                        <tr key={key}>
                            <td className='border border-black p-0  text-center w-36'></td>
                            <td className='border border-black p-0  text-center w-36'></td>
                            <td className='border border-black p-0  text-center w-36'></td>
                            <td className='border border-black p-0  text-center w-36'></td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default RRtable


