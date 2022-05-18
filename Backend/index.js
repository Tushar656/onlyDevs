const express = require('express');
const app = express();
app.use(express.json());


const dotenv = require("dotenv");
dotenv.config();


const authRoute = require("./Routes/auth")
const orderRoute = require("./Routes/order")
const productRoute = require("./Routes/product")
const userRoute = require("./Routes/user")

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/OLY')
.then(console.log("Connection successfull"))
.catch((err) => console.log("Not connected to mongodb"));




app.use('/api/auth', authRoute);
app.use('/api/order', orderRoute);
app.use('/api/product', productRoute);
app.use('/api/user', userRoute);


 app.listen(8000,()=>{
     console.log("run at port 8000");
 })