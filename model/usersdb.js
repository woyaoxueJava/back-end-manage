const db = require('./db.js');

module.exports = {
    getUsers(callback) {
        let sqlStr = `SELECT * FROM users`;
        db.query(sqlStr,callback);//该方法有两个参数，第一个参数由userdb中传入，第二个参数由上层的userC传入
    }
}

//函数的执行顺序是从外往里，内部函数可以使用外部函数传递的参数（作用域链）