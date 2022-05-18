const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    categories: {
        type: Array,
        default: ["ALL"]
    },
    price: {
        type: Number,
        required: true
    },
    inStock: {
        type: Boolean,
        default: true
    }
},
    {
        timestamp: true
    }
)

const ProductModel = mongoose.model("Product", ProductSchema)

module.exports = ProductModel