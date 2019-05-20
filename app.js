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
app.use('/static/uploads',express.static('./uploads'))

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
    console.log('http://127.0.0.1:3000')
})
//模块化，每个模块只负责单一的功能
//浏览器发送请求和异步对象发送请求的区别？
//表单上传文件和异步对象上传文件的异同？