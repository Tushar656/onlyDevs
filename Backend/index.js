const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/OLY')
.then(console.log("Connection successfull"))
.catch((err) => console.log("Not connected to mongodb"));

app.get('/', function (req, res) {
    res.send('Hello World');
 })

 app.listen(8000,()=>{
     console.log("run at port 8000");
 })