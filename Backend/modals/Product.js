const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    username: {type: String},
    title:{type: String, required: true, unique: true},
    desc:{type: String, required: true},
    img:{type: String, required: true},
    price: {type: Number, required: true},
    mobile: {type: Number, required: true},
}, {timestamps: true})

module.exports = mongoose.model("Product", ProductSchema);

