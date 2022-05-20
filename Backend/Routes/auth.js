const router = require('express').Router();
const User = require("../modals/User");
const CryptoJS = require("crypto-js");;

router.post('/register', async(req, res)=>{
    try{
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
        })

        const savedUser = await newUser.save();
        res.status(201).send(savedUser);
    }catch(err){
        res.status(400).send("Save user error")
    }
})

router.post('/login', async(req, res)=>{
    try{
        const getUser = await User.findOne({email: req.body.email});
        // console.log(req.body.username);
        !getUser && res.status(401).send("Login error1");

        const hashPass = CryptoJS.AES.decrypt(getUser.password, process.env.PASS_SEC);
        const getPassword = hashPass.toString(CryptoJS.enc.Utf8);


        getPassword !== req.body.password && res.status(404).send("Login error2");

        // const {password, ...others} = getUser._doc;
        res.status(200).send(getUser);

    }catch(err){
        res.status(400).send("Get user error")
    }
})



module.exports = router;