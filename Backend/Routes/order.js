const router = require('express').Router();
const Order = require("../modals/Order");


router.post('/', async(req, res)=>{
    try{
        const newOrder = new Order({
            userId: req.body.userId,
            orderType: req.body.orderType,
            amount: req.body.amount,
            address: req.body.address,
        })

        const savedOrder = await newOrder.save();
        res.status(201).send(savedOrder);
    }catch(err){
        // res.status(400).send("Save Order error")
        res.status(400).send(err)
    }
})

router.put('/:id', async(req, res)=>{
    try{
        const updateOrder = await Order.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true})

        res.status(200).send(updateOrder);

    }catch(err){
        res.status(400).send("Update order error")
    }
})


router.delete('/:id', async(req, res)=>{
    try{
        const updateOrder = await Order.findByIdAndDelete(req.params.id)

        res.status(200).send("Order Deleted");

    }catch(err){
        res.status(400).send("Delete Order error")
    }
})

router.get("/find/:userId", async(req, res)=>{
    try{
        const getOrder = await Order.find({userId: req.params.userId});
        res.status(200).send(getOrder);
    }catch(err){
        res.status(400).send("Get Order error");
    }
})

//GET ALL 
router.get("/" ,async(req, res)=>{
    try{
        const orders = await Order.find();
        res.status(200).send(orders)
    }catch(err){
        res.status(400).send("Get all Order error");
    }
})



module.exports = router;