const router = require('express').Router()
const Blog = require('../models/Blog')

//create blog
router.post('/', async(req, res)=> {
    const newBlog = new Blog(req.body)
    try {
        const savedBlog = await newBlog.save()
        res.status(200).json(savedBlog)
    } catch (error) {
        res.status(500).json(error)
    }
})

//update blog
router.put('/:id', async(req, res)=> {
    try {
        const targetedBlog = await Blog.findById(req.params.id)
        if(targetedBlog.username === req.body.username){
            try {
                const updateBlog = await Blog.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
                res.status(200).json(updateBlog)
            } catch (error) {
                res.status(500).json(error)
            }
        }else{
            res.status(401).json("You can only update your blog!")
        }
    } catch (error) {
        res.status(500).json(error)
    }
})


//delete blog
router.delete('/:id', async(req, res)=> {
    try {
        const targetBlog = await Blog.findById(req.params.id)
        if(targetBlog.username === req.body.username){
            try {
                await targetBlog.delete()
                res.status(200).json("Blog has been deleted!")
            } catch (error) {
                res.status(500).json(error)
            }
        }else{
            res.status(401).json("You can only delete your blog!")
        }
    } catch (error) {
        res.status(500).json(error)
    }
})

//get all blogs with query
router.get('/', async(req, res)=> {
    let username = req.query.user
    let categoryName = req.query.category
    try {
        let post;
        if(username){
            post = await Blog.find({ username: username })
        }else if(categoryName){
            post = await Blog.find({ categories: { $in: [categoryName] } })
        }else{
            post = await Blog.find()
        }

        res.status(200).json(post)

    } catch (error) {
        res.status(500).json(error)
    }
})

//get clicked blog
router.get('/:id', async(req, res)=> {
    try {
        const targetBlog = await Blog.findById(req.params.id)
        res.status(200).json(targetBlog)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router