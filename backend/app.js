const express = require('express')

const app = express()

app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader(
        'Access-Control-Allow-Header',
        'Origin, X-Requested-With, Content-type, Accept')
    res.setHeader("Access-Control-Allow-Methods","GET, POST, PATCH, DELETE, OPTIONS")    
    next()
})

app.use('/api/posts',(req, res, next)=> {
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