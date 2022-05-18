const router = require("express").Router()
const { paymentController } = require("../controllers/stripe.controller")

// POST '/payment' endpoint is a stripe controller
router
    .route("/payment")
    .post(paymentController)

module.exports = router