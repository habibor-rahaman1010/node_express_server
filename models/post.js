const mongoose = require('mongoose');
const blogPost = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 250,
    },
    description: {
        type: String,
        required: true,
        minlength: 5,
    },
    author: {
        type: String,
        required: true
    },
    publish: {
        type: Date,
        default: new Date(),
    },
    category: {
        type: String,
        required: true
    }
})

const MyPost = mongoose.model('Blogs', blogPost);

//this is my userPost Schema

const userPost = new mongoose.Schema({
    title: {
        trim: true,
        type: String,
        required: true
    },
    discription: {
        trim: true,
        type: String,
        required: true
    },
    author: {
        trim: true,
        type: String,
        required: true
    },
    published: {
        trim: true,
        type: Date,
        default: new Date()
    }
})
const MyAlluserPost = mongoose.model('UserPost', userPost);
module.exports = { MyPost, MyAlluserPost };