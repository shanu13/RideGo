const getDuration = async (req, res) => {
 
  const mapboxUrl = `https://api.mapbox.com/directions/v5/mapbox/driving/${req.body.pickupCoordinates};${req.body.dropoffCoordinates}.json?access_token=pk.eyJ1Ijoic2h1YmhhbWpoYXdhciIsImEiOiJjbDA2cXJrbW0wMWRzM2JyMGdsZDZuN3hpIn0.D7qs0GFLm3gdUcVXGkujvQ`

  try {
    const response = await fetch(mapboxUrl)
    const data = await response.json()

    res.status(200).send({ message: 'success', data: data.routes[0].duration })
  } catch (error) {
    res.status(500).send({ message: 'error', data: error.message })
  }
}

export default getDuration



