const router = require("express").Router();
const Product = require("../modals/Product");


//CREATE
router.post('/', async(req, res)=>{
    const newProduct = new Product(req.body);

    try{
        const savedProduct = await newProduct.save();
        res.status(201).send(savedProduct);
    }catch(err){
        res.status(500).send(err);
        // res.status(500).send("Create product error");
    }
})

//UPDATE
router.put("/:id", async(req, res)=>{
    try{
        const updaetProduct = await Product.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true})

        res.status(200).send(updaetProduct);
    }catch(err){
        res.status(400).send("Update product err!!!");
    }
})


//DELETE
router.delete("/:id", async(req, res)=>{
    try{
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).send("Product has been deleted");
    }catch(err){
        res.status(400).send("Delete error");
    }
})

//GET PRODUCT
router.get("/find/:id", async(req, res)=>{
    try{
        const getProduct = await Product.findById(req.params.id);
        res.status(200).send(getProduct);
    }catch(err){
        res.status(400).send("Get product error");
    }
})

//GET ALL PRODUCTS
router.get("/", async(req, res)=>{
    let newQuery = req.query.new;
    let categoryQuery = req.query.category;
    try{
        let getProducts;
        
        if(newQuery){
            newQuery.toLowerCase();
            getProducts = await Product.find().sort({createdAt: -1}).limit(5);
        }else if(categoryQuery){
            categoryQuery = categoryQuery.toLowerCase();
            getProducts = await Product.find({category:{
                $in:[categoryQuery]
            }})
        }else{
            getProducts = await Product.find();
        }

        res.status(200).send(getProducts);
    }catch(err){
        res.status(400).send("Get all product error");
    }
})

module.exports = router;