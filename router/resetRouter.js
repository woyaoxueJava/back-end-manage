const express = require('express');
const router = express.Router();
const resetC = require('../controller/resetC.js');

router.get('/password-reset',resetC.getReset)


module.exports = router;