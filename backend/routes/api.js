const express = require('express');;
const router = express.Router();
const User = require('../Schema/UserSchema');
const Trips = require('../Schema/TripSchema');

router.get('/',(req, res) => {
    res.send('<h1> server running </h1>')
})

router.post('/login' , async(req,res)=>{
    const {userWalletAddress, name} = req.body;
    

    try{
        const user = await User.findOne({wallet_address: userWalletAddress})
        console.log(user)
        if(user){
            res.status(200).send({ message: 'success' })
            return;
        } 
     
        const new_user = new User({
            name : name,
            wallet_address: userWalletAddress,
        })
     
        await new_user.save();
        console.log(new_user)
        res.status(200).send({ message: 'success' })
        
    } catch(error){
        res.status(500).send({ message: 'error', data: error.message })
    }
})

router.get('/getUser', async(req,res) => {
    const address = req.query.walletAddress;
    
    try{
        const user = await User.findOne({wallet_address : address})
        if(!user){
            throw Error('User not found');
        }

        console.log(user)

         res.status(200).send({ message: 'success', data: user })
    } catch(error){
        res.status(500).send({ message: 'error', data: error.message })
    }
})


router.post('/saveTrip', async (req,res) => {
  const  { pickupLocation, dropoffLocation,userWalletAddress,price,selectedRide } = req.body
  console.log(req.body)
  try{
      const ride = new Trips({
        dropoff : dropoffLocation,
        pickup : pickupLocation,
        rideCategory : selectedRide,
        price : price,
        address : userWalletAddress
      })

        await ride.save();
        console.log(ride)
        res.status(200).send({ message: 'success' })
  }catch(error){
    res.status(500).send({ message: 'error', data: error.message })
  }
})

router.post('/getTrips', async (req,res) => {
    const address = req.body.address;
    console.log(address)
    try{
        if(!address) throw Error('Invalid Address')
        const trips = await Trips.find({address : address});
        console.log(trips);
        res.status(200).send({ message: 'success',trips : trips});
    }catch(error){
        res.status(500).send({ message: 'error', data: error.message })
    }
})

module.exports = router;