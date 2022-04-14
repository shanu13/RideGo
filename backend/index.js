const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const api = require('./routes/api')
const cors = require('cors')


app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(cors())
app.use(api);

mongoose.connect("mongodb://localhost:27017/rideGo" ,(err) => {
    if(err){
        console.log(err)
        return;
    }

    console.log('database connected')
})

app.listen(5000, (err)=>{
    if(!err){
        console.log('server connected');
        return;
    }
})