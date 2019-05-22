const express = require('express');
const router = express.Router();
const postAddC = require('../controller/postAddC.js');

router.get('/post-add',postAddC.getPostAdd)


module.exports = router;