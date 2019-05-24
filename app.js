//injection
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const userRouter = require('./router/usersRouter.js');
const cateRouter = require('./router/cateRouter.js');
const comRouter = require('./router/comRouter.js');
const indexRouter = require('./router/indexRouter.js');
const resetRouter = require('./router/resetRouter.js');
const postAddRouter = require('./router/postAddRouter.js');
const postsRouter = require('./router/postsRouter.js')
const lastrouter = require('./router/404.js')
// create server

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
//static repository
app.use('/public',express.static('./public'));
app.use('/uploads',express.static('./uploads'));
app.use('/views',express.static('./views'));
app.use('/static/uploads',express.static('./uploads'))

// use router middleware

app.use(userRouter);
app.use(cateRouter);
app.use(comRouter);
app.use(indexRouter);
app.use(resetRouter);
app.use(postAddRouter);
app.use(postsRouter)


//config view engine

app.set('view engine','ejs');

//config body-parser




//slove request

app.get('/',(req,res) => {
    
    res.send('home');
});
// app.post('/',(req,res) => {
//     res.send(req.body)
// })
//listen the server
app.use(lastrouter);
app.listen(3000,() => {
    console.log('http://127.0.0.1:3000')
})
//每个模块都相当于闭包，导出的内容相当于return后面的值，各模块只能通过参数进行沟通
//模块化，每个模块只负责单一的功能
//浏览器发送请求和异步对象发送请求的区别？
//表单上传文件和异步对象上传文件的异同？