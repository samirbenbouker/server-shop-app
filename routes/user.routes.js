const router = require("express").Router()

const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} = require("../auth/verifyToken");

const {
    updateUserByIdController,
    deleteUserByIdController,
    getUserByIdController,
    fetchAllUserController,
    getUserStatusController
} = require("../controllers/user.controller")

// GET '/' endpoint give all users
router
    .route("/")
    .get(fetchAllUserController)

// PUT '/:idUser' endpoint update a user
// DELETE '/:idUSER' endpoint delete a user
router
    .route("/:id")
    .put(updateUserByIdController)
    .delete(deleteUserByIdController)

// GET '/find/:idUser' endpoint give a one user 
router
    .route("/find/:id")
    .get(verifyTokenAndAdmin, getUserByIdController)

// GET '/stats' endpoint return stats user
router
    .route("/stats")
    .get(verifyTokenAndAdmin, getUserStatusController)

module.exports = router