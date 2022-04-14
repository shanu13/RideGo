import React,{useState,useEffect} from 'react'
import { useContext } from 'react'
import { useRouter } from 'next/router'
import { UberContext } from '../context/uberContext'



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
    <div> <h1> My Trips  </h1></div>
    <div> {myTrips.map(trip => {
        return (
            <div key={trip._id}>
                <li>{trip.dropoff}</li>
                <li>{trip.pickup}</li>
                <li>{trip.price}</li>
                <li>{trip.rideCategory}</li>
                <li>{trip.time}</li>
                <li>  </li>
            </div>
            
        )
    })} </div>
    </>
  )
}
