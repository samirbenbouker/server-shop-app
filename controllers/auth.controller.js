const User = require("../models/User.model")
const CryptoJS = require("crypto-js")
const jwt = require("jsonwebtoken")

const {
    PASS_ENC,
    JWT_SEC
} = require("../env")

const registerController = async (req, res) => {
    let admin = false
    if (req.body.isAdmin) {
        admin = true
    }

    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(
            req.body.password,
            PASS_ENC
        ).toString(),
        isAdmin: admin
    })

    try {
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
    } catch (error) {
        res.status(500).json(error)
    }
}

const loginController = async (req, res) => {
    try {
        const user = await User.findOne({
            username: req.body.username
        })

        !user && res.status(401).json("Wrong username")

        const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            PASS_ENC
        )

        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8)

        const inputPassword = req.body.password

        originalPassword != inputPassword && res.status(401).json("Wrong password")

        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin
        },
            JWT_SEC,
            {
                expiresIn: "3d"
            }
        )

        const { password, ...others } = user._doc;

        res.status(200).json({ ...others, accessToken })
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = { registerController, loginController }