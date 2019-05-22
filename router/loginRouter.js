const express = require('express');
const router = express.Router();
const loginC = require('../controller/loginC.js');

router.get('/index',loginC.getLogin)


module.exports = router;