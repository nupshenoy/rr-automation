import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=''>
      <nav className="bg-[url('https://core.juniper.net/assets/img/header/wall-paper-green-1.png')]  text-white h-[80px] px-5 flex items-center justify-between">
        <Link to="/" className='font-bold text-3xl'>
        {/* <img src='logo.jpg'/> */}
        Juniper Networks
      </Link>
        <Link to="https://junipernetworks.sharepoint.com/:x:/r/sites/ChennaiEXTeam/Shared%20Documents/Case%20distribution%20Chats/Shift%20Schedule%20(From%2018-Nov-2024%20to%2022-Dec-2024).xlsx?d=w8116260e683c481d81a1701653c64183&csf=1&web=1&e=6hrB1J " className='text-xl mx-10 p-2 rounded-lg hover:bg-[#74ba43]' target='_blank'>Roster
        </Link>
      </nav>
    </div>
  )
}

export default Navbar
