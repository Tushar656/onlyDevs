const router = require('express').Router();
const User = require("../modals/User");

router.put("/:id", async(req, res)=>{
    if(req.body.password){
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString()
    }

    try{
        const updaetuser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true})

        res.status(200).send(updaetuser);
    }catch(err){
        res.status(400).send("Update err!!!");
    }
})


//DELETE
router.delete("/:id", async(req, res)=>{
    try{
        await User.findByIdAndDelete(req.params.id);
        res.status(200).send("User has been deleted");
    }catch(err){
        res.status(400).send("Delete error");
    }
})

//GET USER
router.get("/find/:id", async(req, res)=>{
    try{
        const getUser = await User.findById(req.params.id);
        res.status(200).send(getUser);
    }catch(err){
        res.status(400).send("Delete error");
    }
})

//GET ALL USERS
router.get("/", async(req, res)=>{
    const query = req.query.new;
    try{
        const Users = query ? await User.find().sort({_id: -1}).limit(5) : await User.find();
        res.status(200).send(Users);
    }catch(err){
        res.status(400).send("Delete error");
    }
})


module.exports = router;