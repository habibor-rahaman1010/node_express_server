const express = require('express');
const { blogs, singlePost, author, BlogPost, getPost, userPost, findUserPost } = require('../Controller/contoller');
const route = express.Router()

//hear is my all routes
const AllBlogs = route.get('/blogs', blogs);

const AllAuthor = route.get('/all_author', author);

const singleBlog = route.get('/single/blog/:id', singlePost);

const myBlogPost = route.get('/blogs/post', BlogPost);

const findPost = route.get('/get/post', getPost);

const myUserPost = route.post('/user/post', userPost)

const userFindPost = route.get('/user/post', findUserPost)

module.exports = { AllBlogs, AllAuthor, singleBlog, myBlogPost, findPost, myUserPost, userFindPost };