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


const multer = require('multer');
const path = require('path')
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, "public/images")
    },
    filename: (req, file, cb)=>{
        cb(null, req.body.name)
    }
})

app.use('/images', express.static(path.join(__dirname, "public/images")))

const upload = multer({storage});
app.post('/api/upload',upload.single("file"), (req, res)=>{
    try{
        return res.status(200).send("File upload successfully")
    }catch(err){
        console.log("Uploading error");
    }
})


 app.listen(8000,()=>{
     console.log("run at port 8000");
 })