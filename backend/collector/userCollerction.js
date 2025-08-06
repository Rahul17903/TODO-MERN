const bcrypt = require('bcryptjs')
const User = require('../modules/User')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config()

//Register 

const register = async(req,res)=>{
    const {name, email, password} = req.body;
    try {
        const exitingUser = await User.findOne({email})
        if(exitingUser) return res.status(400).json({message:"User Already exists"});

        const hashedPassword = await bcrypt.hash(password,10);
        const user = new User({name,email,password:hashedPassword})
        await user.save();
        res.status(200).json({message:"User Registered"});

    } catch (error) {
        res.status(500).json({message:error})
    }
}


const login = async(req,res)=>{
    const {email,password} = req.body;
    try {
        const user = await User.findOne({email})
        if(!user) return res.status(400).json("not valid email")
         const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch) return res.status(400).json({message:"Invalid Password"})
        
        const token = jwt.sign({id:user._id},process.env.JWT_SECRET)
        res.json({token})
        
    } catch (error) {
        res.status(500).json({message:error})
    }
}

module.exports = {register, login}