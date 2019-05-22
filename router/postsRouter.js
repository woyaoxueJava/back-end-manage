const express = require('express');
const router = express.Router();
const postsC = require('../controller/postsC.js');

router.get('/posts',postsC.getPosts)


module.exports = router;