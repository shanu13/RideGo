import { useEffect, useContext,useState } from 'react'
import mapboxgl from 'mapbox-gl'
import { UberContext } from '../context/uberContext'

const style = {
  wrapper: `flex-1 h-full w-full`,
}

mapboxgl.accessToken = 'pk.eyJ1Ijoic2h1YmhhbWpoYXdhciIsImEiOiJjbDA2cXJrbW0wMWRzM2JyMGdsZDZuN3hpIn0.D7qs0GFLm3gdUcVXGkujvQ';


 


const Map = () => {


  const { pickupCoordinates, dropoffCoordinates } = useContext(UberContext)
  const [location,setLocation] = useState({})



const getCoordinates = ()=>{
  return new Promise(async (resolve, reject) => {
    try{
      let loc;
  navigator.geolocation.getCurrentPosition(position =>{
    loc = {
      lat : position.coords.latitude,
      longt : position.coords.longitude
    }
    setLocation(loc)
  })
  resolve(location);
    }catch(err){
      console.log(err)
      reject();
    }
     })
}


useEffect(() =>{
  ;(async () => {
    await Promise.all([
      getCoordinates()
    ])
  })()
},[])



  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [91.55845402235552, 26.080719523125097],
      zoom: 11,
    })

    if (pickupCoordinates) {
      addToMap(map, pickupCoordinates)
    }

    if (dropoffCoordinates) {
      addToMap(map, dropoffCoordinates)
    }

    if (pickupCoordinates && dropoffCoordinates) {
      map.fitBounds([dropoffCoordinates, pickupCoordinates], {
        padding: 400,
      })
    }
  }, [pickupCoordinates, dropoffCoordinates])

  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map)
  }

  return <div className={style.wrapper} id='map' />
}

export default Map
