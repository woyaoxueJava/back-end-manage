const usersdb = require('../model/usersdb.js');
const formidable = require('formidable');
module.exports = {
    getUsers(req,res) {
        usersdb.getUsers((err,results) => {//对数据库操作的结果进行进一步处理
            if (err) {
                res.send('404');
            } else {
                res.render('users.ejs',{results})
            }
        })
    },
    getAllUser(req,res) {
        usersdb.getUsers((err,results) =>{
            if (err) {
                res.send({
                    status: 404,
                    msg: 'failed',
                    data: null
                })
            } else {
                res.send({
                    status: 200,
                    msg: 'success',
                    data: results
                })
            }
        })
    },
    addUser(req,res) {

        var form = new formidable.IncomingForm();

        form.parse(req,(err,fields,files) => {
            
            
            usersdb.addUser(fields,(err,results) => {
                
                    if (err) {
                        res.send({
                            status: 400,
                            msg: 'failed'
                        })
                    } else {
                        res.send({
                            status: 200,
                            msg: 'success'
                        })
                    }

              })
            
      })    
    },
    delUser(req,res) {
        let id = req.query.id;
        usersdb.delUser(id,(err,results) => {
            if (err) {
                res.send({
                    status: 400,
                    msg: 'failed',
                    data: null
                })
            } else {
                res.send({
                    status: 200,
                    msg: 'success',
                    data: results
                })
            }
        })
    },
    profile(req,res) {
        res.render('profile');
    },
    login(req,res) {
        res.render('login')
    }
}

//userC => usersdb => db
//路由触发userC调用usersdb中的getusers方法，usersdb中的getusers方法有调用db中的query方法