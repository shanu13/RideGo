import React,{useState,useEffect} from 'react'
import { useContext } from 'react'
import { useRouter } from 'next/router'
import { UberContext } from '../context/uberContext'

import style from "../styles/getTrips.module.css"

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

    useEffect( () => {
        if(!currentAccount)
        setTimeout(3000)
        ;(async () => {
            Promise.all[Get(currentAccount)]
            console.log(myTrips)
        })()
      
    }, [currentAccount])
    
    function capitalize(str) {
        const arr = str.split(" ");

        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

        }

        return arr.join(" ");
    }
    

  return (
    <>
    <div className={style.doc}> <h1 className={style.heading}> My Trips  </h1></div>
    <div className={style.cards}> {myTrips.map(trip => {
        return (
            <div className={style.trip} key={trip._id}>
                    <li className={style.one}>Pickup: {capitalize(trip.pickup)}</li>
                    <li className={style.one}>DropOff: {capitalize(trip.dropoff)}</li>
                    <li className={style.one}>Fare: {capitalize(trip.price)} ETH</li>
                    <li className={style.one}>Ride Type: {capitalize(trip.rideCategory)}</li>
                    <li className={style.one}>Booking Time: {trip.time.substring(11,16)}, {trip.time.substring(0,10)}</li>
            </div>
            
        )
    })} </div>
    </>
  )
}
