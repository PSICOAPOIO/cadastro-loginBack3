const express = require('express')
const router = express.Router()
const PostController = require('../controllers/PostController')

//helper
const checkAuth = require('../helpers/auth').checkAuth

router.get('/add', checkAuth,  PostController.createPost)
router.get('/forum', checkAuth,  PostController.forum)
router.get('/', PostController.showPost)



module.exports = router