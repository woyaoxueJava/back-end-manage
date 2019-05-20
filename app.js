//injection
const express = require('express');
const ejs = require('ejs');
const userRouter = require('./router/usersRouter.js');
// create server

let app = express();

//static repository
app.use('/public',express.static('./public'));
app.use('/uploads',express.static('./uploads'));
app.use('/views',express.static('./views'));

// use router middleware

app.use(userRouter);


//config view engine

app.set('view engine','ejs');


//slove request

app.get('/',(req,res) => {
    res.send('home');
});

//listen the server

app.listen(3000,() => {
    console.log('server serving at http://127.0.0.1:3000.')
})

