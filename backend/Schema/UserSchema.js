const mongoose = require('mongoose');

const Schema = mongoose.Schema

const UserSchema = new Schema({

    name : {
        type : 'string',
        required: 'true'
    },
  
    wallet_address : {
        type : 'string',
        required: 'true'
    }
})

const Users = mongoose.model('Users',UserSchema)

module.exports = Users;