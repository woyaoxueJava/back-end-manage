const express = require('express');

const router = express.Router();

router.use((req,res) => {
    res.render('404.ejs')
});
module.exports = router;