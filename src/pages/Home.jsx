import React, { useState } from 'react'
import PAO from '../components/PAO'
import Navbar from '../components/Navbar'
import DateRefresh from '../components/DateRefresh'
import RR from '../components/RR'
import Footer from '../components/Footer'
import EditableTable from '../components/EditableTable'

const Home = () => {

    function getDate() {
        const today = new Date();
        // const month = today.getMonth() + 1;
        // const year = today.getFullYear();
        // const date = today.getDate();
        const options = {year: 'numeric', month: 'short', day: 'numeric'}
        const formattedDate = today.toLocaleDateString('en-us', options).replace(',', '')
        return formattedDate
    }

    const [date, setDate] = useState(getDate())


    return (
        <div>
            <Navbar />
            <div className="container mx-auto ">
                <DateRefresh date={date}/>
                <PAO />
                <RR />
            </div>
            {/* <EditableTable/> */}

            <Footer/>
        </div>
    )
}

export default Home
