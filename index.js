const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")

const userRoute = require("./routes/user.routes")
const authRoute = require("./routes/auth.routes")
const productRoute = require("./routes/product.routes")
const cartRoute = require("./routes/cart.routes")
const orderRoute = require("./routes/order.routes")
const stripeRoute = require("./routes/stripe.routes")

const path = require("path")

const {
    MONGO_URL,
    NODE_ENV
} = require("./env")

const app = express()
dotenv.config()

// CONNECT API WITH DATA BASE
mongoose
    .connect(MONGO_URL)
    .then(() => console.log("CONNECTION WITH DATABASE SUCCESSFULL"))
    .catch((err) => {
        console.log(err)
    })

app.use(cors())
app.use(express.json())

app.use("/", (req, res) => {
    res.json({message: "API ON"})
})

// auth endpoint
app.use("/api/auth", authRoute)
// users endpoint
app.use("/api/users", userRoute)
// product endpoint
app.use("/api/products", productRoute)
// carts endpoint
app.use("/api/carts", cartRoute)
// orders endpoint
app.use("/api/orders", orderRoute)
// checkout endpoint
app.use("/api/checkout", stripeRoute)

// Api run the localhost port 5000
app.listen(5000, () => {
    console.log(`Server in https://server-shop-app.herokuapp.com`)
})

