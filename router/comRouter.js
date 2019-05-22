const express = require('express');

const router = express.Router();
const comC = require('../controller/comC.js')
router.get('/comments',comC.getCom)

module.exports = router;