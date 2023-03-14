const bcrypt = require("bcryptjs")
const User = require("../models/user")
const jwt = require("jsonwebtoken")

const createToken = (_id) => {   //
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "30d" })
}

const registerUser = async (req, res) => {
    const { email, password } = req.body

    const exists = await User.findOne({ email })
    if (exists) {
        return res.status(400).json({ msg: "Email is already in use" })
    }
    if (!email || !password) {
        return res.status(400).json({ msg: "Fill out all the fields" })
    }
    const salt = await bcrypt.genSalt(10)
    const hashed = await bcrypt.hash(password, salt)

    const user = await User.create({ email, password: hashed })
    const token = createToken(user._id)

    if (user) {
        return res.status(200).json({ email, token })
    } else {
        return res.status(400).json({ msg: "inavlid user" })
    }

}


const loginUser = async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({ msg: "Fill out all the fields" })
    }
    const user = await User.findOne({ email })

    if (!user) {
        return res.status(400).json({ msg: "Incorrect email" })
    }

    const token = createToken(user._id)
    const match = await bcrypt.compare(password, user.password)

    if (!match) {
        return res.status(400).json({ msg: "Password doesn't match" })
    }

    res.status(200).json({email,token})
}


module.exports = {
    loginUser,
    registerUser
}