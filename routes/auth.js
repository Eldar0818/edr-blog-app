const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')

router.post('/register', async(req, res)=> {

     try {

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)

        const newUser = new User({ 
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
         })

         const savedUser = await newUser.save()
         res.status(200).json(savedUser)
     } catch (error) {
         res.status(500).json(error)
     }
})

router.post('/login', async(req, res)=> {
    try {
        const targetUser = await User.findOne({ username: req.body.username })
        if(!targetUser){
            return res.status(500).json("Incorrect username or password!")
        }

        const targetUserPassword = await bcrypt.compare(req.body.password, targetUser.password)
        if(!targetUserPassword){
            return res.status(500).json("Incorrect username or password!")
        }

        const { password, ...others } = targetUser._doc
        res.status(200).json(others)

    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router