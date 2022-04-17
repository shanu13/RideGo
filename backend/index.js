const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const api = require('./routes/api')
const cors = require('cors')
require('dotenv').config()


app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(cors())
app.use(api);

// mongoose.connect("mongodb://localhost:27017/rideGo" ,(err) => {
//     if(err){
//         console.log(err)
//         return;
//     }

//     console.log('database connected')
// })

mongoose.connect(process.env.MONGO_URI ,{ useUnifiedTopology: true },(err) => {
    if(err){
        console.log(err)
        return;
    }

    console.log('database connected')
})

app.listen(process.env.PORT || 5000, (err)=>{
    if(!err){
        console.log('server connected');
        return;
    }
})