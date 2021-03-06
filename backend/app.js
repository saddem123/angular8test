const express = require('express')
const bodyParser = require('body-parser')

const Post = require('./models/post')


const app = express()

app.use(bodyParser.json())

app.use((req, res, next) => {   
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-type, Accept')
    res.setHeader("Access-Control-Allow-Methods","GET, POST, PATCH, DELETE, OPTIONS")    
    next()
})
app.post("/api/posts", (req,res,next) => {
    const post =  new Post({
        title: req.body.title,
        content: req.body.content
    })
    console.log(post)
    res.status(201).json({
        message: "Post added successfully !"
    })
})
// Q7qXF29jXPDES2Q

app.get('/api/posts',(req, res, next)=> {
    const posts = [
        {id: '1',title:'First server-side post',content:'This is coming from server!'},
        {id: '2',title:'Second server-side post',content:'This is coming from server !'},
        {id: '3',title:'Third server-side post',content:'This is coming from server !'}
        
    ]

    res.status(200).json({
        message: 'Posts fetched succesfully !',
        posts: posts
    });
})

module.exports = app;