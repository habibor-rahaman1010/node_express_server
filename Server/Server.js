const express = require('express');
const { AllBlogs, AllAuthor, singleBlog, myBlogPost, findPost, myUserPost } = require('../Routes/routes');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const { findUserPost } = require('../Controller/contoller');
const port = process.env.PORT || 5000;
app.set('port', process.env.PORT || 5000)

//This is my middleware function
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//mongoDB database connect here..
const config = `mongodb+srv://habibor144369:pGXoBkThFzbCSrLY@cluster0.sefj3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const myMongoDB = async () => {
    await mongoose.connect(config, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
        console.log('mongoDB connect')
    })
}
myMongoDB();


//hear is my all api routes...
app.use('/all_blogs', AllBlogs);
app.use('/', AllAuthor);
app.use('/', singleBlog);
app.use('/', myBlogPost);
app.use('/', findPost);
app.use('/all_post', myUserPost);
app.use('/all_user_post', findUserPost)

app.listen(port, () => {
    console.log(`Node express server listening on port ${port}`)
})