const express = require('express');

const router = express.Router();

const userC = require('../controller/userC.js');

router.get('/users',userC.getUsers)
      .get('/getAllUser',userC.getAllUser)
      .post('/addUser',userC.addUser)
      .get('/delUser',userC.delUser)
      .get('/profile',userC.profile)
      .get('/login',userC.login)



module.exports = router;