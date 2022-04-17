import React,{useState,useEffect} from 'react'
import { useContext } from 'react'
import { useRouter } from 'next/router'
import { UberContext } from '../context/uberContext'

const style = {
    heading: "mt-24 mb-6 text-4xl",
    trip: "m-12",
    one: "pl-12 pr-12 pb-8 text-xl font-bold",
    two: "pl-12 pr-12 pb-8 text-xl",
}



export default function GetTrips() {
    const {currentAccount} = useContext(UberContext);
    const [myTrips,setMyTrips] = useState([]);


    const Get = async (account) => {
        return new Promise(async(resolve, reject) => {
            try{
                console.log(account)
                const response = await fetch(`http://localhost:5000/getTrips`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                  },
                body : JSON.stringify({
                    address : account
                })
            })
            
            const data = await response.json();
            console.log(data)
            setMyTrips(data.trips);
            console.log('get',myTrips)
         }catch(error){
            console.log(error);
         }
        })
          
    }

    // useEffect(() => {
      
    // })

    useEffect( () => {
        if(!currentAccount)
        setTimeout(3000)
        ;(async () => {
            Promise.all[Get(currentAccount)]
            console.log(myTrips)
        })()
      
    },[currentAccount])
    

  return (
    <>
    <div className={style.doc}> <h1 className={style.heading}> My Trips  </h1></div>
    <div> {myTrips.map(trip => {
        return (
            <div className={style.trip} key={trip._id}>
                <div className={style.oneH}>
                    <span className={style.one}>Pickup: {trip.pickup}</span>
                    <span className={style.one}>DropOff: {trip.dropoff}</span>
                    <span className={style.one}>Fare: {trip.price} ETH</span>
                </div>
                <div className={style.twoH}>
                    <span className={style.two}>Ride Type: {trip.rideCategory}</span>
                    <span className={style.two}>Booking Time: {trip.time.substring(11,16)}, {trip.time.substring(0,10)}</span>
                </div>
            </div>
            
        )
    })} </div>
    </>
  )
}
