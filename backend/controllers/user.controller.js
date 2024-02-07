const User = require('../models/User.model')
const { hashPassword, comparePassword } = require("../helpers/hashPassword")
const jwt = require("jsonwebtoken")




const register = async (req, res) => {
    const userInfo = req.body
    try {
        const hashed = await hashPassword(userInfo.password)
        userInfo.password = hashed
        const user = new User(userInfo)
        const data = await user.save()
        res.status(200).json({
            message: " User created",
            data
        })
    } catch (error) {
        console.log(error.message)
    }
}

const login = async (req, res) => {
    const { email, password } = req.body
    let passwordValidation

    try {
        const user = await User.findOne({ email: email })
        if (!user) {
            res.status(400).json("Email or password invalid!")
        } else {

            passwordValidation = await comparePassword(password, user.password)
        }
        if (!passwordValidation) {
            res.status(400).json("Email or password invalid!")
        } else {
            const { _id, name } = user
            const token = jwt.sign({ _id, name }, process.env.SECRET_KEY, { expiresIn: "1h" })
            res.status(200).cookie("authToken", token, { maxAge: 60000 * 60, httpOnly: true }).json({ message: "successfuly login" })
        }

    } catch (error) {
        console.log(error.message)
    }
}

module.exports = { register, login }