const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')

//update user
router.put('/:id', async(req, res)=> {
    if(req.body.userId === req.params.id){

        if(req.body.password){
            const salt = await bcrypt.genSalt(10)
            req.body.password = await bcrypt.hash(req.body.password, salt)
        }

        try {
            
            const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
            res.status(200).json(updatedUser)

        } catch (error) {
            res.status(500).json(error)
        }

    }else{
        res.status(400).json('You can update only your account')
    }
})



//find a user
router.get('/:id', async(req, res)=> {
    try {
        const targetUser = await User.findById(req.params.id)
        const {password, ...others} = targetUser._doc
        res.status(200).json(others)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router