const { MyPost, MyAlluserPost } = require("../models/post")

// heare is my all controller...
const blogs = async (req, res, next) => {
    res.status(200).send(
        { title: 'This is my router' }
    )
}

const author = async (req, res, next) => {
    res.status(200).send(
        { name: 'habibor', book: ['node.js', 'python', 'javascript', 'typeScript'] }
    )
}

const singlePost = async (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        id: id
    })
}

const BlogPost = async (req, res, nest) => {
    try {
        const newPost = await new MyPost({
            title: 'Thsi is my 10th Post',
            description: 'Hello programmer, this sis how can i help you, you are gineus!!, asdasdyes!, hello programer, hello, yor are',
            author: 'Habibor Rahaman',
            category: 'programming'
        })
        newPost.save();
        res.send('You ahve done add the post')
    }
    catch (error) {
        console.log(error)
    }
}

const getPost = (req, res, next) => {
    MyPost.find()
        .then((data) => {
            res.json(data)
        }).catch((error) => {
            console.log('some error', error)
        })
}

const userPost = async (req, res, next) => {
    try {
        const newPost = new MyAlluserPost(req.body);
        await newPost.save()
    }
    catch (error) {
        console.log('somethin went wrong', error)
    }
    res.send({
        sms: "ok done"
    })

}

const findUserPost = async (req, res, next) => {
    try {
        await MyAlluserPost.find()
            .then((data) => {
                res.json(data)
            }).catch((re) => {
                console.log('Something went worng')
            })
    }
    catch (error) {
        console.log('Something wen tworng')
    }
}

module.exports = { blogs, singlePost, author, BlogPost, getPost, userPost, findUserPost }