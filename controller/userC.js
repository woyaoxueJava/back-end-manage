const usersdb = require('../model/usersdb.js');

module.exports = {
    getUsers(req,res) {
        usersdb.getUsers((err,results) => {//对数据库操作的结果进行进一步处理
            if (err) {
                res.send('404');
            } else {
                res.render('users.ejs',{results})
            }
        })
    }
}

//userC => usersdb => db
//路由触发userC调用usersdb中的getusers方法，usersdb中的getusers方法有调用db中的query方法