import Navbar from '../components/Navbar'

import React from 'react'
import GetTrips from '../components/GetTrips'

const style = {
    wrapper: `flex-1 w-full h-full`,
    middle: `text-center absolute p-0 m-0 inline-block w-screen h-screen align-middle`,
    heading: `text-4xl font-bold m-12 mt-36`,
    ques: 'text-2xl font-bold mt-6'
}


export default function myTrips() {

    return (
        <>
            <div >
                <Navbar />
            </div>

            <div className={style.middle}>
                <GetTrips/>
            </div>
           
        </>

    )
}
