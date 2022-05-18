const router = require("express").Router()

const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} = require("../auth/verifyToken");

const {
    createCartController,
    fetchAllCartController,
    updateCartController,
    deleteCartController,
    getUserCartController
} = require("../controllers/cart.controller")

router
    .route("/")
    .get(verifyTokenAndAdmin, fetchAllCartController)
    .post(verifyToken, createCartController)

router
    .route("/:id")
    .put(verifyTokenAndAuthorization, updateCartController)
    .delete(verifyTokenAndAuthorization, deleteCartController)

router
    .route("/find/:userId")
    .get(verifyTokenAndAuthorization, getUserCartController)

module.exports = router;