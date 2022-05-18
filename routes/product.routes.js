const router = require("express").Router()

const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} = require("../auth/verifyToken");

const {
    createProductController,
    updateProductController,
    deleteProductController,
    fetchAllProduct,
    getProductController
} = require("../controllers/product.controller")

// GET '/' endpoint return all products
// POST '/' endpoint create a product
router
    .route("/")
    .get(fetchAllProduct)
    .post(createProductController)

// PUT '/idProduct' endpoint update a product
// DELETE '/idProduct' endpoiunt delete a product
router
    .route("/:id")
    .put(updateProductController)
    .delete(deleteProductController)

// GET '/find/idProduct' endpoint get a one product
router
    .route("/find/:id")
    .get(getProductController)

module.exports = router
