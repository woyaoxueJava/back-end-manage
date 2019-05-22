const express = require('express');

const router = express.Router();
const indexC = require('../controller/indexC');

router.get('/index',indexC.getIndex)

module.exports = router;