const express = require("express")

const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin
} = require("../auth/verifyToken");

const {
    createOrderController,
    fetchAllOrderController,
    getMonthlyIncomeController,
    getUserOrdersController,
    deleteOrderController,
    updateOrderController
} = require("../controllers/order.controller")

const router = express.Router()

router
    .route("/")
    .get(verifyTokenAndAdmin, fetchAllOrderController)
    .post(verifyToken, createOrderController)

router
    .route("/:id")
    .put(verifyTokenAndAdmin, updateOrderController)
    .delete(verifyTokenAndAdmin, deleteOrderController)

router
    .route("/find/:userId")
    .get(verifyTokenAndAuthorization, getUserOrdersController)

router
    .route("/income")
    .get(verifyTokenAndAdmin, getMonthlyIncomeController)

module.exports = router