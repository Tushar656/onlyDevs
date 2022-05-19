const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title:{type: String, required: true, unique: true},
    desc:{type: String, required: true},
    img1:{type: String, required: true},
    img2:{type: String, required: true},
    img3:{type: String, required: true},
    price: {type: Number, required: true},
    category: {type: Array},
}, {timestamps: true})

module.exports = mongoose.model("Product", ProductSchema);

