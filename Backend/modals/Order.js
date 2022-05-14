const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    userId:{type: String, required: true},
    // products:[
    //     {
    //         productId: {type: String},
    //         Quantity: {type: Number, default: 1},
    //     }
    // ],
    orderType: {type: String, required: true},
    amount: {type: Number, required: true},
    address: {type: Object, required: true},
    status: {type: String, default: "Pending"},
}, {timestamps: true})

module.exports = mongoose.model("Order", OrderSchema);


