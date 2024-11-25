const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')



const register = async (req, res) => {
    try {
        const {username, email, password, role} = req.body;
        if(!username || !email || !password) {
            return res.status(400).json({message: 'Please fill in all fields'})
        }
        const hashedPass = await bcrypt.hash(password, 10);
        const newUser = new User({username, email, password: hashedPass, role});
        await newUser.save()
        res.status(201).json({message: 'User created successfully'})
    } catch (error) {
        res.status(404).json(`Error in creating user: ${error}`)
    }
}


const login = async (req, res) => {
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username})
        if(!username) {
            return res.status(404).json({message: `Invalid user ${username}`})
        }

        const isMatched = bcrypt.compare(password, user.password);
        if(!isMatched) {
            return res.status(400).json({message: "Invalid credentials"})
        }

        const token = jwt.sign({
            id: user._id,
            role: user.role
        }, process.env.SECRET_KEY, {expiresIn: '1h'})

        res.status(200).json({message: `Logged in successfully with token : ${token}`});
    } catch (error) {
        res.status(500).json({message: "Error loggin in with your credentials"})
    }
}

module.exports = {register, login};