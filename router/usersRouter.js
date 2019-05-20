const express = require('express');

const router = express.Router();

const userC = require('../controller/userC.js');

router.get('/users',userC.getUsers)



module.exports = router;