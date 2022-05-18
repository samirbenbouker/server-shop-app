const Cart = require("../models/Cart.model")

const createCartController = async (req, res) => {
    const newCart = new Cart(req.body)

    try {
        const savedCart = await newCart.save()
        res.status(200).json(savedCart)
    } catch (error) {
        res.status(500).json(err)
    }
}

const fetchAllCartController = async (req, res) => {
    try {
        const carts = await Cart.find()
        res.status(200).json(carts)
    } catch (error) {
        res.status(500).json(error)
    }
}

const updateCartController = async (req, res) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            {
                new: true
            }
        )

        res.status(200).json(updatedCart)
    } catch (error) {
        res.status(500).json(err)
    }
}

const deleteCartController = async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("Cart has been deleted...")
    } catch (error) {
        res.status(500).json(err)
    }
}

const getUserCartController = async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.userId })
        res.status(200).json(cart)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {
    createCartController,
    fetchAllCartController,
    updateCartController,
    deleteCartController,
    getUserCartController
}