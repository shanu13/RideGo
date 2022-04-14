const mongoose = require('mongoose');

const Schema = mongoose.Schema

const TripSchema = new Schema({

    dropoff : {
        type : 'string',
        required: 'true'
    },
  
    pickup : {
        type : 'string',
        required: 'true'
    },
    rideCategory : {
        type : 'string',
        required: 'true'
    },
    price : {
        type : 'string',
        required: 'true'
    },
    address: {
        type : 'string',
        required: 'true'
    },
    time : { type : Date,
         default: Date.now }

})

const Users = mongoose.model('Trips',TripSchema)

module.exports = Users;