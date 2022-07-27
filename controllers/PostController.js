const Post = require('../models/Post')
const User = require('../models/User')

module.exports = class PostController{
    static async showPost(req,res){
        res.render('post/forum')
    }

    static async forum(req,res){
        res.render('post/forum')
    }

    static createPost(req, res){
        res.render('post/create')
    }
}
