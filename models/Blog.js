const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
    title: {
        type: String, required: true, unique: true
    },
    content: {
        type: String, required: true
    },
    username: {
        type: String, required: true
    },
    poster: {
        type: String, default: ""
    }
}, { timestamps: true })

module.exports = mongoose.model('Blog', BlogSchema)