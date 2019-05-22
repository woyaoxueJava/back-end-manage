const express = require('express');

const router = express.Router();
const cateC = require('../controller/cateC.js')
router.get('/categories',cateC.getCate);

module.exports = router