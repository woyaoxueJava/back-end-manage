const express = require('express');

let router = express.Router();
    router.get('/users',(req,res) => {
        res.render('users');
    })


module.exports = router;